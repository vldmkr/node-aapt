'use strict';

const exec = require('child_process').exec;
const path = require('path');
const os = require('os');
const fs = require('fs');

const aapt = path.join(__dirname, 'lib', os.type(), 'aapt');

module.exports = function (filename, callback) {
  callback = callback || function () {};
  return new Promise(function (resolve, reject) {
    fs.access(aapt, fs.X_OK, (err) => {
      if (err) {
        err.msg = ['Hmmm, what OS are you using?', os.type()].join(' ');
        reject(err);
        callback(err, null);
      } else {
        const cmd = [aapt, 'dump', 'badging', filename].join(' ');
        exec(cmd, (err, stdout, stderr) => {
          const error = err || stderr;
          if (error) {
            reject(error);
            callback(error, null);
          } else {
            const appInfo = createAppInfo(stdout);
            resolve(appInfo);
            callback(null, appInfo);
          }
        });
      }
    });
  });
};

function findKeyValue(string) {
  const keyValue = /(\w+[-\w+]*):'([^']*)'/;
  //application-label-ur-PK:'Hello world'
  return string.match(keyValue);
}

function createAppInfo(stdout) {
  var appInfo = {};
  var lines = stdout.split('\n');

  for (var i in lines) {
    var match;
    if (match = findKeyValue(lines[i])) {
      //application-label-ur-PK:'Hello world'
      appInfo[match[1]] = match[2];
    } else if (match = lines[i].match(/^(\w+[-\w]+):((\s+\w+='[^']*')+)$/)) {
      //package: name='mingsin.hello' versionCode='1' versionName='1.0' platformBuildVersionName=''
      var tmp;
      if (tmp = match[2].match(/(\w+)='([^'])*'/g)) {
        var obj = {};
        for (var j in tmp) {
          var result = tmp[j].match(/(\w+)='([^']*)'/); // name='mingsin.hello' 
          if (result) {
            obj[result[1]] = result[2];
          }
        }

        /**
         * to handle repeated items like use-permission
         * 
         *  uses-permission: name='android.permission.CHANGE_WIFI_MULTICAST_STATE'
            uses-permission: name='com.tencent.mm.plugin.permission.READ'
            uses-permission: name='com.tencent.mm.plugin.permission.WRITE'
            uses-permission: name='com.tencent.mm.permission.MM_MESSAGE'
            uses-permission: name='com.huawei.authentication.HW_ACCESS_AUTH_SERVICE'
            uses-permission: name='android.permission.ACCESS_NETWORK_STATE'
            uses-permission: name='android.permission.ACCESS_COARSE_LOCATION'
            uses-permission: name='android.permission.ACCESS_FINE_LOCATION'
            uses-permission: name='android.permission.CAMERA'
            uses-permission: name='android.permission.GET_TASKS'
         */
        var currItem = match[1];
        var r = appInfo[currItem];
        if (r) {
          if (r.constructor === Array) {
            r.push(obj);
          } else {
            appInfo[currItem] = [r, obj];
          }
        } else {
          appInfo[currItem] = obj;
        }
      }
    } else if (match = lines[i].match(/^(\w+[-\w]+):((\s+'[^']*')+)$/)) { //densities: '120' '160' '240' '320' '480' '640' '65535'
      appInfo[match[1]] = match[2].split(' ').map(function (item) {
        return item.slice(1, -1);
      }).filter(function (item) {
        return item !== '';
      });
    }
  }
  return appInfo;
}