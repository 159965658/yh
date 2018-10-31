<template>
<div class="right-card">
    <div class="top-nav">
        <div class="top-nav-search">
            <input type="texe" placeholder="患者姓名／身份证号" v-model="searchText">
            <i class="icon" @click="ocr"></i>
            <i class="sousuo" @click="searchList"></i>
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
        <div class="card_area">
            <ul class="card clearfix">

                <!--默认卡片样式-->
                <card v-for="(item,index) in sList" :item='item' :key="index" :edit='false'>

                </card>

            </ul>
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
                        <input type="text" @click="openPicker(1)" v-model="search.startText">
                        <mt-datetime-picker ref="pickerFilter" v-model="defaultDate" :startDate='startDate1' :endDate='endDate1' type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
                        </mt-datetime-picker>
                        <p></p>
                        <input type="text" @click="openPicker(2)" v-model="search.endText"/>

                </li>
                    <li class="clearfix" style="position:relative">
                        <label for="">上传状态</label>
                        <app-select class="up-status" v-on:opotion="opotion" :opotionList='opotionList'></app-select>
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
import PopupFilter from "@/components/PopupFilter";
import card from "@/components/card";
export default {
  components: {
    card
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
          name: "已上传"
        },
        {
          id: 0,
          name: "未上传"
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
      defaultDate: new Date("2008-01-01"),
      upStatus: -1,
      nameList: []
    };
  },
  computed: {
    list() {
      let newList = this.userList;
      if (this.text) {
        newList = newList.filter(
          p => p.cName.indexOf(this.text) > -1 || p.uCardNum == this.text
        );
      }
      if (this.startDate) {
        newList = newList.filter(
          p => p.createdOnUTC > this.startDate && p.createdOnUTC < this.endDate
        );
      }
      // if (this.createUser) {
      //   newList = newList.filter(p => p.creator == this.createUser);
      // }
      console.log(newList, this.userList);
      this.count = newList.length;
      return newList;
    }
  },
  mounted() {
    // setTimeout(() => {
    //   $vm.$on("search", this.searchFilter);
    // }, 1);
    //获取数据
    this.cacheUser = this.$cache.getUser();
    this.getCustomer();
    this.count = this.sList.length;
    // console.log(this);
  },
  methods: {
    getCustomer() {
      //获取用户信息
      window["getCustomerSuccess"] = this.getCustomerSuccess;
      this.$native.run(
        "getcustomer",
        {
          userCode: this.cacheUser.userCode
        },
        "getCustomerSuccess"
      );
    },
    getCustomerSuccess(data) {
      // alert(data);
      let res = JSON.parse(data).customerInfoList;
      this.userList = res;
      this.sList = this.userList;
      console.log(this.userList);
    },
    filterShow() {
      this.$toastFull();
      this.filterVis = !this.filterVis;
      window["appBackCall"] = this.appBackCall;
    },
    appBackCall() {
      this.filterVis = false;
      return true;
    },
    searchFilter(search) {
      console.log(search);
      if (search.startText) {
        var timestamp = parseInt(
          new Date(search.startText + " 00:00:00").getTime()
        ); // 当前时间戳
        var end = parseInt(new Date(search.endText + " 23:59:00").getTime());
        this.startDate = timestamp;
        this.endDate = end;
      }

      // document.write(timestamp);
      this.filterVis = !this.filterVis;
      this.$closeFull();
      if (search.orgName || search.createUser) {
        this.getCustomerbyuser(search.orgName, search.createUser);
        return; //不在此处搜索
      }
      this.nameList = []; //不搜索姓名的时候不保存搜索姓名信息
      this.searchList();
    },
    indexEdit() {
      this.$cache.set(this.$cacheEnum["list"], this.userList);
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
      if (this.nameList.length > 0) {
        this.sList = this.nameList;
      } else this.sList = this.userList;
      if (this.searchText) {
        this.sList = this.sList.filter(
          p => p.cName.indexOf(this.searchText) > -1 || p.uCardNum == this.text
        );
      }
      if (this.startDate) {
        this.sList = this.sList.filter(p => {
          let cr = parseInt(p.createdOnUTC);
          return cr > this.startDate && cr < this.endDate;
        });
      }
      if (this.upStatus > -1) {
        this.sList = this.sList.filter(p => p.isExport == this.upStatus);
      }
      this.count = this.sList.length;
      // alert();
      // document.write(JSON.stringify(this.sList[0]))
      console.log(this.sList);
    },
    opotion(item) {
      this.upStatus = item.id;
    },
    getCustomerbyuser(orgName, webName) {
      window["getcustomerbyuser"] = this.getCustomerUserSuccess;
      this.$native.run(
        "getcustomerbyuser",
        { institutionName: orgName, webNickName: webName },
        "getcustomerbyuser"
      );
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
      this.$toast("扫描失败");
    },
    ocrSuccess(data) {
      const res = JSON.parse(data);
      // this.addUser.cName = res.Name.value;

      //清空搜索条件
      this.setPar();
      this.searchText = res.Name.value;
      this.searchList();
    },
    setPar() {
      this.searchText = "";
      this.search.createUser = "";
      this.search.orgName = "";
      this.search.startText = "";
      this.search.endText = "";
    }
  },
  beforeDestroy() {
    window["appBackCall"] = function() {
      return true;
    };
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
</style>
<style lang="less">
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
    background-color: #f2f2f2 !important;
    border-radius: 0 !important;
  }
}
</style>
 