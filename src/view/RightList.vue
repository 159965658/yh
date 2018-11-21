<template>
<div class="right-card">
    <div class="top-nav">
        <div class="top-nav-search">
            <input type="texe" placeholder="患者姓名／身份证号" v-model="searchText">
            <i class="icon" @click="ocr"></i>
            <i class="sousuo" @click="searchList()"></i>
        </div>
        <router-link to="/newfile" class="shatubiao"></router-link>
        <!-- <div class="shatubiao"></div> -->
    </div>
    <!-- 编辑样式 edit2 -->
    <div class="center-content ">
        <div class="total">
            <p>当前共有数据：<span>{{count}}</span></p>
            <i class="icon icon-paixu" @click="filterShow"></i>
            <i class="icon icon-indexedit" @click="indexEdit"></i>
        </div>
        <div class="card_area" >
            <ul class="card clearfix" v-infinite-scroll="loadMore" infinite-scroll-immediate-check='flase' infinite-scroll-disabled="loading" infinite-scroll-distance="300"  v-if="count > 0">

                <!--默认卡片样式-->
                <card v-for="(item,index) in sList" :item='item' :key="index" :edit='false'>

                </card>

            </ul>
            <data-null v-else></data-null>
            <!-- <div class="data-null" v-else>
              <img src="../assets/indexnull2.png" alt="" srcset="">
              <p>暂无数据</p>
            </div> -->
        </div>
    </div>
    <div v-show="filterVis">
        <transition name="slide-fade" mode="out-in">

            <!--弹出层-筛选-->
            <div class="popup_filter">
                <h2>筛选</h2>
                <ul class="forms">
                    <li class="clearfix time" style="position:relative">

                        <label for="" >时间</label>
                        <input type="text" @click="openPicker(1)" disalbed readonly v-model="search.startText">
                        <mt-datetime-picker ref="pickerFilter" v-model="defaultDate" :startDate='startDate1' :endDate='endDate1' type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
                        </mt-datetime-picker>
                        <p></p>
                        <input type="text" @click="openPicker(2)" disalbed readonly v-model="search.endText"/>

                </li>
                    <li class="clearfix" style="position:relative">
                        <label for="">辨识状态</label>
                        <app-select class="up-status" v-on:opotion="opotion" :id='upStatus' :opotionList='opotionList'></app-select>
                        <!-- <input type="text" /> -->
                        <div class="arrow"></div>

                    </li>
                    <li class="clearfix">
                        <label for="">创建人</label>
                        <input type="text" placeholder="创建人" v-model="search.createUser"/>
        		</li>
                    <li class="clearfix">
                        <label for="">机构</label>
                        <input type="text" placeholder="机构名称" v-model="search.orgName"/>
        		</li>
                    <li>
                        <button class="btn-save" @click="save">保存</button>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</div>
</template>

<script>
//筛选
import dataNull from "@/components/DataNull";
import PopupFilter from "@/components/PopupFilter";
import card from "@/components/card";
export default {
  components: {
    card,
    dataNull
  },
  data() {
    return {
      opotionList: [
        {
          id: -1,
          name: "请选择"
        },
        {
          id: 1,
          name: "已辨识"
        },
        {
          id: 0,
          name: "未辨识"
        }
      ],
      filterVis: false,
      userList: [],
      cacheUser: {},
      searchText: "",
      text: "",
      orgName: "",
      createUser: "",
      startDate: "",
      endDate: "",
      count: 0,
      start: 0,
      num: 50,
      loading: true,
      sList: [],
      search: {
        createUser: "",
        orgName: "",
        startText: "",
        endText: ""
      },
      startDate1: new Date("2008-01-01"),
      endDate1: new Date(),
      openIndex: 1,
      defaultDate: new Date(),
      upStatus: -1,
      nameList: [],
      ocrFlagNull: false,
      ocrFlagData: null
    };
  },
  mounted() {
    //获取数据
    this.cacheUser = this.$cache.getUser();
    this.getCustomer();
    setTimeout(() => {
      $vm.$on("removeIndex", this.removePar);
    }, 1);
  },
  methods: {
    loadMore() {
      if (this.count == 0) return;
      this.loading = true; //禁止加载
      this.getCustomer();
    },
    getCustomer() {
      //获取用户信息
      window["getCustomerSuccess"] = this.getCustomerSuccess;
      window["getCustomerError"] = this.getCustomerError;
      this.$native.run(
        "getcustomer",
        {
          userCode: this.cacheUser.userCode,
          start: this.start * this.num,
          num: this.num,
          keyWord: this.searchText,
          createStart: this.search.startText
            ? new Date(this.search.startText + " 00:00:00").getTime()
            : -1,
          createEnd: this.search.endText
            ? new Date(this.search.endText + " 23:59:59").getTime()
            : -1,
          haveReport: this.upStatus,
          creator: this.search.createUser,
          orgName: this.search.orgName
        },
        "getCustomerSuccess",
        "getCustomerError"
      );
    },
    getCustomerError() {
      this.count = 0;
      this.sList = [];
    },
    getCustomerSuccess(data) {
      // alert(data);
      data = JSON.parse(data);
      let res = data.customerInfoList;
      if (this.ocrFlagNull) {
        //ocr
        this.ocrAdd(this.ocrFlagData);
        return;
      }
      if (this.start == 0) {
        this.userList = res;
        this.sList = this.userList;
        //  this.start++; //如果是0加一
      } else {
        this.userList = this.sList.concat(res);
        this.sList = this.sList.concat(res);
      }
      this.count = data.total;
      //没有下一页了
      if (res.length < this.num) {
        return;
      }
      //加载下一页做准备
      this.start++;
      this.loading = false;
    },
    filterShow() {
      this.$toastFull();
      //绑定全局
      let ts = this;
      $(".popup_bg").one("click", function() {
        ts.$closeFull();
        ts.appBackCall();
        return;
      });
      this.filterVis = !this.filterVis;
      //清空搜索条件
      this.setPar();
      window["appBackCall"] = this.appBackCall;
    },
    appBackCall() {
      this.filterVis = false;
      return true;
    },
    searchFilter(search) {
      this.filterVis = !this.filterVis;
      this.$closeFull();
      this.searchList();
    },
    indexEdit() {
      // this.$cache.set(this.$cacheEnum["list"], this.userList);
      this.$router.push("/indexedit");
    },
    handleConfirm(value) {
      console.log(value);
      if (this.openIndex == 1) {
        this.search.startText = value.format("yyyy-MM-dd");
        return;
      }
      this.search.endText = value.format("yyyy-MM-dd");
      //   this.addUser.birth = value.format("yyyy-MM-dd");
    },
    openPicker(i) {
      this.openIndex = i;
      if (i == 1 && this.search.startText) {
        this.defaultDate = new Date(this.search.startText);
        this.startDate = new Date("1972-01-02");
      } else if (i == 2) {
        if (!this.search.startText) {
          this.$toast("请先选择开始时间");
          return;
        }
        let s = new Date(this.search.startText);
        s.setDate(s.getDate() + 1);
        this.startDate = s; //只能选中开始日期之后的时间
        if (this.search.endText)
          this.defaultDate = new Date(this.search.endText);
      }
      this.$refs.pickerFilter.open();
    },
    save() {
      if (!this.search.endText) {
        if (this.search.startText) {
          this.search.endText = new Date().format("yyyy-MM-dd");
        }
      }
      this.searchFilter(this.search);
      //  $vm.$emit("search", this.search);
    },
    searchList() {
      this.start = 0; //重置分页
      this.getCustomer();
    },
    opotion(item) {
      this.upStatus = item.id;
    },
    getCustomerbyuser(orgName, webName) {
      window["getcustomerbyuser"] = this.getCustomerUserSuccess;
      window["getcustomerbyuserError"] = this.getcustomerbyuserError;
      this.$native.run(
        "getcustomerbyuser",
        {
          institutionName: orgName,
          webNickName: webName
        },
        "getcustomerbyuser",
        "getcustomerbyuserError"
      );
    },
    getcustomerbyuserError() {
      this.nameList = [];
      this.sList = [];
      this.count = 0;
      // this.searchList();
    },
    ocrAdd(data) {
      this.$cache.set(this.$cacheEnum.ocrAdd, data);
      this.$router.push("/newfile?type=" + 1);
    },
    getCustomerUserSuccess(data) {
      // document.write(data);
      this.nameList = JSON.parse(data).customerInfoList;
      this.searchList();
    },
    ocr() {
      window["ocr"] = this.ocrSuccess;
      window["ocrError"] = this.ocrError;
      this.$native.run("ocr", "", "ocr", "ocrError");
    },
    ocrError() {
      // this.error = true;
      this.ocrFlagNull = false;
      this.$toast("扫描失败");
    },
    ocrSuccess(data) {
      const res = JSON.parse(data);
      // this.addUser.cName = res.Name.value;
      this.ocrFlagNull = true;
      //清空搜索条件
      this.setPar();
      this.searchText = res.Name.value;
      this.ocrFlagData = res;
      this.searchList(true, res);
    },
    setPar() {
      this.searchText = "";
      this.search.createUser = "";
      this.search.orgName = "";
      this.search.startText = "";
      this.search.endText = "";
      this.upStatus = -1;
      this.startDate = "";
      this.endDate = "";
    },
    removePar() {
      this.setPar();
      this.searchList();
    }
  },
  beforeDestroy() {
    window["appBackCall"] = function() {
      return true;
    };
    $vm.$off("removeIndex", this.removePar);
  }
};
</script>

<style lang="less" scoped>
.select {
  display: inline-block !important;
  width: 76% !important;
  background-color: #f2f2f2;

  > .select_click_box {
    background-color: #f2f2f2 !important;
  }
}

.up-status {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: absolute;
}

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
      // height: calc(100% - 150px);
      overflow: scroll;
    }
  }
}
</style><style lang="less" scoped>
.popup_filter {
  width: 824px;
  background: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  input {
    font-size: 35px;
  }

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
</style><style lang="less">
.filterC {
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 600px;
  border: 1px solid #ccc;
  top: 85px;
  left: 160px;
}

.filterTime {
  font-size: 30px;
}

.filterC .cell {
  border: none;
}

.up-status {
  > .select_click_box {
    height: 80px !important;
    border: 1px solid #dcdcdc !important;
    background-color: #f2f2f2 !important;
    border-radius: 0 !important;

    // border: none !important;
    > p {
      line-height: 80px;
    }
  }
}
</style>
