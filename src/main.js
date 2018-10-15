// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import viewportUn from 'viewport-units-buggyfill'
import viewportHack from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
viewportUn.init({
  hack: viewportHack
})
import Toast from '@/core/toast'
import {cache,cacheEnum} from '@/core/cache'
Vue.use(Toast);
import { native } from './core/native/app';


import AppHeader from "@/components/AppHeader";
Vue.component("app-header", AppHeader);
Vue.config.productionTip = false
Vue.prototype.$native = native;
Vue.prototype.$cache = cache;
Vue.prototype.$cacheEnum = cacheEnum;
/* eslint-disable no-new */
window.$vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}); 