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
  height: 117px;
  align-items: center;
  // padding-top: 54px;
  // background-color: red;
}
</style>
