
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
        // alert(data);
        window.$vm.$toast(data);
        // document.write(data);
    }
}(window))
window['$appBack'] = function (isforce = false) {
    const isFull = window.$vm.$isfull();
    console.log(isFull);
    if (isFull) {
        $vm.$closeFull();//关闭全屏
        return;
    }
    else if (window.history.length <= 1) {
        //调用原生的方法 关闭app
        $vm.native.run('close');
        console.log('关闭app')
        return false
    }
    else {
        //特殊页面处理 答题页面
        if ($vm.$route.name == 'answer' && !isforce) {
            //警告 是否要退出
            $vm.$emit('tipsBack');
            return;
        }
        $vm.$closeFull();
        $vm.$router.go(-1)
        // console.log($vm.$router);
    }
}
export { native }
