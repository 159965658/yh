
import android from './android';
import pc from './pc';
var native = android
var ua = navigator.userAgent, pf = navigator.platform;
var platform = {};
platform.android = ua.indexOf("Android") > -1;
platform.iPhone = ua.indexOf("iPhone") > -1;
platform.iPad = ua.indexOf("iPad") > -1;
platform.iPod = ua.indexOf("iPod") > -1;
platform.winPhone = ua.indexOf("IE") > -1;
platform.PC = pf == 'MacIntel' || pf == 'Win32';
console.log(ua, platform);
if (platform.PC || !platform.android) {
    native = pc;
    // export { native }
}


(function (window) {
    window['$error'] = function (data) { //处理失败请求
        alert(data);
        window.$vm.$toast(data);
    }
}(window))
export { native }
