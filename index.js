'use strict';

const exec   = require('child_process').exec;
const path   = require('path');
const os     = require('os');
const fs     = require('fs');

const aapt = path.join(__dirname, 'lib', os.type(), 'aapt');

module.exports = function (filename, callback) {
  callback = callback || function () {};
  return new Promise(function (resolve, reject) {
    fs.access(aapt, fs.X_OK, (err) => {
      if(err) {
        err.msg = ['Hmmm, what OS are you using?', os.type()].join(' ');
        reject(err);
        callback(err, null);
      } else {
        const cmd = [aapt, 'dump', 'badging', filename, '|', 'grep', '-E', '"application:|package"'].join(' ');
        exec(cmd, (err, stdout, stderr) => {
          const error = err || stderr;
          if(error) {
            reject(error);
            callback(error, null);
          } else {
            const match = stdout.match(/name='([^']+)'[\s]*versionCode='(\d+)'[\s]*versionName='([^']+)/);
            const match2 = stdout.match(/label='([^']+)'\s*icon='([^']+)'/);
            const info = {
              packageName : match[1],
              versionCode : match[2],
              versionName : match[3],
              label : match2[1],
              icon : match2[2],
            };
            resolve(info);
            callback(null, info);
          }
        });
      }
    });
  });
};
