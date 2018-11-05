<template>
    <div>
    	 <app-header :ltitle='"后退"' :ctitle='"设置密码"'></app-header>
    		
    		<div class="blue-bg">
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>设置密码：</label>
	        				<input :type="flag ? 'password' : 'text'" placeholder="请输入6-20位字符" v-model="pwd">
	        				<i class="icon icon-zhengyan" :class="{'icon-biyan':!flag}" @click="flag = !flag"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>确认密码：</label>
	        				<input :type="flag1 ? 'password' : 'text'" placeholder="请输入6-20位字符" v-model="sPwd">
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
      if (this.pwd.length < 6 || this.pwd.length > 20) {
        this.$toast("密码为6-20为字符");
        return;
      }
      if (this.pwd != this.sPwd) {
        this.$toast("两次密码输入不一致");
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
