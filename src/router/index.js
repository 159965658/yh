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
//体质辨识
import Identification from "@/view/Identification"
//答题
import Answer from "@/view/Answer"
//查看报告
import IdentificationReport from "@/view/IdentificationReport";
//选择词条
import SelectWord from "@/view/SelectWord";
//首页编辑
import IndexEdit from "@/view/IndexEdit";
Vue.use(Router)

const router = new Router({
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
      component: ModifyPwd,
      meta: {
        auth: true
      }
    },
    {
      path: "/indexedit", name: "indexedit", component: IndexEdit, meta: {
        auth: true
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/list',
      children: [
        {
          path: 'list', name: 'indexright', component: RightList, meta: {
            auth: true
          }
        },
        {
          path: 'account', name: 'account', component: Account, meta: {
            auth: true
          }
        },
        {
          path: 'knowledge', name: 'knowledge', component: KnowledgeBase, meta: {
            auth: true
          }
        }
      ]
    }, {
      path: '/newfile', name: 'newfile', component: NewFile, meta: {
        auth: true
      }
    }, {
      path: '/identification', name: 'identification', component: Identification, meta: {
        auth: true
      }
    }, {
      path: '/identificationreport', name: 'identificationreport', component: IdentificationReport, meta: {
        auth: true
      }
    }, {
      path: '/selectword', name: 'selectword', component: SelectWord, meta: {
        auth: true
      }
    }, {
      path: '/answer', name: 'answer', component: Answer, meta: {
        auth: true
      }
    }, {
      path: '/seefile', name: 'seefile', component: SeeFile, meta: {
        auth: true
      }
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
      component: SetPw, meta: {
        auth: true
      }
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
router.beforeEach((to, from, next) => {
  // if (from.meta.keep_alive) { // 记录当前页面是否要记录位置 
  //   from.meta.saved_position = {
  //     x: window.pageXOffset,
  //     y: window.pageYOffset
  //   }
  // }
  if (to.matched.some(m => m.meta.auth)) {
    // 对路由进行验证     
    if (sessionStorage.getItem('userSession')) { // 已经登陆       
      next()   // 正常跳转到你设置好的页面     
    }
    else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来； 
      next({ path: '/login', query: { Rurl: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router