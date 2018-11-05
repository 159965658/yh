<template>
<li class="default">
    <div class="bg">
        <ol class="message">
            <li class="name">{{item.cName}}</li>
            <li class="sex">{{item.sex | sex}}</li>
            <li class="age">{{item.birth | birth}}岁</li>
        </ol>
        <p class="nums">{{item.uCardNum}}</p>
        <ol class="btns clearfix">
            <li v-if="item.isUpload">已上传</li>
            <li v-if="item.isExport">已导出</li>
            <!-- <li v-if="item.isExport">已导出</li> -->
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
      this.$cache.set(this.$cacheEnum["cardModel"], item);
      this.$router.push("/seefile");
    },
    nextiden(item) {
      // if (item.haveReport == 1 || item.haveGwreport == 1) {
      //   this.$toastFull('')
      // }
      this.$cache.set(this.$cacheEnum["cardModel"], item);
      this.$router.push("/identification");
    }
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
</style>

<style lang="less">
.card {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
</style>

