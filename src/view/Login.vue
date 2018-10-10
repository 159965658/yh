<template>
    <div>
        <app-header :ctitle='"登录"' :rtitle='"创建新账户"' :type='1'></app-header>
        <div class="blue-bg">
        	<div class="login-logo">
        	</div>
        	<div class="inputs">
        		<ul>
        			<li>
        				<label>账号：</label>
        				<input type="text" :placeholder=nullName v-model="name">
        			</li>
        			<li class="m-t-60">
        				<label>密码：</label>
        				<input type="password" :placeholder=nullPwd v-model="pwd">
        				<div class="icon-mima"></div>
        			</li>
        		</ul>
    			<div class="forget-mima clearfix">
					<router-link to='/forgetpwd' class='forget'>忘记密码</router-link>
    				<a class="change">切换登录账号</a>
    			</div>
    			<div class="button-submit m-t-100"> 
    				<button class="button submit" @click="login">登 录</button>
    			</div>
        		
        	</div>
        </div>
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
export default {
  name: "login",
  components: {
    AppHeader
  },
  data() {
    return {
      name: "",
      pwd: "",
      nullName: "请输入您的账号",
      nullPwd: "请输入您的密码"
    };
  },
  mounted() {
    // this.$toast("提示", 2000);
  },
  methods: {
    login() {
      if (!this.name) {
        this.$toast(this.nullName);
        return;
      } else if (!this.pwd) {
        this.$toast(this.nullPwd);
        return;
      }
      console.log(this.name, this.pwd);
      this.$native.run("fun", { name: this.name, pwd: this.pwd }, this.success);
    },
    success() {
      alert(success);
    }
  }
};
</script>
<style lang="less" scoped>
.login-logo {
  margin: 0 auto;
  background: url(../assets/login-img.png);
  width: 196px;
  height: 304px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 60px;
  margin-bottom: 48px;
}
input {
  outline: none;
}
.m-t-60 {
  margin-top: 60px;
}
.m-t-100 {
  margin-top: 100px;
}
.inputs {
  width: 68%;
  margin: 0 auto;
  height: 100px;
  ul {
    li {
      background: #fff;
      height: 102px;
      line-height: 102px;
      border-radius: 100px;
      position: relative;
      label {
        color: #1880c3;
        font-size: 36px;
        float: left;
        margin-left: 50px;
      }
      input::-webkit-input-placeholder {
        color: #8fb9cb;
        font-size: 36px;
      }
      input {
        border: none;
        background: none;
        text-align: center;
        font-size: 36px;
        color: #1880c3;
        width: 100%;
        position: absolute;
        left: 0;
        text-align: center;
        background: none;
        height: 102px;
        line-height: 102px;
        text-align: center;
      }
      .icon-mima {
        background: url(../assets/mima.png);
        width: 60px;
        height: 60px;
        position: absolute;
        right: -120px;
        background-size: 100%;
        top: 21px;
      }
    }
  }
}
.forget-mima {
  .forget,
  .change {
    font-size: 36px;
    color: #fff;
    margin-top: 42px;
  }
  .forget {
    float: left;
    margin-left: 50px;
  }
  .change {
    float: right;
    margin-right: 50px;
  }
}
</style>
