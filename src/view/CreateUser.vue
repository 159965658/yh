<template>
	<div>
    	  <app-header :ctitle='"创建账号"'></app-header>
	    <div class="blue-bg">
	    		<h3>设备激活成功 ！您可以创建一个属于自已的帐户</h3>
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>账号：</label>
	        				<input type="text" placeholder="手机号或者姓名全拼" v-model="addUser.loginName">
	        			</li>
	        			<li>
	        				<label>设置密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符" v-model="addUser.password">
	        				<i class="icon icon-zhengyan"></i>
	        			</li>
	        			<li>
	        				<label>确认密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符" v-model="addUser.spassword">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        			<li>
	        				<label>机构编码：</label>
	        				<input type="text" placeholder="机构编码" v-model="addUser.institutionCode">
	        			</li>
	        			<li>
	        				<label>机构名称：</label>
	        				<input type="text" placeholder="机构名称" v-model="addUser.institutionName">
	        			</li>
	        			<li>
	        				<label>网络版用户名：</label>
	        				<input type="text" placeholder="网络版用户名" v-model="addUser.webNickName">
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<button   class="button submit" @click="addUserSubmit">完 成</button>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      addUser: {
        userCode: "",
        loginName: "",
        password: "",
        spassword: "",
        gesture: "",
        institutionCode: "",
        institutionName: "",
        webNickName: "",
        crowdFlag: "0"
      }
    };
  },
  methods: {
    addUserSubmit() {
      let params = this.addUser;
      console.log(params.password.length);
      if (!params.loginName) {
        this.$toast("请填写您的账号");
        return;
      }
      if (params.password.length < 6 || params.password.length > 20) {
        this.$toast("密码为6-20为字符");
        return;
      }
      if (params.password != params.spassword) {
        this.$toast("两次密码输入不一致");
        return;
      }
      window["addUserSuccess"] = this.success;
      this.$native.run("addUser", params, "addUserSuccess");
    },
    success() {
      // alert()
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
.blue-bg {
  h3 {
    font-size: 36px;
    color: #ffffff;
    text-align: center;
    padding-top: 86px;
    padding-bottom: 76px;
  }
}
.inputs {
  height: 1020px;
  padding-bottom: 60px;
}
.inputs ul li {
  margin-bottom: 40px;
}
.button-submit {
  margin-top: 96px;
}
</style>
