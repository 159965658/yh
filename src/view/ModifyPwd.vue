<template>
    <div class="bg-color">
    		<app-header :ltitle='"后退"' :ctitle='"修改密码"'></app-header>
    		
    		<div class="blue-bg">
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>原密码：</label>
	        				<input type="password" placeholder="请输入原密码" v-model="oldPwd">
	        				<i class="icon icon-zhengyan"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>设置新密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符" v-model="newPwd">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>再输入一次：</label>
	        				<input type="password" placeholder="请输入6-20位字符" v-model="sNewPwd">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<button   class="button submit btn-save" @click="save">保存</button>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      oldPwd: "",
      newPwd: "",
      sNewPwd: "",
      user: {}
    };
  },
  mounted() {
    this.user = this.$cache.get(this.$cacheEnum["user"]);
  },
  methods: {
    save() {
      if (this.oldPwd != this.user.password) {
        this.$toast("旧密码输入不正确");
        return;
      }
      if (this.newPwd.length < 6 || this.newPwd.length > 20) {
        this.$toast("密码为6-20为字符");
        return;
      }
      if (this.newPwd != this.sNewPwd) {
        this.$toast("两次密码输入不一致");
        return;
      }
      this.user.password = this.newPwd;
      window["changePwd"] = this.changePwd;
      // alert(JSON.stringify(this.user));
      this.$native.run("updateUser", this.user, "changePwd");
    },
    changePwd() {
      // this.$cache.remove(this.$cacheEnum["user"]);
      this.$router.replace("/index/account");
    }
  }
};
</script>
<style lang="less" scoped>
.blue-bg {
  background: #fff;
}
.inputs {
  height: 638px;
  padding-top: 130px;
  padding-bottom: 130px;
  .button-submit {
    margin-top: 120px;
    a {
      background: #00a6e7;
    }
  }
  ul {
    li {
      background: #f5f5f5;
      border: 1px solid #dcdcdc;
    }
  }
}
.bg-color {
  height: 100%;
}
</style>

