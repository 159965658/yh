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
//忘记密码
import ForgetPwd from "@/view/ForgetPwd";
//切换账号
import SwitchAccount from "@/view/SwitchAccount"

import Account from "@/view/Account";

import ModifyPwd from "@/view/ModifyPwd";

import RightList from "@/view/RightList"
//新建档案
import NewFile from "@/view/NewFile"

//查看档案
import SeeFile from "@/view/SeeFile"
//知识库
import KnowledgeBase from "@/view/KnowledgeBase";
Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/modifypwd',
      name: 'modifypwd',
      component: ModifyPwd
    }, {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/list',
      children: [
        { path: 'list', name: 'indexright', component: RightList },
        { path: 'account', name: 'account', component: Account },
        { path: 'knowledge', name: 'knowledge', component: KnowledgeBase }
      ]
    }, {
      path: '/newfile', name: 'newfile', component: NewFile
    }, {
      path: '/seefile', name: 'seefile', component: SeeFile
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
      path: '/setpw',
      name: 'setpw',
      component: SetPw
    }
    , {
      path: '/forgetpwd',
      name: 'forgetpwd',
      component: ForgetPwd
    }, {
      path: '/switch',
      name: 'switch',
      component: SwitchAccount
    }
  ]
})
