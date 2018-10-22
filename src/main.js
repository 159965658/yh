// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import viewportUn from 'viewport-units-buggyfill'
// import viewportHack from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
// viewportUn.init({
//   hack: viewportHack
// })
// import 'amfe-flexible' 
import Toast from '@/core/toast'
import { cache, cacheEnum } from '@/core/cache'
Vue.use(Toast);
import { native } from './core/native/app';
import { DatetimePicker } from 'mint-ui';
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.component(DatetimePicker.name, DatetimePicker);
import * as filters from './filter.js';//全局过滤器 and 全局指令
import Select from "@/components/Select";
import AppHeader from "@/components/AppHeader";
import sex from "@/components/sex";
Vue.component("app-header", AppHeader);
Vue.component("app-select", Select);
Vue.component("app-sex", sex);
Vue.config.productionTip = false
Vue.prototype.$native = native;
Vue.prototype.$cache = cache;
Vue.prototype.$cacheEnum = cacheEnum;
/* eslint-disable no-new */
import $ from 'jquery'
window.$vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}); 