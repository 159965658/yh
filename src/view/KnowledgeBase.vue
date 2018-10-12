<template>
    <div style="height: 100%;"> 
    		<div class="knowledage-top-nav">
    			<ul>
    				<li class="active">调理方案</li>
    				<li>节气养生</li>
    				<li>医师建议</li>
    				<li>温馨提示</li>
    			</ul>
    		</div>
    		<div class="right-cont-w">
	    		<div class="center-content ">
	    			<div class="total">
	    				<ul class="clearfix">
	    					<li class="fl"><p>当前共有数据：<span>10</span></p> <i class="icon icon-paixu icon-del"></i><i class="icon icon-paixu icon-add"></i></li>
	    					<li class="fl">
	    						<div class="top-nav-search">
			                    <input type="texe" placeholder="输入关键字">
			                    <i class="sousuo"></i>
			                </div>
			                <router-link to="/newfile" class="shatubiao"></router-link>
	    					</li>
	    					<li class="fl xiala">
	    						<label for="">共享状态</label>
	    						<select name="" id="">
	    							<option value="">111</option>
	    							<option value="">111</option>
	    							<option value="">111</option>
	    						</select>
	    						<i class="icon arrow"></i>
	    					</li>
	    				</ul>
	    			</div>
	    			<div class="right-list">
	    				<ul>
	    					<li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。</li>
	    					<li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。饮食宜有节制，四季营养合理搭配。</li>
	    					<li>多食五谷杂粮，蔬菜水果，少食过于油腻及辛辣之物。</li>
	    					<li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。</li>
	    					<li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。</li>
	    					<li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。饮食宜有节制，四季营养合理搭配。</li>
	    					<li>多食五谷杂粮，蔬菜水果，少食过于油腻及辛辣之物。</li>
	    					<li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。</li>
	    				</ul>
	    			</div>
	    		</div>
    		</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.right-cont-w{
	float: left;
	width: calc(100% - 208px);
	height: calc( 100% - 120px );
	.center-content{
		height:calc( 100% - 20px );
	}
	.icon-add{
        background-image: url(../assets/add2.png);
        height: 60px;
        right: 75px;
    }
    .icon-del{
    		background-image: url(../assets/del.png);
    		right: 270px;
    		top:63px
    }
	ul{
		li.xiala{
			margin-top:-5px;
			margin-left:65px;
			position:relative;
			i.arrow{
				position:absolute ;
				width: 26px;
				height: 16px;
				background-size:100% ;
				right: 25px;
				top: 25px;
			}
			select{
    				width: 210px;
    				height: 70px;
    				background: #fff;
    				border: 1px solid #dcdcdc;
    				border-radius: 10px;
    			}
		}
	}
}
.right-list{
	height: calc( 100% - 140px );
    overflow-y: auto;
    
    ul{
    		li{
    			box-shadow: -1px 1px 30px #cacaca;
    			background: #FFFFFF;
    			border-radius:15px ;
    			padding: 85px 305px;
    			margin-bottom: 35px;
    			margin-right: 60px;
    			
    		}
    }
}
.top-nav-search{
	background: #FFFFFF;
	width: 515px;
	margin-left: 55px;
	margin-top: -10px;
	input{
		width: 330px;
	}
}
.knowledage-top-nav{
	background: #fff;
	ul{
		display: flex;
		li{
			flex: 1;
			text-align: center;
			font-size: 36px;
			color: #656565;
			height: 116px;
			line-height: 116px;
		}
		li.active{
			position: relative;
			color: #3ba6dd;
		}
		li.active:after{
			content: "";
			position: absolute;
			width: 138px;
			height: 6px;
			left: 50%;
			bottom:0;
			display: block;
			background: #3ba6dd;
			margin-left: -69px;
			
		}
	}
}

</style>
