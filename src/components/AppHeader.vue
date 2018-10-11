<template>
    <div class="app-header">
        <div class="left" :class="{'icon-back':ltitle}" @click='back'></div>
        <div class="center">{{ctitle}}</div>
        <div class="right" @click="rClick">{{rtitle}}</div>
    </div>
</template>
<script>
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
        this.$toastFull("创建新账户");
      }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  height: 88px;
  line-height: 88px;
  align-items: center;
  position: relative;
  color: #282828;
  padding: 0px 20px;
  // padding-top: 54px;
  // background-color: red;
  .center {
    font-size: 36px;
    margin: 0 auto;
  }
  .right {
    position: absolute;
    right: 78px;
    font-size: 36px;
  }
  .left {
    background: url("./../assets/back.png") no-repeat center;
    background-size: 80%;
  }
  .icon-back {
    width: 80px;
    height: 80px;
  }
}
</style>
