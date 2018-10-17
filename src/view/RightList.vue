<template>
     <div class="right-card">
        		<div class="top-nav">
                <div class="top-nav-search">
                    <input type="texe" placeholder="患者姓名／身份证号">
                    <i class="icon"></i>
                    <i class="sousuo"></i>
                </div>
                <router-link to="/newfile" class="shatubiao"></router-link>
                <!-- <div class="shatubiao"></div> -->
            </div>
			<!-- 编辑样式 edit2 -->
            <div class="center-content ">
                <div class="total">
                    <p>当前共有数据：<span>10</span></p>
                    <i class="icon icon-paixu" @click="filterShow"></i>
                </div>
                	<div class="card_area">
	                <ul class="card clearfix">
                        
	                		<!--默认卡片样式-->
	                		<li class="default" v-for="(item,index) in userList" :key="index">
	                			<div class="bg">
	                				<ol class="message clearfix">
	                					<li class="name">{{item.cName}}</li>
	                					<li class="sex">{{item.sex | sex}}</li>
	                					<li class="age">{{item.birth | birth}}岁</li>
	                				</ol>
	                				<p class="nums">{{item.uCardNum}}</p>
	                				<ol class="btns clearfix">
	                					<li>已上传</li>
	                					<li>已导出</li>
	                				</ol>
	                			</div>
                         <router-link to="/identification" tag="button">开始辨识</router-link>
                        
	                			<!-- <button>开始辨识</button> -->
                        <router-link to="/seefile" tag="button">查看档案</router-link>
	                			<!-- <button>查看档案</button> -->
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
                <!-- <popup-filter :isShow = 'filterVis' v-on:search='searchFilter'></popup-filter> -->
        </div>
</template>
<script>
//筛选
import PopupFilter from "@/components/PopupFilter";
export default {
  components: {
    //  PopupFilter
  },
  data() {
    return {
      filterVis: false,
      userList: [],
      cacheUser: {}
    };
  },
  mounted() {
    setTimeout(() => {
      $vm.$on("search", this.searchFilter);
    }, 1);
    //获取数据
    this.cacheUser = this.$cache.getUser();
    this.getCustomer();
    // console.log(this);
  },
  methods: {
    getCustomer() {
      //获取用户信息
      window["getCustomerSuccess"] = this.getCustomerSuccess;
      this.$native.run(
        "getcustomer",
        { userCode: this.cacheUser.userCode },
        "getCustomerSuccess"
      );
    },
    getCustomerSuccess(data) {
      // alert(data);
      let res = JSON.parse(data).customerInfoList;
      this.userList = res;
      console.log(this.userList);
    },
    filterShow() {
      // this.filterVis = !this.filterVis

      this.$toastFull(PopupFilter);
    },
    searchFilter() {
      console.log("搜索");
      this.$closeFull();
    }
  },
  beforeDestroy() {
    $vm.$off("search", this.searchFilter);
  }
};
</script>

<style lang="less" scoped>
.top-nav-search {
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
.right-card {
  float: left;
  width: calc(100% - 208px);
  height: 100%;

  .center-content {
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
