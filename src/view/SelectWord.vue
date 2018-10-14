<template>
    <div style="height: 100%;">
           	 <app-header :ltitle='"后退"' :ctitle='"选择词条"'></app-header>
      	 
    		<div class="select-content clearfix">
    			<div class="scroll-y fl">
	    			<div class="left fl">
	    				<div class="top-nav-search">
	                    <input type="texe" placeholder="输入关键字">
	                    <i class="sousuo"></i>
	                </div>
	                <ul>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                </ul>
	    			</div>
    			</div>
    			<div class="right fr">
    				<textarea name="" rows="" cols="">xdfgh</textarea>
    				 <div class="button-jh fang"> 
	    				<a href="jvascript:void(0)" class="button jh">保存</a>
	    			</div>
    			</div>
    		</div>
    
</div> 
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.button-jh.fang{
 	 margin-left:235px ;
    position:fixed ;
    bottom: 40px;
 }
.select-content{
	height: calc( 100% - 180px );
}
.scroll-y{
	height: 100%;
	overflow-y: auto;
	width: 950px;
	padding-left: 20px;
}
 
.top-nav-search{
	margin: 0;
	width: 100%;
	margin-bottom: 40px;
	input{
		width: 80%;
	}
}
.select-content{
	width: 1960px;
	margin: 0 auto;
	margin-top: 35px;
	
	.left{
		width: 925px; 
		ul{
			li{
				position: relative;
				padding:95px 45px;
				margin-bottom: 30px;
				.icon-add{
					position: absolute;
					top: 20px;
					right: 20px;
				}
				p{
					color: #282828;
					font-size: 42px; 
				}
			}
		}
	}
	
	.icon-add {
      position: absolute; 
      background-repeat: no-repeat;
      width: 60px;
      height: 50px;
      background-size: 100%; 
      float: right;
    }
    .icon-add{
        background-image: url(../assets/add2.png);
        height: 60px;
    }
    .icon.arrow{
	    	width: 32px;
	    	height: 21px;
	    	background-size:100% ;
	    	position: absolute;
	    	bottom:20px;
	    	right: 20px;
    }
    
    .right{
    		width: 955px;
    		background: #fff; 
    		height: 100%;
    		textarea{
    			width: 100%;
    			background: #fff;
    			height: 315px;
    		}
    		
    }
}
</style>
