import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//登录
import Login from '@/view/Login';

//主页
import Index from '@/view/Index';

//创建账号
import CreateUser from '@/view/CreateUser';
//激活设备
import Activation from '@/view/Activation';
//设备验证
import Verification from "@/view/Verification";
//设置密码
import SetPw from "@/view/SetPw";
Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }
    , {
      path: '/createuser',
      name: 'createuser',
      component: CreateUser
    }
    , {
      path: '/activation',
      name: 'Activation',
      component: Activation
    }
    , {
      path: '/verification',
      name: 'verification',
      component: Verification
    }, {
      path:'/setpw',
      name:'setpw',
      component:SetPw
    }
  ]
})
