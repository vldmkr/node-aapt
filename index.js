'use strict';

const exec   = require('child_process').exec;
const path   = require('path');
const os     = require('os');
const fs     = require('fs');
let aapt = path.join(__dirname, 'lib', os.type(), 'aapt');

if (os.type() == "Windows_NT") {
  aapt = path.join(__dirname, 'lib', os.type(), 'aapt.exe');
}

if (__dirname.startsWith("/tmp/.mount_")) {
  aapt = path.join(__dirname+".unpacked", 'lib', os.type(), 'aapt');
}

module.exports = function (filename, callback) {
  callback = callback || function () {};
  return new Promise(function (resolve, reject) {
    fs.access(aapt, fs.X_OK, (err) => {
      if(err) {
        err.msg = ['Hmmm, what OS are you using?', os.type()].join(' ');
        reject(err);
        callback(err, null);
      } else {

        if (`${os.type()}` == "Windows_NT") {
          console.log("IN NT")
          const cmd = [aapt, 'dump', 'badging', filename].join(' ');
          exec(cmd, (err, stdout, stderr) => {
            const error = err || stderr;
            if(error) {
              reject(error);
              callback(error, null);
            } else {

              let packageName = stdout.match(/name='([a-zA-Z.]*)'/g);
              packageName = packageName[0].split("'")[1]
              let versionCode = stdout.match(/versionCode='(\d+)'/g);
              versionCode = versionCode[0].split("'")[1]
              let versionName = stdout.match(/versionName='([^']+)/g);
              versionName = versionName[0].split("'")[1]
              const info = {packageName: packageName, versionCode: versionCode, versionName: versionName}
              
              resolve(info);
              callback(null, info);
            }
          });
          return
        }


        const cmd = [aapt, 'dump', 'badging', filename, '|', 'grep', 'package'].join(' ');
        exec(cmd, (err, stdout, stderr) => {
          const error = err || stderr;
          if(error) {
            reject(error);
            callback(error, null);
          } else {
            const match = stdout.match(/name='([^']+)'[\s]*versionCode='(\d+)'[\s]*versionName='([^']+)/);
            const info = {
              packageName : match[1],
              versionCode : match[2],
              versionName : match[3],
            };
            resolve(info);
            callback(null, info);
          }
        });
      }
    });
  });
};



