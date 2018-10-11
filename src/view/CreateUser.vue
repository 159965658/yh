<template>
	<div>
    	  <app-header :ctitle='"创建账号"'></app-header>
	    <div class="blue-bg">
	    		<h3>设备激活成功 ！您可以创建一个属于自已的帐户</h3>
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>账号：</label>
	        				<input type="text" placeholder="手机号或者姓名全拼">
	        			</li>
	        			<li>
	        				<label>设置密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符">
	        				<i class="icon icon-zhengyan"></i>
	        			</li>
	        			<li>
	        				<label>确认密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        			<li>
	        				<label>机构编码：</label>
	        				<input type="text" placeholder="">
	        			</li>
	        			<li>
	        				<label>机构名称：</label>
	        				<input type="text" placeholder="">
	        			</li>
	        			<li>
	        				<label>网络版用户名：</label>
	        				<input type="text" placeholder="">
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<a href="jvascript:void(0)" class="button submit">完 成</a>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {};
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
