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
import { native } from './core/native/app';
Vue.config.productionTip = false
Vue.prototype.$native = native;
/* eslint-disable no-new */
window.$vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
