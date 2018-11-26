<template>
<div>
    <app-header :ctitle='"登录"' :rtitle='"创建新账号"' :type='1'></app-header>
    <div class="blue-bg">
        <div class="login-logo">
        </div>
        <div class="inputs">
            <ul>
                <li>
                    <label>账号：</label>
                    <input type="text"  maxlength="20" :placeholder=nullName v-model="name">

</li>
                <li class="m-t-60">
                    <label>密码：</label>
                    <input type="password"  maxlength="20" :placeholder=nullPwd v-model="pwd">
                    <div class="icon-mima" @click="gesture"></div>
                </li>
            </ul>
            <div class="forget-mima clearfix">
                <router-link to='/forgetpwd' class='forget'>忘记密码</router-link>
                <a @click='switchClick' class='change'>切换登录账号</a>
            </div>
            <div class="button-submit m-t-100">
                <button class="button submit" @click="login">登 录</button>
            </div>
            <!-- <button class="rl">登录</button> -->

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
      nullPwd: "请输入您的密码",
      user: {}
    };
  },
  watch: {
    name(val) {
      this.$nextTick(() => {
        this.name = filterInput(val);
      });
    }
  },
  mounted() {
    // this.$toast("提示", 2000);
    if (this.$route.query.name) {
      //Rurl = this.$route.query.Rurl;
      this.name = this.$route.query.name;
    }
  },
  methods: {
    gesture() {
      if (!this.name) {
        this.$toast(this.nullName);
        return;
      }
      window["getuserbyname"] = this.getuserbyname;
      this.$native.run(
        "getuserbyname",
        {
          loginName: this.name
        },
        "getuserbyname"
      );
    },
    getUserList() {
      window["setUser"] = this.setUser;
      window["errorUser"] = this.errorUser;
      this.$native.run("getUser", {}, "setUser", "errorUser");
    },
    setUser(data) {
      let res = JSON.parse(data);
      this.user = res.userInfoList;
      if (this.user.length == 0) {
        this.$toast("您还没有创建用户，请先创建用户");
        // this.$router.push("/login");
      } else {
        this.$router.push("/switch");
      }
    },
    errorUser(data) {
      this.$toast(data);
    },
    switchClick() {
      this.getUserList();
    },
    getuserbyname(data) {
      const res = JSON.parse(data);
      if (!res.gesture) {
        this.$toast("您尚未启用手势密码");
        return;
      }
      this.user = res;
      window["checkgesture"] = this.checkgesture;
      this.$native.run(
        "checkgesture",
        {
          gesture: res.gesture
        },
        "checkgesture"
      );
    },
    checkgesture() {
      this.loginSuccess(JSON.stringify(this.user));
    },
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
        userCode: "",
        loginName: this.name,
        password: this.pwd,
        gesture: ""
      };
      window["loginSuccess"] = this.loginSuccess;
      this.$native.run("login", params, "loginSuccess");
    },
    loginSuccess(data) {
      console.log(data);
      this.$cache.removeAll();
      this.$cache.set(this.$cacheEnum["user"], JSON.parse(data));
      // alert(this.$cache.get(this.$cacheEnum["user"]));
      this.$toast("登录成功");
      this.$router.replace("/index");
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

.name {
  width: 85%;
  //  padding:0 100px;
  padding-left: 150px;
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

.rl {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 308px;
  height: 180px;
  border: 1px solid #ff8a00 !important;
  /*no*/
  border-radius: 10px;
  background: #fff;
  font-size: 60px;
  color: #ff8a00;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: normal;
}
</style>
