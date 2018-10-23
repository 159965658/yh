<template>
     <div class="right-card">
        		<div class="top-nav">
                <div class="top-nav-search">
                    <input type="texe" placeholder="患者姓名／身份证号" v-model="searchText">
                    <i class="icon"></i>
                    <i class="sousuo"></i>
                </div>
                <router-link to="/newfile" class="shatubiao"></router-link>
                <!-- <div class="shatubiao"></div> -->
            </div>
			<!-- 编辑样式 edit2 -->
            <div class="center-content ">
                <div class="total">
                    <p>当前共有数据：<span>{{userList.length}}</span></p>
                    <i class="icon icon-paixu" @click="filterShow"></i>
                    <i class="icon icon-indexedit" @click="indexEdit"></i>
                </div>
                	<div class="card_area">
	                <ul class="card clearfix">
                        
	                		<!--默认卡片样式-->
	                		<card  v-for="(item,index) in userList" :item='item' :key="index" :edit='false'>
	                			 
	                		</card>
	               
	                </ul>
            		</div>
            	</div>
                <!-- <popup-filter :isShow = 'filterVis' v-on:search='searchFilter'></popup-filter> -->
        </div>
</template>
<script>
//筛选
import PopupFilter from "@/components/PopupFilter";
import card from "@/components/card";
export default {
  components: {
    card
  },
  data() {
    return {
      filterVis: false,
      userList: [],
      cacheUser: {},
      searchText: ""
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
    },
    indexEdit() {
      this.$cache.set(this.$cacheEnum["list"], this.userList);
      this.$router.push("/indexedit");
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
  }
  /*首页编辑状态2 添加.edit2 即可*/
  .center-content.edit2 {
    position: relative;
    z-index: 1;
  }
  ul.card {
    padding-top: 30px;
  }
}
</style>
