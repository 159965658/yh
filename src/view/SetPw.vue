<template>
    <div>
    	 <app-header :ltitle='"后退"' :ctitle='"设置密码"'></app-header>
    		
    		<div class="blue-bg">
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>设置密码：</label>
	        				<input :type="flag ? 'password' : 'text'" placeholder="请输入设置密码" v-model="pwd">
	        				<i class="icon icon-zhengyan" :class="{'icon-biyan':!flag}" @click="flag = !flag"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>确认密码：</label>
	        				<input :type="flag1 ? 'password' : 'text'" placeholder="请输入确认密码" v-model="sPwd">
	        					<i class="icon icon-zhengyan" :class="{'icon-biyan':!flag1}" @click="flag1 = !flag1"></i>
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<button class="button submit" @click='next'>完 成</button>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      pwd: "",
      sPwd: "",
      user: {},
      flag: true,
      flag1: true
    };
  },
  mounted() {
    this.user = this.$cache.get(this.$cacheEnum["user"]);
  },
  methods: {
    next() {
      if (!this.pwd) {
        this.$toast("设置密码不能为空，请输入设置密码");
        return;
      }
      if (this.pwd.length < 6 || this.pwd.length > 20) {
        this.$toast("设置密码不符合要求，请输入6-20位字符");
        return;
      }
      if (!this.sPwd) {
        this.$toast("确认密码不能为空，请输入确认密码");
        return;
      }
      if (this.pwd != this.sPwd) {
        this.$toast("两次输入密码不一致，请重新输入");
        return;
      }
      this.user.password = this.pwd;
      window["nextSuccess"] = this.nextSuccess;
      this.$native.run("updateuser", this.user, "nextSuccess");
    },
    nextSuccess() {
      this.$cache.remove(this.$cacheEnum["user"]);
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
.inputs {
  height: 540px;
  padding-top: 170px;
  padding-bottom: 190px;
  .button-submit {
    margin-top: 176px;
  }
}
</style>
