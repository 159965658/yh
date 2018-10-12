import ToastComponent from '@/components/tips.vue'
import FullBg from '@/components/FullBg.vue'

const Toast = {};
Toast.isBack = false;//默认没有全屏
// 注册Toast
Toast.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent)
    const fullConstructor = Vue.extend(FullBg)
    // 生成一个该子类的实例
    const instance = new ToastConstructor();
    const instanceFull = new fullConstructor();
    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    instanceFull.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    document.body.appendChild(instanceFull.$el)
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$toast = (msg, duration = 1500) => {
        instance.message = msg;
        instance.type = 0;
        instance.visible = true;

        setTimeout(() => {
            instance.visible = false;
        }, duration);
    }
    //全屏 
    Vue.prototype.$toastFull = (content, visible = true) => {
        instanceFull.isShow = visible;
        if (!visible) return;
        //内容
        console.log($vm.$refs[content._scopeId]);
        var aElements = document.getElementsByTagName('div');
        for (var i = 0; i < aElements.length; i++) {
            if (aElements[i].getAttribute(content._scopeId) == '') {
                return false;
            }
        }
        const constructor = Vue.extend(content)
        const instanceChild = new constructor();
        instanceChild.$mount(document.createElement('div'));
        instanceFull.$el.appendChild(instanceChild.$el)
    }
    //关闭全屏
    Vue.prototype.$closeFull = () => {
        console.log('关闭');
        Toast.isBack = false;
        //$vm.$isfull = false
        // if ($vm) {
        //     $vm.isShow = false;
        // }
        $vm.$toastFull('', false);
    }
    //开启全屏通知
    Vue.prototype.$openFull = () => {
        //Toast.isBack = true;
        $vm.$isfull = true
    }
    //获取全屏状态
    Vue.prototype.$isfull = () => {
        return Toast.isBack;
    }

}

export default Toast