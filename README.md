# node-aapt [![npm version](https://badge.fury.io/js/node-aapt.svg)][npm] [![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)][license] [![Codacy Badge](https://api.codacy.com/project/badge/Grade/d6b1946a62c0453ebecef8e7ad1024e6)][codacy]

## Install

With [npm](https://npmjs.org/package/node-aapt) do:

```
npm install node-aapt --save
```

## Example
Using a callback:
```js
const packageInfo = require('node-aapt');

packageInfo('/path/to/your/ExampleApp.apk', (err, data) => {
  if (err) {
    // something went wrong 
  } else {
    console.log(data);
  }
});
```
Using a promise:

```js
const packageInfo = require('node-aapt');

packageInfo('/path/to/your/ExampleApp.apk')
  .then (data => {
    console.log(data)
  })
  .catch (err) {
    // something went wrong 
  }

```

In the console output you will see something like this:
```js
{ packageName: 'com.example.app',
  versionCode: '12',
  versionName: '1.2.3' }  
```

# API

## packageInfo(path, callback)

### path
Type: `String`

Path to your APK file.

### callback
Type: `function (err, data)`

#### data
Type: `Object`

It contains the parsed data obtained from aapt tool.

## License

MIT © [Makarian Vladyslav](https://github.com/vldmkr)

[npm]:      https://badge.fury.io/js/node-aapt
[license]:  https://github.com/vldmkr/node-aapt/blob/master/LICENSE
[codacy]:   https://www.codacy.com/app/vladmakaryan/node-aapt?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=vldmkr/node-aapt&amp;utm_campaign=Badge_Grade
