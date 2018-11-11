<template>
    <div>
    		  <app-header :ltitle='"后退"' :ctitle='"忘记密码"'></app-header>
    		
    		<div class="blue-bg">
	        	<div class="inputs public">
	        		<ul>
	        			<li>
	        				<label>账号：</label>
	        				<input type="text" placeholder="请输入您的账号" v-model="loginName">
	        			</li>
	        			<li class="m-t-60">
	        				<label>网络版用户名：</label>
	        				<input type="text" placeholder="请输入您的网络版用户名" v-model="webNickName">
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<button  @click='next' class="button submit">下一步</button>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loginName: "",
      webNickName: ""
    };
  },
  methods: {
    next() {
      if (this.loginName == "") {
        this.$toast("请输入您的账号。");
        return;
      }
      if (this.webNickName == "") {
        this.$toast("请输入您的网络版用户名。");
        return;
      }
      window["nextSuccess"] = this.nextSuccess;
      this.$native.run(
        "forgetpassword",
        {
          loginName: this.loginName,
          webNickName: this.webNickName
        },
        "nextSuccess"
      );
    },
    nextSuccess(data) {
      // alert("验证");
      this.$cache.set(this.$cacheEnum["user"], JSON.parse(data));
      this.$router.push("/setpw");
    }
  }
};
</script>
<style lang="less" scoped>
</style>
