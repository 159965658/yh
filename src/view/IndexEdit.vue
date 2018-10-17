<template>
    <div style="height: 100%;background: #f3f6fc;">
        <app-header :ltitle='"后退"' :ctitle='"首页编辑"'></app-header>
        <div class="center-content ">
                <div class="total clearfix">
                    <p>当前共有数据：<span>10</span></p>
                    <ol class="to-btns clearfix">
                    		<li><i class="icon icon-shangchuan"></i>上传 <span>2</span></li>
                    		<li><i class="icon icon-daochu"></i>导出</li>
                    		<li><i class="icon icon-shanchu"></i>删除</li>
                    		<li><i class="radio-btn  active"></i>全选</li>
                    </ol>
                </div>
                	<div class="card_area">
	                <ul class="card clearfix">
	                		<!--默认卡片样式-->
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
                         	<router-link to="/identification" tag="button">开始辨识</router-link>
                         	<!-- <button>开始辨识</button> -->
                        		<router-link to="/seefile" tag="button">查看档案</router-link>
	                			<!-- <button>查看档案</button> -->
	                			
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                		<li class="default">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex">男</li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
	                			<!-- 单选 选中 -->
	                			<div class="radio-btn active"></div>
	                		</li>
	                </ul>
            		</div>
            	</div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.center-content{
	width: 1740px;
	margin: 0 auto;
	
}
.total{
	padding-top: 32px !important;
	margin-bottom: 36px !important;
}
.total p{
	float: left;
	line-height: 80px;
}
ol.to-btns{
	float:right;
}
ol.to-btns li{
	float: left;
	width: 240px;
	height: 80px;
	background: #FFFFFF;
	border:1px solid #3ba6dd !important;
	border-radius: 10px;
	margin-left: 50px;
	color:#989898 ;
	font-size: 32px;
	line-height: 80px;
}
ol.to-btns li span{
	height: 34px;
	background: #ff9e35;
	border-radius:50% ;
	color: #fff !important;
	font-size: 30px;
	padding:  0 8px;
}
ol.to-btns li i{
	float: left;
	margin-left: 56px;
	margin-top: 20px;
	margin-right: 18px;
	position: initial !important;
}
.card_area,.total{
	padding-left: 10px;
}
.card_area ul.card > li:nth-child(4n){
	margin: 0;
}
.card_area ul.card > li{
	position: relative;
	
}
.radio-btn{
	width: 32px;
	height: 32px;
	border:4px solid #dcdcdc ;
	border-radius: 50px;
	background: #fff;
}
.card_area ul.card > li .radio-btn{
	position: absolute;
	right: 10px;
	top: 6px;
}
.radio-btn.active{
	width: 14px;
	height: 14px;
	border:10px solid #3ba6dd !important;
}
</style>
