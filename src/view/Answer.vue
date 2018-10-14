<template>
    <div>
    		<div>开始答题</div>
    		<div class="answer shadow ">
    			 <h2>1.您精力充沛吗？（指精神头足，乐于做事）</h2>
    			 <ul>
    			 	<li class="active">A. 没有（从来没有）</li>
    			 	<li>B. 很少（可以忽略）</li>
    			 	<li>C. 有时（偶尔出现）</li>
    			 	<li>D. 经常（有规律）</li>
    			 	<li>E. 总是（一直有）</li>
    			 </ul>
    		</div>
    		 <div class="button-jh fang clearfix"> 
			<a href="jvascript:void(0)" class="button jh fl prev">上一题</a>
			<a href="jvascript:void(0)" class="button jh fr">上一题</a>
		</div>
		
		<!--答题完成-->
		<div class="answered hide">
			<dl>
				<dt></dt>
				<dd>答完了！</dd>
				<dd>请把设备交还给医师。</dd>
			</dl>
		</div>
		<div class="button-jh wid500 fang">  
			<a href="jvascript:void(0)" class="button jh ">进入体质辨识报告</a>
		</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.button-jh{
	width: 860px;
	margin: 0 auto;
	margin-top: 65px;
	.button{
		width: 370px;
	}
	.prev{
		background: #d1d8db;
	}
}
.wid500{
	width: 500px;
	margin-top: 160px;
	.button{
		width: 500px;
	}
}
body{
	
	background: #f5f5f5;
}
.answer{
	width: 1750px;
	height: 1045px;
	background: #fff;
	margin: 0 auto;
	margin-top: 90px;
	background: url(../assets/yuan_03.png) repeat-y;
	background-size:28px 57px ;
	background-position:12px 15px ; 
	padding-bottom: 110px;
	h2{
		text-align: center;
		font-size: 48px;
		color: #282828;
		padding-top: 115px;
	}
	ul{
		margin-top: 90px;
		
		li{
			width: 1000px;
			background: #f2f2f2;
			border-radius: 100px;
			border: 1px solid #dcdcdc;
			margin: 0 auto;
			padding: 30px   45px;
			color: #656565;
			font-size: 40px;
			margin-bottom: 40px;
		}
		li.active{
			background: #3ba6dd;
			color: #fff;
		}
		li:last-child{
			
		}
	}
}

.answered{
	dl{
		width: 500px;
		margin: 0 auto;
		margin-top: 250px;
		dt{
			width: 120px;
			height: 120px;
			margin: 0 auto; 
			margin-bottom: 55px;
			background:url(../assets/ok.png) no-repeat;
			background-size:100%;
		}
		dd{
			text-align: center;
			margin-bottom: 45px;
			font-size: 36px;
			color: #282828;
		}
	}
}
</style>

