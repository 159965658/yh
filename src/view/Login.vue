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
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
    body { background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; }
    td,th,caption { font-size:14px; }
    h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
    address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
    a { color:#555; text-decoration:none; }
    a:hover { text-decoration:underline; }
    img { border:none; }
    ol,ul,li { list-style:none; }
    input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
    table { border-collapse:collapse; }
    html {overflow-y: scroll;}
	a:hover{color:#cd0200;text-decoration:underline} 
    .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
    .clearfix { *zoom:1; }
.blue-bg{
	width: 65%;
    background:-webkit-linear-gradient(left top,#88d7f7,#00a6e7);
    background:-o-linear-gradient(bottom right,#88d7f7,#00a6e7);
    background:-moz-linear-gradient(bottom right,#88d7f7,#00a6e7);
    background:linear-gradient(to bottom right,#88d7f7,#00a6e7);
    margin: 0 auto;
    border-radius: 20px;
    margin-top:100px;
    box-shadow: -1px 1px 30px #ababab;
    padding-bottom:110px;
    min-height:1000px;
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
input{
	outline:none;
}
.m-t-60{
	margin-top:60px;
}
.m-t-100{
	margin-top:100px;
}
.inputs{
	width: 68%;
    margin: 0 auto; 
    height: 100px;
    ul{
    	li{
    		background: #fff;
		    height: 102px;
		    line-height: 102px;
		    border-radius: 100px;
		    position:relative;
		    label{
		    	color:#1880c3;
		    	font-size:36px;
		    	float:left;
		    	margin-left: 50px;
		    }
		    input::-webkit-input-placeholder { 
	          color: #8fb9cb; 
	          font-size: 36px; 
	      	}
		    input{  
			    border: none;
			    background: none;
   				text-align: center	;
   				font-size:36px;
   				color:#1880c3;
   				width: 100%;
			    position: absolute;
			    left: 0;
			    text-align: center;
			    background: none;
			    height: 102px;
			    line-height: 102px;
			    text-align: center;
		    }
		    .icon-mima{
		    	background: url(../assets/mima.png);
		    	width: 60px;
		    	height: 60px;
		    	position: absolute;
			    right: -120px;
			    background-size: 100%;
			    top: 21px;
		    }
    	}
    }
}
.forget-mima{
	.forget,.change{
		font-size: 36px;
	    color: #fff;
	    margin-top: 42px;
	}
	.forget{
		float:left;
		margin-left:50px;

	}
	.change{
		float: right;
	    margin-right: 50px;
	}
}
.button-submit{
	.submit{
		width: 100%;
	    height: 102px;
	    line-height: 102px;
	    background: #ff9e35;
	    display: block;
	    border-radius: 100px;
	    color: #fff;
	    font-size: 36px;
	}
}
</style>
