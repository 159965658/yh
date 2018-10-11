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
			<!-- 编辑样式 edit2 -->
            <div class="center-content ">
                <div class="total">
                    <p>当前共有数据：<span>10</span></p>
                    <i class="icon icon-paixu"></i>
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
	                			<button>开始辨识</button>
	                			<button>查看档案</button>
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
	                		</li>
	                		<!--卡片样式 第一种状态 status1-->
						<li class="default status1">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex mail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<li class="default status1">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex mail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<li class="default status1">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex mail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<!--卡片样式 第二种状态 status2-->
						<li class="default status1 status2">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex femail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li class="chuan">已传</li>
	                					<li class="dao">已导</li>
	                					<li class="bian">已辩</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<!--卡片样式 第三种状态 status3-->
						<li class="default status1 status2 status3">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex femail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li class="chuan">已传</li>
	                					<li class="dao">已导</li>
	                					<li class="bian">已辩</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<!--卡片样式 第三种状态 status4-->
						<li class="default status1 status2 status3 status4">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex femail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li class="chuan">已传</li>
	                					<li class="bian">已辩</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<li class="default status1 status2 status3 status4">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex femail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					 
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                		<!--卡片样式 第三种状态 status5-->
						<li class="default status1 status2 status3 status4 status5">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">张三</li>
	                					<li class="sex femail"></li>
	                					<li class="age">30岁</li>
	                				</ol>
	                				<p class="nums">630521199304167742</p>
	                				<ol class="btns clearfix">
	                					<li class="chuan">已传</li>
	                					<li class="bian">已辩</li>
	                				</ol>
	                			</div>
	                			<button class="btn1">开始辨识</button>
	                			<button class="btn2">查看档案</button>
	                		</li>
	                </ul>
            		</div>
            	</div>
        </div>
        <!--弹出层背景-->
        <!-- <div class="popup_bg"></div> -->
        <!--弹出层-筛选-->
        <!-- <div class="popup_filter">
        		<h2>筛选</h2>
        		<ul class="forms">
        			<li class="clearfix time">
        				<label for="">时间</label>
        				<input type="text" />
        				<p></p>
        				<input type="text" /> 
        			</li>
        			<li class="clearfix">
        				<label for="">上传状态</label>
        				<input type="text" />
        				<div class="arrow"></div>
        			</li>
        			<li class="clearfix">
        				<label for="">创建人</label>
        				<input type="text" />
        			</li>
        			<li class="clearfix">
        				<label for="">机构</label>
        				<input type="text" />
        			</li>
        			<li>
        				<button class="btn-save">保存</button>
        			</li>
        		</ul>
        </div> -->
    </div>
    
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.popup_filter {
  width: 824px;
  background: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  h2 {
    height: 84px;
    border-bottom: 1px solid #dcdcdc;
    text-align: center;
    font-size: 36px;
    color: #282828;
    padding-top: 72px;
    font-weight: bold;
  }
}
.forms {
  height: calc(100% - 156px);
  overflow-y: auto;
  li {
    width: 776px;
  }
}
.btn-save {
  margin-top: 100px;
  margin-left: 188px;
}
.index-page {
  background: #f3f6fc;
  height: 100%;
  width: 100%;
}
.left-nav {
  width: 208px;
  height: 100%;
  background: #fff;
  box-shadow: 2px 3px 30px #efefef;
  float: left;
  position: relative;

  dl.head-img {
    dt {
      height: 80px;
      width: 80px;
      background-color: #666666;
      border-radius: 40px;
      margin: 0 auto;
      margin-top: 14px;
      margin-bottom: 28px;
      overflow: hidden;

      img {
        height: 80px;
        width: 80px;
      }
    }
    dd {
      color: #282828;
      font-size: 32px;
      font-weight: bold;
      text-align: center;
    }
  }

  ul {
    margin-top: 110px;
    li {
      color: #7a7a7a;
      font-size: 30px;
      margin-bottom: 130px;
      text-align: center;
      i.icon {
        display: block;
        width: 68px;
        height: 68px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    li.active {
      color: #3ba6dd;
    }
    li.index {
      i {
        background: url(../assets/left-nav-index.png);
        background-size: 60px 60px;
        background-repeat: no-repeat;
        background-position: 4px 0;
      }
    }
    li.index.active {
      i {
        background: url(../assets/left-nav-index-active.png);
        background-size: 57px 68px;
        background-repeat: no-repeat;
        background-position: 5px 0;
      }
    }
    li.zhishiku {
      i {
        background: url(../assets/left-nav-zhishiku.png);
        background-size: 68px 57px;
        background-repeat: no-repeat;
        background-position: 0px 0;
      }
    }
    li.wode {
      i {
        background: url(../assets/left-nav-wode.png);
        background-size: 68px 68px;
        background-repeat: no-repeat;
        background-position: 0px 0;
      }
    }
  }

  .left-nav-logo {
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
.right-card {
  float: left;
  width: calc(100% - 208px);
  height: 100%;
  .top-nav {
    height: 98px;
    background: #fff;
    padding-top: 20px;
    position: relative;
    .search {
      height: 72px;
      width: 810px;
      border: 1px solid #e2e2e2;
      margin: 0 auto;
      border-radius: 50px;
      input {
        float: left;
        height: 72px;
        width: 550px;
        border: none;
        background: none;
        color: #989898;
        font-size: 30px;
        padding-left: 38px;
      }
      i.icon {
        float: left;
        display: block;
        width: 72px;
        height: 72px;
        background: url(../assets/index-erweima.png);
        background-size: 48px 48px;
        background-position: 12px 12px;
        background-repeat: no-repeat;
      }
      i.sousuo {
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
    .shatubiao {
      width: 59px;
      height: 57px;
      background-image: url(../assets/index-youshang.png);
      float: right;
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      right: 60px;
      top: 31px;
    }
  }
  .center-content {
    padding-left: 60px;
    padding-right: 5px;
    height: calc(100% - 118px);
    background-color: #f3f6fc;
    .total {
      padding-top: 62px;
      color: #989898;
      font-size: 36px;
      position: relative;
      margin-bottom: 30px;
      span {
        color: #282828;
      }
    }
    .icon-paixu {
      position: absolute;
      background-image: url(../assets/inde-paixu.png);
      background-repeat: no-repeat;
      width: 60px;
      height: 50px;
      background-size: 100%;
      position: absolute;
      right: 50px;
      top: 60px;
    }
    .card_area {
      height: calc(100% - 150px);
      overflow-y: auto;
    }
    ul.card {
      padding-top: 30px;
      > li {
        width: 392px;
        height: 474px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0px 0px 30px #c7d7ee;
        float: left;
        margin-right: 50px;
        margin-bottom: 50px;
        .bg {
          background-image: url(../assets/card-bg.png);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: 0px -1px;
          width: 100%;
          height: 244px;
          border-radius: 15px;
          margin-bottom: 34px;
        }
        ol.message {
          padding: 0 40px;
          padding-top: 55px;
          li {
            font-size: 32px;
            color: #fff;
            float: left;
          }
          li.name {
            width: 168px;
            font-size: 36px;
          }
          li.sex {
            margin-top: 4px;
          }
          li.age {
            float: right;
            margin-top: 4px;
          }
        }
        p.nums {
          padding: 0 40px;
          color: #fff;
          font-size: 32px;
          margin-top: 15px;
          margin-bottom: 10px;
          //box-shadow: 0px 0px 10px #4791c0;
        }
        ol.btns {
          padding: 0 40px;
          li {
            height: 45px;
            line-height: 45px;
            background-color: #4db7e8;
            border-radius: 40px;
            width: 106px;
            float: left;
            color: #c5e4f6;
            font-size: 28px;
            text-align: center;
            margin-right: 10px;
          }
        }
        button {
          width: 308px;
          height: 66px;
          border: 1px solid #ff8a00 !important;
          border-radius: 10px;
          background: #fff;
          margin-bottom: 20px;
          margin-left: 40px;
          font-size: 30px;
          color: #ff8a00;
        }
      }

      > li.status1 {
        .bg {
          height: 276px;
          margin-bottom: 0;
          background-image: none;
          background-image: -webkit-linear-gradient(90deg, #f5fafd, #2184c5);
        }
        ol.message {
          li.name {
            width: auto;
            margin-right: 25px;
          }
          li.sex {
            width: 35px;
            height: 35px;
            background-repeat: no-repeat;
            background-size: 100%;
            margin-top: 8px;
          }
          li.mail {
            background-image: url(../assets/mail.png);
          }
          li.femail {
            background-image: url(../assets/femail.png);
          }
        }
        button.btn1 {
          border: 1px solid #3ba6dd !important;
          color: #3ba6dd;
        }
        button.btn2 {
          border: 1px solid #e2e2e2 !important;
          color: #282828;
        }
      }

      > li.status2 {
        .bg {
          height: 276px;
          margin-bottom: 0;
          background-image: url(../assets/card-bg2.png);
          background-size: 392px 222px;
        }
        p.nums {
          margin-bottom: 32px;
        }
        ol.btns {
          padding: 0 40px;
          li {
            background-color: #4db7e8;
            width: 94px;
            color: #c5e4f6;
            font-size: 28px;
            margin-right: 15px;
          }
          li.dao {
            background-color: #1f87c8;
          }
          li.bian {
            background-color: #ff9d12;
            color: #fff;
          }
          li:last-child {
            margin-right: 0;
          }
        }
      }
      > li.status3 {
        .bg {
          background-image: url(../assets/card-bg3.png);
        }
      }

      > li.status4 {
        .bg {
          background: none;
        }
        ol.message {
          li.name {
            color: #282828;
          }
          li.age {
            color: #282828;
          }
        }
        p.nums {
          color: #989898;
        }
        ol.btns {
          padding: 0 40px;
          li.bian {
            background-color: #1f87c8;
            color: #fff;
          }
        }
      }

      > li.status5 {
        background: none;
        box-shadow: none;
      }
    }
  }
  /*首页编辑状态2 添加.edit2 即可*/
  .center-content.edit2 {
    position: relative;
    z-index: 1;
  }
}
</style>
