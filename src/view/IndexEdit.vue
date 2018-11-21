<template>
<div style="height: 100%;background: #f3f6fc;">
    <app-header :ltitle='"后退"' :ctitle='"档案管理"'></app-header>
    <div class="center-content ">
        <div class="total clearfix">
            <p>当前共有数据：<span>{{count}}</span></p>
            <ol class="to-btns clearfix">
                <li @click="updateData" class="updateData"><i class="icon icon-shangchuan"></i>上传 <span>{{selectedCount}}</span></li>
                <li @click="exportDataToast"><i class="icon icon-daochu"></i>导出</li>
                <li class="bor-h" @click="delSubmit"><i class="icon icon-shanchu"></i>删除</li>
                <li class="bor-h" @click="allSelect"><i class="radio-btn " :class="{active:isAll}"></i>全选</li>
            </ol>
        </div>
        <div class="card_area">
            <ul class="card clearfix"  v-infinite-scroll="loadMore" infinite-scroll-immediate-check='flase' infinite-scroll-disabled="loading" infinite-scroll-distance="300"  v-if="count > 0">
                <!--默认卡片样式-->
                <card v-for="(item,index) in cardList" @selectedClick='childSelect' :edit='true' :key="index" :item="item" :selected='item.seletedCard'>

                </card>

            </ul>
            <data-null v-else></data-null>
        </div>
    </div>
</div>
</template>

<script>
import card from "@/components/card";
import FullTipsVue from "../components/FullTips.vue";
import dataNull from "../components/DataNull.vue";

import { Indicator } from "mint-ui";
export default {
  components: {
    card,
    dataNull
  },
  data() {
    return {
      userList: {},
      cardList: [],
      cardListCopy: [],
      isAll: false,
      selectedCount: 0,
      updataCount: 0,
      $Indicator: Indicator,
      start: 0,
      num: 50,
      count: 0,
      loading: true
    };
  },
  mounted() {
    this.userList = this.$cache.getUser();
    this.$Indicator = Indicator;
    // this.cardList = ;
    this.getCustomer();
  },
  methods: {
    loadMore() {
      if (this.count == 0) return;
      this.loading = true; //禁止加载
      this.getCustomer();
    },
    getCustomer() {
      //获取用户信息
      // alert(this.cacheUser.userCode);
      window["getCustomerSuccess"] = this.getCustomerSuccess;
      window["getCustomerError"] = this.getCustomerError;
      this.$native.run(
        "getcustomer",
        {
          userCode: this.userList.userCode,
          start: this.start * this.num,
          num: this.num
        },
        "getCustomerSuccess",
        "getCustomerError"
      );
    },
    getCustomerError() {},
    getCustomerSuccess(data) {
      // alert(data);
      data = JSON.parse(data);
      let res = data.customerInfoList;
      // this.userList = res;

      const list = this.changeSetList(res, this.isAll);
      if (this.start == 0) {
        this.cardList = list;
      } else {
        this.cardList = this.cardList.concat(list);
      }
      this.count = data.total;
      //没有下一页了
      if (list.length < this.num) {
        return;
      }
      //加载下一页做准备
      this.start++;
      this.loading = false;
      return list;
    },
    allSelect() {
      this.isAll = !this.isAll;
      //if (this.isAll) {
      //全选
      this.changeSetList([], this.isAll);
      //}
    },
    changeSetList(list = [], selected = false) {
      if (list.length == 0) list = this.cardList;
      this.selectedCount = 0;
      list.forEach(element => {
        if (selected) this.selectedCount++;
        element.seletedCard = selected;
        // this.setCount(selected);
      });
      if (selected) {
        this.selectedCount = this.count;
      }
      return list;
    },
    childSelect(item) {
      this.setCount(item.seletedCard);
    },
    setCount(is = false) {
      console.log(is);
      if (is) {
        //选中数量
        this.selectedCount = this.selectedCount + 1;
      } else {
        if (this.selectedCount > 0) this.selectedCount--;
      }
      //选中全选
      // if (this.cardList.length && this.selectedCount >= this.cardList.length)
      //   this.isAll = true;
      // else {
      this.isAll = false;
      // }
    },
    delSubmit() {
      if (this.selectedCount > 0) {
        $vm.$off("submit");
        $vm.$on("submit", this.updata);
        this.$toastFull(FullTipsVue, true, {
          title: "提示",
          text:
            "<p class='my-waring'>警告：被删除的内容无法恢复。<br/>是否继续？</p>",
          canText: "取消",
          subText: "确认"
        });
      } else {
        this.$toast("请您选中数据");
      }
    },
    updata() {
      window["editcustomer"] = this.updateSuccess;
      const indexList = this.newEditcustomer();
      this.$native.run(
        "editcustomer",
        { operation: "delete", indexList: indexList },
        "editcustomer"
        //"editcustomerError"
      );
      // this.cardList.forEach(item => {
      //   if (item.seletedCard) {
      //     item.isDelete = 1;
      //     this.$native.run("updatecustomer", item, "updatecustomer");
      //   }
      // });
      $appBack();
    },
    updateSuccess() {
      this.$toast("删除成功");
    },
    updateData() {
      if (this.selectedCount == 0) {
        this.$toast("请您先选中数据");
        return;
      }
      $vm.$off("submit");
      $vm.$on("submit", this.updateDataSub);
      this.$toastFull(FullTipsVue, true, {
        title: "提示",
        text: `您选中了${this.selectedCount}条数据，确认要上传吗？`,
        canText: "取消",
        subText: "确认"
      });
    },
    newEditcustomer(type) {
      let indexList = [],
        max = 0;
      this.cardList.forEach((item, i) => {
        if (item.seletedCard) {
          indexList.push(i); //添加已知数据
        }
        max = i; //记录最大index
      });
      if (max < this.count) {
        //如果最大index 小于 最大条数 查看是否是全选
        if (this.isAll) {
          //如果全选 赋值
          for (let k = max; k < this.count; k++) {
            indexList.push(k);
          }
        }
      }
      if (type == "upload") {
        window["editcustomer"] = this.editcustomerSuccess;
        window["editcustomerError"] = this.editcustomerError;
        this.$native.run(
          "editcustomer",
          { operation: type, indexList },
          "editcustomer",
          "editcustomerError"
        );
      }
      return indexList;
      // console.log(indexList);
    },
    editcustomerError() {
      this.errorUpload(data);
    },
    editcustomerSuccess() {
      this.updateDataSuccess();
    },
    updateDataSub() {
      // window["uploadcustomer"] = this.updateDataSuccess;
      // window["errorUpload"] = this.errorUpload;
      // console.log(this.$Indicator);
      this.$Indicator.open({
        text: "正在上传数据...",
        spinnerType: "fading-circle"
      });
      this.newEditcustomer("upload");
      // return;
      // try {
      //   // this.$native.loadShow();

      //   this.cardList.forEach(item => {
      //     if (item.seletedCard) {
      //       // item.isDelete = 1;
      //       this.$native.run(
      //         "uploadcustomer",
      //         item,
      //         "uploadcustomer",
      //         "errorUpload"
      //       );
      //     }
      //   });
      // } catch (error) {
      //   alert(error);
      // }
    },
    errorUpload(error) {
      // console.log(Indicator);
      setTimeout(() => {
        this.$Indicator.close();
        Indicator.close();
      }, 5);
      this.$toast(error);
    },
    errorUp(error) {
      Indicator.close();
      this.$toast(error);
    },
    updateDataSuccess() {
      // try {
      //  this.$native.loadHide();
      // this.updataCount++;
      // if (this.updataCount >= this.selectedCount) {
      //   console.log("关闭");
      setTimeout(() => {
        setTimeout(() => {
          this.$Indicator.close();
          Indicator.close();

          $appBack();
        }, 5);
        this.$toast("操作成功");
      }, 100);
      //   this.updataCount = 0;
      // }
      // } catch (error) {
      //   this.$native.loadHide();
      //   alert(error);
      // }
    },
    exportDataToast() {
      if (this.selectedCount == 0) {
        this.$toast("请您先选中数据");
        return;
      }
      if (window.$indexExport) {
        this.$toast("档案导出任务正在进行中，请稍后再试");
        return;
      }
      $vm.$off("submit");
      $vm.$on("submit", this.exportData);
      this.$toastFull(FullTipsVue, true, {
        title: "提示",
        text: `您选中了${this.selectedCount}条数据，确认要导出吗？`,
        canText: "取消",
        subText: "确认"
      });
    },
    exportData() {
      try {
        // Indicator.open({
        //   text: "正在导出数据...",
        //   spinnerType: "fading-circle"
        // });
        this.$toast("开始进行档案导出任务，请勿重复操作");
        window.$indexExport = true;
        const arr = this.newEditcustomer();
        setTimeout(() => {
          // window["editcustomer"] = this.editcustomerSuccess;
          // window["editcustomerError"] = this.editcustomerError;
          window["editcustomer"] = window.exportDataSuccess;
          window["editcustomerError"] = window.errorUp;

          this.$native.run(
            "editcustomer",
            { type: "export", indexList: arr },
            "editcustomer",
            "errorUp"
          );
        }, 1000);
      } catch (error) {
        alert(error);
        Indicator.close();
      }
    }
  },
  beforeDestroy() {
    $vm.$off("submit", this.updata);
    $vm.$off("submit", this.updateDataSub);
    Indicator.close();
  }
};
</script>

<style lang="less" scoped>
.center-content {
  width: 2640px;
  margin: 0 auto;
}

.total {
  padding-top: 32px !important;
  margin-bottom: 36px !important;
}

.total p {
  float: left;
  line-height: 80px;
}

ol.to-btns {
  float: right;
}

.updateData {
  width: 280px !important;
}
ol.to-btns li {
  float: left;
  width: 240px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #3ba6dd !important;
  border-radius: 10px;
  margin-left: 50px;
  color: #989898;
  font-size: 32px;
  line-height: 82px;
}
ol.to-btns li.bor-h {
  border: 1px solid #ff9e35 !important;
}

ol.to-btns li span {
  height: 34px;
  background: #ff9e35;
  border-radius: 50%;
  color: #fff !important;
  font-size: 30px;
  padding: 0 8px;
}

ol.to-btns li i {
  float: left;
  margin-left: 56px;
  margin-top: 20px;
  margin-right: 18px;
  position: initial !important;
}

.card_area,
.total {
  padding-left: 10px;
}

// .card_area ul.card > li:nth-child(4n) {
//   margin: 0;
// }

.card_area ul.card > li {
  position: relative;
}

.radio-btn {
  width: 40px;
  height: 40px;
  background: url(../assets/111.png) no-repeat;
  background-size: 100%;
}

.card_area ul.card > li .radio-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
}

.radio-btn.active {
  background: url(../assets/222.png) no-repeat;
  background-size: 100%;
}
</style>
