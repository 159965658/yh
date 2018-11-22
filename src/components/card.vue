<template>
<li class="default">
    <div class="bg">
        <ol class="message">
            <li class="name flowell">{{item.cName}}</li>
            <li class="sex">{{item.sex | sex}}</li>
            <li class="age">{{item.birth | birth}}岁</li>
        </ol>
        <p class="nums">{{item.uCardNum}}</p>
        <ol class="btns">
            <li v-if="item.isUpload == 1">已上传</li>
            <li v-if="item.isExport == 1">已导出</li>
            <li v-if="item.haveGwreport == 1 ||  item.haveReport == 1">已辨识</li>
        </ol>
    </div>
    <!-- <router-link to="/identification" tag="button">开始辨识</router-link> -->
    <button @click="nextiden(item)">开始辨识</button>
    <!-- <router-link to="/seefile" tag="button">查看档案</router-link> -->
    <button @click="seeFile(item)">查看档案</button>

    <!-- 单选 选中 -->
    <div class="radio-btn" v-if="edit" :class="{active:selected}" @click="seletedCard($event,item)"></div>
</li>
</template>

<script>
import FullTipsVue from "./FullTips.vue";
export default {
  props: ["item", "edit", "selected"],
  methods: {
    seletedCard(e, item) {
      console.log(e, item);
      let dom = $(e.target);
      if (dom.attr("class").indexOf("active") > -1) {
        dom.removeClass("active");
      } else {
        dom.addClass("active");
      }
      if (item.seletedCard) {
        item.seletedCard = false;
      } else {
        item.seletedCard = true;
      }
      this.$emit("selectedClick", item);
    },
    seeFile(item) {
       if (this.edit) {
        return;
      }
      this.$cache.set(this.$cacheEnum["cardModel"], item);
      this.$router.push("/seefile");
    },
    nextiden(item) {
      // if (item.haveReport == 1 || item.haveGwreport == 1) {
      //   this.$toastFull('')
      // }
      if (this.edit) {
        return;
      }
      this.$cache.set(this.$cacheEnum["cardModel"], item);
      if (item.haveGwreport == 1 || item.haveReport == 1) {
        $vm.$off("submitTiZhi", this.submitTiZhi);
        $vm.$on("submitTiZhi", this.submitTiZhi);
        this.$toastFull(FullTipsVue, true, {
          title: "体质辨识",
          text: "本年已有体质辨识记录，是否再次辨识？",
          subText: "确定",
          canText: "取消",
          submitEmit: "submitTiZhi"
        });
        return;
      }
      this.submitTiZhi();
    },
    submitTiZhi() {
      const user = this.$cache.getUser();
      // this.$cache.set(this.$cacheEnum["cardModel"], item);
      if (user.crowdFlag == 0) {
        this.$router.push("/identification");
        return;
      }
      // alert(user.crowdFlag);
      this.$router.push("/answer?type=" + user.crowdFlag);
    }
  },
  beforeDestroy() {
    $vm.$off("submitTiZhi", this.submitTiZhi);
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
.message {
  display: flex;
  justify-content: start;
  align-items: center;
  > li {
    flex: 1 auto;
  }
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
.btns {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<style lang="less">
.card {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
</style>

