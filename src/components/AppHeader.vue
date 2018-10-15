<template>
    <div class="app-header">
        <div class="left" :class="{'icon-back':ltitle}" @click='back'><slot name='left'></slot></div>
        <div class="center">{{ctitle}}</div>
        <div class="right" @click="rClick">{{rtitle}}</div>
    </div>
</template>
<script>
import newUser from "./FullTips";
export default {
  props: {
    ctitle: {
      type: String,
      default: ""
    },
    rtitle: {
      type: String,
      default: ""
    },
    ltitle: {
      type: String,
      default: ""
    },
    type: {
      type: Number,
      default: 0
    }
  },
  methods: {
    rClick() {
      if (this.type == 1) {
        this.$toastFull(newUser);
      }
    },
    back() {
      $appBack();
    }
  }
};
</script>
<style lang="less" scoped>
.app-header {
  // display: flex;
  justify-content: space-between;
  height: 88px;
  line-height: 88px;
  align-items: center;
  position: relative;
  color: #282828;
  padding: 0px 20px;
  background-color: #fff;
  font-size: 38px;
  // padding-top: 54px;
  // background-color: red;
  .center {
    margin: 0 auto;
    float: left;
    width: 80%;
    text-align: center;
  }
  .right {
    position: absolute;
    right: 78px;
    font-size: 36px;
    width: 10%;
    float: left;
  }
  .left {
    width: 10%;
    white-space: nowrap;
    float: left;
  }
  .icon-back {
    background: url("./../assets/back.png") no-repeat center;
    background-size: 80%;
    width: 80px;
    height: 80px;
  }
}
</style>
