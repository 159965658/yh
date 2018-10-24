<template>
<div style="height:100%">
    <app-header :ltitle='"后退"' :ctitle='"删除词条"'></app-header>
    <div class="center-content ">
        <div class="total clearfix">
            <p>当前共有数据：<span>1</span></p>
            <ol class="to-btns clearfix">
                <li class="bor-h" @click="delSubmit"><i class="icon icon-shanchu"></i>删除<span style="margin-left:5px;">{{count}}</span></li>
                <li class="bor-h"  @click="allSelect"><i class="radio-btn " :class="{active:all}"></i>全选</li>
            </ol>
        </div>
        <div class="right-list">
            <ul>
                <li v-for="(item,i) in baseList" :key="i" @click="activeHover(item)">
                    <span v-html="item.content"></span>
                    <i class="radio-btn list-icon" :class="{active:item.hover}"></i>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import FullTipsVue from "../components/FullTips.vue";
export default {
  data() {
    return {
      baseList: [],
      all: false,
      count: 0
    };
  },
  computed: {},
  mounted() {
    this.getCache();
  },
  methods: {
    getCache() {
      let list = this.$cache.getBase();
      list.forEach(item => {
        item.hover = false;
      });
      this.baseList = list;
    },
    allSelect() {
      this.all = !this.all;
      this.baseList.forEach(item => {
        console.log(item);
        item.hover = this.all;
      });
    },
    activeHover(item) {
      console.log(item);
      let count = 0;
      item.hover = !item.hover;
      this.baseList.forEach(item => {
        if (item.hover) {
          count++;
        }
      });
      if (count == this.baseList.length) {
        this.all = true;
      } else {
        this.all = false;
      }
      this.count = count;
    },
    delSubmit() {
      $vm.$on("submit", this.submit);
      this.$toastFull(FullTipsVue, true, {
        title: "提示",
        text: "确认要删除吗？",
        canText: "取消",
        subText: "确认"
      });
    },
    submit() {
      window["updateknowledge"] = this.updateSuccess;
      this.baseList.forEach(item => {
        if (item.hover) {
          item.isDelete = 1;
          this.$native.run("updateknowledge", { item }, "updateknowledge");
        }
      });
      $appBack();
      console.log("删除");
    },
    updateSuccess() {
      console.log("删除成功");
    }
  },
  beforeDestroy() {
    $vm.$off("submit", this.submit);
  }
};
</script>

<style lang="less" scoped>
.center-content {
  padding-left: 60px;
  padding-right: 60px;
  margin: 0 auto;
}

.list-icon {
  position: absolute;
  right: 20px;
  top: 10px;
}

.total {
  padding-top: 32px !important;
  margin-bottom: 36px !important;
  padding-right: 60px !important;
}

.total p {
  float: left;
  line-height: 80px;
}

.card_area,
.total {
  padding-left: 10px;
  padding-right: 10px;
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

.radio-btn {
  width: 40px;
  height: 40px;
  background: url(../assets/111.png) no-repeat;
  background-size: 100%;
  display: inline-block;
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

.right-list {
  height: calc(100% - 140px);
  overflow-y: auto;

  ul {
    li {
      box-shadow: -1px 1px 30px #cacaca;
      background: #ffffff;
      border-radius: 15px;
      padding: 85px 305px;
      margin-bottom: 35px;
      margin-right: 60px;
      text-align: center;
      position: relative;

      b {
        position: absolute;
        color: #ffffff;
        font-size: 28px;
        background: #00a6e7;
        padding: 0 15px;
        height: 44px;
        line-height: 44px;
        border-radius: 50px;
        left: 30px;
        top: 30px;
      }
    }
  }
}
</style>
