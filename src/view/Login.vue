
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
          <router-link to='/switch' class='change'>切换登录账号</router-link> 
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
      // this.$router.push("/index");
      this.loginNative();
      //  this.$native.run("fun", { name: this.name, pwd: this.pwd }, this.success);
    },
    loginNative() {
      let params = {
        userCode: "123",
        loginName: this.name,
        password: this.pwd,
        gesture: "222"
      };
      window["loginSuccess"] = this.loginSuccess;
      this.$native.run("login", params, "loginSuccess");
    },
    loginSuccess(data) {
      alert(JSON.stringify(data));
       this.$router.push("/index");
    }
  }
};
</script>
<style lang="less" scoped>
.blue-bg {
  width: 65%;
  background: -webkit-linear-gradient(left top, #88d7f7, #00a6e7);
  background: -o-linear-gradient(bottom right, #88d7f7, #00a6e7);
  background: -moz-linear-gradient(bottom right, #88d7f7, #00a6e7);
  background: linear-gradient(to bottom right, #88d7f7, #00a6e7);
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 100px;
  box-shadow: -1px 1px 30px #ababab;
  padding-bottom: 110px;
  min-height: 1000px;
}

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
</style>
