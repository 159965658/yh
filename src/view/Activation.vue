<template>
    <div>
    		<div class="biaoti">我是标题</div>
    		 <div class="blue-bg clearfix">
    		 	<i class="icon icon-jhsb-saoyisao"></i>
    		 	<div class="inputs">
	        		<ul>
	        			<li>
	        				<input type="text" placeholder="输入激活码">
	        			</li>
	        		</ul>
	        		<p class="jh-tips">请输入激活码，激活码可安购买的软件上获取</p>
	    			<div class="button-jh"> 
	    				<a href="#" class="button jh">确认激活</a>
	    			</div>
	        		
	        	</div>
	        	
	        	<div class="error-tips">
	        		您输入的激活码有误，请查正后输入
	        	</div>
        	</div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.blue-bg{
	position: relative;
}
.error-tips{
	width: 530px;
	height: 200px;
	background: rgba(0,0,0,0.5);
	position: absolute;
	left:50% ;
	top: 50%;
	margin-left:-275px ;
	margin-top: -65px;
	border-radius: 20px;
	font-size: 30px;
	color: #fff;
	text-align: center;
	line-height:200px ;
}

.icon-jhsb-saoyisao{
	width: 60px;
	height: 60px;
	background: url(../assets/jhsb-saoyisao.png) no-repeat 100% 100%;
	display: block;
	background-size:100% ;
	float: right;
	margin-top: 48px;
	margin-right: 54px;
	margin-bottom: 168px;
}
.inputs{
	height:402px;
	padding-top: 275px;
	padding-bottom: 224px;
	ul li input{
		text-align: left;
		padding-left: 50px;
	}
}
.jh-tips{
	font-size: 36px;
	color: #fff;
	margin-top: 40px;
	margin-left: 50px;
	margin-bottom: 125px;
}
</style>
