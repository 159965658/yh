<template>
    <div class="bg-color">
    		<app-header :ltitle='"后退"' :ctitle='"修改密码"'></app-header>
    		
    		<div class="blue-bg">
	        	<div class="inputs">
	        		<ul>
	        			<li>
	        				<label>原密码：</label>
	        				<input type="password" placeholder="请输入原密码">
	        				<i class="icon icon-zhengyan"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>设置新密码：</label>
	        				<input type="password" placeholder="请输入6-20位字符">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        			<li class="m-t-60">
	        				<label>再输入一次：</label>
	        				<input type="password" placeholder="请输入6-20位字符">
	        				<i class="icon icon-biyan"></i>
	        			</li>
	        		</ul>
	    			<div class="button-submit"> 
	    				<a href="javascript:void(0)" class="button submit btn-save" @click='next'>保存</a>
	    			</div>
	        		
	        	</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.blue-bg{
	background:#fff;
}
.inputs {
  	height: 638px;
  	padding-top: 130px;
  	padding-bottom: 130px;
  	.button-submit {
    		margin-top: 120px;
    		a{
    			background: #00A6E7;
    		}
	}
	ul{
		li{
			background: #F5F5F5;
			border:1px solid #dcdcdc;
		}
	}
}
.bg-color{
	height: 100%;
}
</style>

