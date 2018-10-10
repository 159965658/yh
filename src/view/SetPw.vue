<template>
    <div>
    		<div class="biaoti">设置密码</div>
    		
    		<div class="blue-bg">
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>设置密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符">
	        				<i class="icon icon-zhengyan"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>确认密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<a href="#" class="button submit">完 成</a>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.inputs{
	height: 540px;
	padding-top: 170px;
	padding-bottom: 190px;
	.button-submit{
		margin-top: 176px;
	}
}
</style>
