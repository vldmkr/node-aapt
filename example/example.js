const package = require('../index.js')

package(__dirname+ '/wechat.apk', (err, data) => {
    if (err) {
        // something went wrong 
    } else {
        console.log(data);
        // console.log(data["application-icon-120"])
        // console.log(data["sdkVersion"])
    }
});