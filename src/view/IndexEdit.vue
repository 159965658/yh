<template>
<div style="height: 100%;background: #f3f6fc;">
    <app-header :ltitle='"后退"' :ctitle='"首页编辑"'></app-header>
    <div class="center-content ">
        <div class="total clearfix">
            <p>当前共有数据：<span>{{cardList.length}}</span></p>
            <ol class="to-btns clearfix">
                <li><i class="icon icon-shangchuan"></i>上传 <span>{{selectedCount}}</span></li>
                <li><i class="icon icon-daochu"></i>导出</li>
                <li class="bor-h" @click="delSubmit"><i class="icon icon-shanchu"></i>删除</li>
                <li class="bor-h" @click="allSelect"><i class="radio-btn " :class="{active:isAll}"></i>全选</li>
            </ol>
        </div>
        <div class="card_area">
            <ul class="card clearfix">
                <!--默认卡片样式-->
                <card  v-for="(item,index) in cardList" @selectedClick= 'childSelect' :edit='true' :key="index" :item="item" :selected='item.seletedCard'>
                    
                </card>
                
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import card from "@/components/card";
import FullTipsVue from "../components/FullTips.vue";
export default {
  components: {
    card
  },
  data() {
    return {
      userList: {},
      cardList: [],
      cardListCopy: [],
      isAll: false,
      selectedCount: 0
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
      list.forEach(element => {
        console.log(element);
        element.seletedCard = selected;
        this.setCount(element.seletedCard);
      });
      return list;
    },
    childSelect(item) {
      this.setCount(item.seletedCard);
    },
    setCount(is = false) {
      if (is) {
        //选中数量
        this.selectedCount = this.selectedCount + 1;
      } else {
        this.selectedCount = this.selectedCount
          ? this.selectedCount - 1
          : this.selectedCount;
      }
      //选中全选
      if (this.cardList.length && this.selectedCount >= this.cardList.length)
        this.isAll = true;
      else {
        this.isAll = false;
      }
    },
    delSubmit() {
      $vm.$on("submit", this.updata);
      this.$toastFull(FullTipsVue, true, {
        title: "提示",
        text: "确认要删除客户信息吗？",
        canText: "取消",
        subText: "确认"
      });
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
    updateSuccess() {}
  },
  beforeDestroy() {
    $vm.$off("submit", this.updata);
  }
};
</script>

<style lang="less" scoped>
.center-content {
  width: 1740px;
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
