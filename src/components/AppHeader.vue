<template>
    <div class="app-header">
        <div class="left">{{ltitle}}</div>
        <div class="center">{{ctitle}}</div>
        <div class="right">{{rtitle}}</div>
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
  position:relative;
  color: #282828;
  // padding-top: 54px;
  // background-color: red;
  .center{
    font-size:36px;
    margin:0 auto;
  }
  .right{
    position:absolute;
    right:78px;
    font-size: 36px;

  }
}
</style>
