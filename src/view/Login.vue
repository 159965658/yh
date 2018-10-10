<template>
    <div>
        <app-header :ctitle='"登录"' :rtitle='"创建新账户"'></app-header>
        <div class="blue-bg">
        	<div class="login-logo">
        	</div>
        	<div class="inputs">
        		<ul>
        			<li>
        				<label>账号：</label>
        				<input type="text" placeholder="请输入您的账号">
        			</li>
        			<li class="m-t-60">
        				<label>密码：</label>
        				<input type="password" placeholder="请输入您的密码">
        				<div class="icon-mima"></div>
        			</li>
        		</ul>
    			<div class="forget-mima clearfix">
    				<a class="forget">忘记密码</a>
    				<a class="change">切换登录账号</a>
    			</div>
    			<div class="button-submit m-t-100"> 
    				<a href="#" class="button submit">登 录</a>
    			</div>
        		
        	</div>
        </div>
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
export default {
  components: {
    AppHeader
  }
};
</script>
<style lang="less" scoped>
.blue-bg {
    width: 65%;
    background: -webkit-linear-gradient(left top, #88d7f7, #00a6e7);
    background: -o-linear-gradient(bottom right, #88d7f7, #00a6e7);
    background: -moz-linear-gradient(bottom right, #88d7f7, #00a6e7);
    background: linear-gradient(to bottom right, #88d7f7, #00a6e7);
    margin: 0 auto;
    border-radius: 20px;
    margin-top: 100px;
    box-shadow: -1px 1px 30px #ababab;
    padding-bottom: 110px;
    min-height: 1000px;
}

.login-logo{
	margin: 0 auto; 
    background: url(../assets/login-img.png);
    width: 196px;
    height: 304px; 
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 60px;
    margin-bottom: 48px;
}



</style>
