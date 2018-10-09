<template>
    <div class="index-page">
        <div class="left-nav">
        	<dl class="head-img">
        		<dt><img src="../assets/index-wangyisheng.png"></dt>
        		<dd>王医生</dd>
        	</dl>
        	<ul>
                <li class="active index"><i class="icon"></i>首页</li>
                <li class="zhishiku"><i class="icon"></i>知识库</li>
        		<li class="wode"><i class="icon"></i>我的</li>
        	</ul>
            <div class="left-nav-logo"></div>
        </div>
        <div class="right-card">
        	<div class="top-nav">
                <div class="search">
                    <input type="texe" placeholder="患者姓名／身份证号">
                    <i class="icon"></i>
                    <i class="sousuo"></i>
                </div>
                <div class="shatubiao"></div>
            </div>
            <div class="center-content">
                <div class="total">
                    <p>当前共有数据：<span>10</span></p>
                    <i class="icon icon-paixu"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
 
.index-page{
	background: #f3f6fc;
	height:100%;
	width:100%;
}
.left-nav{
	width: 208px;
    height: 100%;
    background: #fff;
    box-shadow: 2px 3px 30px #efefef;
    float: left;
    position: relative;
    
    dl.head-img{
    	dt{
		    height: 80px;
		    width: 80px;
		    background-color: #666666;
		    border-radius: 40px;
		    margin: 0 auto;
		    margin-top: 14px;
			margin-bottom: 28px;
			overflow: hidden;

			img{
				height: 80px;
		    	width: 80px;
			}
    	}
    	dd{
		    color: #282828;
		    font-size: 32px;
		    font-weight: bold;
            text-align: center;
    	}
    }

    ul{
    	margin-top: 110px;
    	li{
    		color: #7a7a7a;
    		font-size: 30px;
            margin-bottom:130px;
            text-align: center;
    		i.icon{
    			display: block;
			    width: 68px;
			    height: 68px;
			    margin: 0 auto;
			    margin-bottom:30px;
    		}
    		
    	}
    	li.active{
    		color: #3ba6dd;
        }
        li.index{
            i{
                background: url(../assets/left-nav-index.png);
                background-size: 60px 60px;
                background-repeat: no-repeat;
                background-position: 4px 0;
            }
        }
        li.index.active{
            i{
                background: url(../assets/left-nav-index-active.png);
                background-size: 57px 68px;
                background-repeat: no-repeat;
                background-position: 5px 0;
            }
        }
        li.zhishiku{
            i{
                background: url(../assets/left-nav-zhishiku.png);
                background-size: 68px 57px;
                background-repeat: no-repeat;
                background-position:0px 0;
            }
        }
        li.wode{
            i{
                background: url(../assets/left-nav-wode.png);
                background-size: 68px 68px;
                background-repeat: no-repeat;
                background-position:0px 0;
            }
        }
    }

    .left-nav-logo{
        width: 123px;
        height: 152px;
        background: url(../assets/index-logo.png);
        background-size: 100%;
        margin: 0 auto;
        position: absolute;
        bottom: 35px;
        left: 50%;
        margin-left: -61px;
    }
}
.right-card{
	float: left;
	width: calc(100% - 208px);
	.top-nav{
        height: 98px;
        background: #fff;
        padding-top:20px;
        position:relative;
        .search{
            height: 72px;
            width: 810px;
            border: 1px solid #e2e2e2; 
            margin: 0 auto;
            border-radius: 50px;
            input{
                    float: left;
                    height: 72px;
                    width: 550px;
                    border: none;
                    background: none;
                    color: #989898;
                    font-size: 30px;
                    padding-left: 38px;
            }
            i.icon{
                float: left;
                display: block;
                width: 72px;
                height: 72px;
                background: url(../assets/index-erweima.png);
                background-size: 48px 48px;
                background-position: 12px 12px;
                background-repeat: no-repeat; 
            }
            i.sousuo{
                float: right;
                width: 128px;
                height: 72px; 
                background-color: #3ba6dd;
                border-radius: 70px;
                background-image: url(../assets/index-sousuo.png);
                background-size: 37px 37px;
                background-repeat: no-repeat;
                background-position: 45px 17px;
            }
        }
        .shatubiao{
            width: 59px;
            height: 57px;
            background-image:  url(../assets/index-youshang.png);
            float: right; 
            background-repeat: no-repeat;
            background-size: 100%;
            position: absolute;
            right: 60px;
            top:31px;
        }
	}
    .center-content{
        padding-left: 68px;
        padding-right: 60px;
        .total{
            margin-top: 62px;
            color: #989898;
            font-size: 36px;
            span{
                color:#282828;
            }
        }
    }
}
</style>
