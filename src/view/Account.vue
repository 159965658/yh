<template>
<div class="index-page">
    <!-- <div class="left-nav">
	        	<dl class="head-img">
	        		<dt><img src="../assets/index-wangyisheng.png"></dt>
	        		<dd>王医生</dd>
	        	</dl>
	        	<ul>
                <li class="index"><i class="icon"></i>首页</li>
                <li class="zhishiku"><i class="icon"></i>知识库</li>
	        		<li class="wode active"><i class="icon"></i>我的</li>
	        	</ul>
            <div class="left-nav-logo"></div>
        </div> -->
    <div class="right-content">
        <div class="center-content">
            <div class="personal">
                <dl>
                    <dt></dt>
                    <dd><label for="">账号：</label>张三 </dd>
                    <dd><label for="">企业标识：</label>123456 </dd>
                    <dd><label for="">企业名称：</label>小米科技信息技术有限公司 </dd>
                    <dd><label for="">企业访问地址：</label>xxxx </dd>
                </dl>
            </div>
            <ul class="list">
                <li @click="tipsModify">机构名称：<i class="icon more"></i><span></span></li>
                <li>机构编号：<i class="icon more"></i><span></span></li>
                <li>网络版用户名：<i class="icon more"></i><span></span></li>
                <li @click="selectUserTip">辨识人群选择：<i class="icon more"></i><span>全部</span></li>
                <router-link tag="li" to="/modifypwd">设置密码：<i class="icon more"></i><span></span></router-link>
                <!-- <li><i class="icon more"></i><span></span></li> -->
                <li>手势密码：<i class="icon more"></i><span>全部</span></li>
                <li @click="update">版本号：<i class="icon more"></i><span class="version">V1.0</span></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import ModifyOrgVue from "./ModifyOrg.vue";
import FullTips from "@/components/FullTips";
import SelectUserVue from "./SelectUser.vue";
//辨识人群选择

export default {
  components: {
    // FullTips
  },
  data() {
    return {
      orgName: "",
      tipsVis: false
    };
  },
  mounted() {
    setTimeout(() => {
      $vm.$on("submit", this.childSubmit);
      $vm.$on("selectUser", this.selectUser);
    }, 1);
  },
  methods: {
    tipsModify() {
      this.$toastFull(ModifyOrgVue);
      //  this.tipsVis = true;
    },
    update() {
      this.$toastFull(FullTips, true, {
        title: "版本更新",
        text: "您使用的是最新版本",
        subText: "确认"
      });
    },
    childSubmit() {
      console.log("版本更新");
    },
    selectUserTip() {
      this.$toastFull(SelectUserVue);
    },
    selectUser() {
      console.log("选择人群");
    }
  },
  beforeDestroy() {
    $vm.$off("submit", this.childSubmit);
    $vm.$off("selectUser", this.selectUser);
  }
};
</script>

<style lang="less" scoped>
.index-page {
  background: #f5f5f5;
}

.right-content {
  float: left;
  width: calc(100% - 208px);

  div.center-content {
    width: 1326px;
    margin: 0 auto;
    margin-top: 64px;
  }

  .personal {
    border-radius: 10px;
    box-shadow: -1px 1px 30px #cacaca;
    background: -webkit-linear-gradient(left top, #88d7f7, #00a6e7);
    background: -o-linear-gradient(bottom right, #88d7f7, #00a6e7);
    background: -moz-linear-gradient(bottom right, #88d7f7, #00a6e7);
    background: linear-gradient(to bottom right, #88d7f7, #00a6e7);

    dl {
      padding-top: 90px;
      padding-bottom: 15px;

      dt {
        width: 196px;
        height: 400px;
        background: url(../assets/login-img.png) no-repeat;
        background-size: 196px 246px;
        float: left;
        margin-left: 156px;
        margin-right: 165px;
        background-position: 0 40px;
      }

      dd {
        margin-bottom: 65px;
        font-size: 36px;
        color: #fff;
      }
    }
  }

  ul.list {
    width: 100%;
    background: #fff;
    box-shadow: -1px 1px 30px #cacaca;
    margin-top: 40px;
    border-radius: 10px;
    padding-top: 6px;

    li {
      margin: 0 45px;
      height: 112px;
      line-height: 112px;
      border-bottom: 1px solid #e5e5e5;
      font-size: 36px;
      color: #656565;

      i.icon.more {
        float: right;
        margin: 35px 20px 0 35px;
      }

      span {
        float: right;
        font-size: 30px;
        color: #989898;
      }

      span.version {
        color: #282828;
        font-size: 36px;
      }
    }

    li:last-child {
      border-bottom: none;
    }
  }
}
</style>
