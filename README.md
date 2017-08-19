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
{ package:
   { name: 'com.tencent.mm',
     versionCode: '1060',
     versionName: '6.5.8',
     platformBuildVersionName: '6.0-2704002' },
  'install-location': 'auto',
  sdkVersion: '16',
  targetSdkVersion: '23',
  'uses-permission':
   [ { name: 'android.permission.CHANGE_WIFI_MULTICAST_STATE' },
     { name: 'com.tencent.mm.plugin.permission.READ' },
     { name: 'com.tencent.mm.plugin.permission.WRITE' },
     { name: 'com.tencent.mm.permission.MM_MESSAGE' },
     { name: 'com.huawei.authentication.HW_ACCESS_AUTH_SERVICE' },
     { name: 'android.permission.ACCESS_NETWORK_STATE' },
     { name: 'android.permission.ACCESS_COARSE_LOCATION' },
     { name: 'android.permission.ACCESS_FINE_LOCATION' },
     { name: 'android.permission.CAMERA' },
     { name: 'android.permission.GET_TASKS' },
     { name: 'android.permission.INTERNET' },
     { name: 'android.permission.MODIFY_AUDIO_SETTINGS' },
     { name: 'android.permission.RECEIVE_BOOT_COMPLETED' },
     { name: 'android.permission.RECORD_AUDIO' },
     { name: 'android.permission.READ_CONTACTS' },
     { name: 'android.permission.READ_SMS' },
     { name: 'android.permission.VIBRATE' },
     { name: 'android.permission.WAKE_LOCK' },
     { name: 'android.permission.WRITE_EXTERNAL_STORAGE' },
     { name: 'android.permission.WRITE_CONTACTS' },
     { name: 'android.permission.WRITE_SETTINGS' },
     { name: 'com.android.launcher.permission.INSTALL_SHORTCUT' },
     { name: 'com.android.launcher.permission.UNINSTALL_SHORTCUT' },
     { name: 'com.android.launcher.permission.READ_SETTINGS' },
     { name: 'com.tencent.mm.location.permission.SEND_VIEW' },
     { name: 'android.permission.BLUETOOTH' },
     { name: 'android.permission.BLUETOOTH_ADMIN' },
     { name: 'android.permission.BROADCAST_STICKY' },
     { name: 'android.permission.SYSTEM_ALERT_WINDOW' },
     { name: 'android.permission.CHANGE_WIFI_STATE' },
     { name: 'android.permission.GET_PACKAGE_SIZE' },
     { name: 'android.permission.DOWNLOAD_WITHOUT_NOTIFICATION' },
     { name: 'android.permission.NFC' },
     { name: 'com.huawei.android.launcher.permission.CHANGE_BADGE' },
     { name: 'android.permission.WRITE_APP_BADGE' },
     { name: 'com.tencent.mm.ext.permission.READ' },
     { name: 'com.tencent.mm.ext.permission.WRITE' },
     { name: 'com.android.vending.BILLING' },
     { name: 'android.permission.READ_EXTERNAL_STORAGE' },
     { name: 'com.android.alarm.permission.SET_ALARM' },
     { name: 'com.tencent.mm.wear.message' },
     { name: 'android.permission.BODY_SENSORS' },
     { name: 'android.permission.USE_CREDENTIALS' },
     { name: 'com.google.android.c2dm.permission.RECEIVE' },
     { name: 'android.permission.GET_ACCOUNTS' },
     { name: 'com.tencent.mm.permission.C2D_MESSAGE' },
     { name: 'android.permission.USE_FINGERPRINT' },
     { name: 'android.permission.MANAGE_ACCOUNTS' },
     { name: 'android.permission.AUTHENTICATE_ACCOUNTS' },
     { name: 'android.permission.READ_SYNC_SETTINGS' },
     { name: 'android.permission.WRITE_SYNC_SETTINGS' },
     { name: 'android.permission.READ_PROFILE' },
     { name: 'android.permission.READ_PHONE_STATE' },
     { name: 'android.permission.ACCESS_WIFI_STATE' } ],
  'application-label-az-AZ': 'WeChat',
  'application-label-bn-BD': 'WeChat',
  'application-label-en': 'WeChat',
  'application-label-en-AU': 'WeChat',
  'application-label-en-GB': 'WeChat',
  'application-label-en-IN': 'WeChat',
  'application-label-es-US': 'WeChat',
  'application-label-et-EE': 'WeChat',
  'application-label-eu-ES': 'WeChat',
  'application-label-fa': 'WeChat',
  'application-label-fr-CA': 'WeChat',
  'application-label-gl-ES': 'WeChat',
  'application-label-gu-IN': 'WeChat',
  'application-label-hy-AM': 'WeChat',
  'application-label-is-IS': 'WeChat',
  'application-label-ka-GE': 'WeChat',
  'application-label-kk-KZ': 'WeChat',
  'application-label-km-KH': 'WeChat',
  'application-label-kn-IN': 'WeChat',
  'application-label-ky-KG': 'WeChat',
  'application-label-lo-LA': 'WeChat',
  'application-label-mk-MK': 'WeChat',
  'application-label-ml-IN': 'WeChat',
  'application-label-mn-MN': 'WeChat',
  'application-label-mr-IN': 'WeChat',
  'application-label-ms-MY': 'WeChat',
  'application-label-my-MM': 'WeChat',
  'application-label-ne-NP': 'WeChat',
  'application-label-pa-IN': 'WeChat',
  'application-label-pt-BR': 'WeChat',
  'application-label-pt-PT': 'WeChat',
  'application-label-si-LK': 'WeChat',
  'application-label-sq-AL': 'WeChat',
  'application-label-sr': 'WeChat',
  'application-label-sv': 'WeChat',
  'application-label-sw': 'WeChat',
  'application-label-ta-IN': 'WeChat',
  'application-label-te-IN': 'WeChat',
  'application-label-tl': 'WeChat',
  'application-label-uk': 'WeChat',
  'application-label-ur-PK': 'WeChat',
  'application-label-uz-UZ': 'WeChat',
  'application-label-zh-CN': '微信',
  'application-label-zh-TW': 'WeChat',
  'application-label-zu': 'WeChat',
  'application-icon-120': 'r/a5/icon.png',
  'application-icon-160': 'r/a5/icon.png',
  'application-icon-240': 'r/a9/icon.png',
  'application-icon-320': 'r/i/icon.png',
  'application-icon-480': 'r/n/icon.png',
  'application-icon-640': 'r/n/icon.png',
  application: { label: 'WeChat', icon: 'r/a5/icon.png' },
  'uses-library-not-required': 'com.here.android',
  'launchable-activity':
   { name: 'com.tencent.mm.ui.LauncherUI',
     label: 'WeChat',
     icon: '' },
  'feature-group': { label: '' } }
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
