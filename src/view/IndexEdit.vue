<template>
<div style="height: 100%;background: #f3f6fc;">
    <app-header :ltitle='"后退"' :ctitle='"首页编辑"'></app-header>
    <div class="center-content ">
        <div class="total clearfix">
            <p>当前共有数据：<span>{{cardList.length}}</span></p>
            <ol class="to-btns clearfix">
                <li @click="updateData"><i class="icon icon-shangchuan"></i>上传 <span>{{selectedCount}}</span></li>
                <li @click="exportDataToast"><i class="icon icon-daochu"></i>导出</li>
                <li class="bor-h" @click="delSubmit"><i class="icon icon-shanchu"></i>删除</li>
                <li class="bor-h" @click="allSelect"><i class="radio-btn " :class="{active:isAll}"></i>全选</li>
            </ol>
        </div>
        <div class="card_area">
            <ul class="card clearfix" v-if="cardList.length">
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
      updataCount: 0
    };
  },
  mounted() {
    this.userList = this.$cache.getUser();
    // this.cardList = ;
    const list = this.changeSetList(this.$cache.get(this.$cacheEnum["list"]));
    this.cardList = list;
  },
  methods: {
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
        console.log(element);
        if (selected) this.selectedCount++;
        element.seletedCard = selected;
        // this.setCount(selected);
      });
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
      if (this.cardList.length && this.selectedCount >= this.cardList.length)
        this.isAll = true;
      else {
        this.isAll = false;
      }
    },
    delSubmit() {
      if (this.selectedCount > 0) {
        $vm.$off("submit");
        $vm.$on("submit", this.updata);
        this.$toastFull(FullTipsVue, true, {
          title: "提示",
          text: "警告：被删除的内容无法恢复。是否继续？",
          canText: "取消",
          subText: "确认"
        });
      } else {
        this.$toast("请您选中数据");
      }
    },
    updata() {
      window["updatecustomer"] = this.updateSuccess;
      this.cardList.forEach(item => {
        if (item.seletedCard) {
          item.isDelete = 1;
          this.$native.run("updatecustomer", item, "updatecustomer");
        }
      });
      $appBack();
    },
    updateSuccess() {},
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
    updateDataSub() {
      window["uploadcustomer"] = this.updateDataSuccess;
      window["errorUp"] = this.errorUp;
      try {
        // this.$native.loadShow();
        Indicator.open({
          text: "正在上传数据...",
          spinnerType: "fading-circle"
        });
        this.cardList.forEach(item => {
          if (item.seletedCard) {
            // item.isDelete = 1;
            this.$native.run(
              "uploadcustomer",
              item,
              "uploadcustomer",
              "errorUp"
            );
          }
        });
      } catch (error) {
        alert(error);
      }
    },
    errorUp(error) {
      Indicator.close();
      this.$toast(error);
    },
    updateDataSuccess() {
      // try {
      //  this.$native.loadHide();
      this.updataCount++;
      if (this.updataCount >= this.selectedCount) {
        console.log("关闭");
        setTimeout(() => {
          Indicator.close();
          this.$toast("操作成功");
          $appBack();
        }, 100);
        this.updataCount = 0;
      }
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
        Indicator.open({
          text: "正在导出数据...",
          spinnerType: "fading-circle"
        });
        setTimeout(() => {
          window["exportcustomer"] = this.updateDataSuccess;

          window["errorUp"] = this.errorUp;
          //  this.$native.loadShow();
          this.cardList.forEach(item => {
            if (item.seletedCard) {
              // item.isDelete = 1;
              this.$native.run(
                "exportcustomer",
                item,
                "exportcustomer",
                "errorUp"
              );
            }
          });
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
