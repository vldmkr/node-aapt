'use strict';

const path   = require("path");
const os     = require("os");
const fs     = require('fs');

fs.access(path.join(__dirname, 'lib', os.type(), 'aapt'), fs.X_OK, err => {
  if(err) {
    console.log('Hmmm, what OS are you using?', os.type(), os.EOL, err); 
  } else {
    console.log("lets rock");
  } 
});