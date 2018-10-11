<template>
    <div>
    		  <app-header :ltitle='"后退"' :ctitle='"忘记密码"'></app-header>
    		
    		<div class="blue-bg">
	        	<div class="inputs public">
	        		<ul>
	        			<li>
	        				<label>账号：</label>
	        				<input type="text" placeholder="请输入您的账号">
	        			</li>
	        			<li class="m-t-60">
	        				<label>网络版用户名：</label>
	        				<input type="text" placeholder="请输入网络版用户名">
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<a href="javascript:void(0)" @click='next' class="button submit">下一步</a>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    next() {
      this.$router.push("/setpw");
    }
  }
};
</script>
<style lang="less" scoped>

</style>
