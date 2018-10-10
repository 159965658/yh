<template>
    <div v-show="visible" v-bind:class="{ 'full': type==1}" class="dialog-tips dialog-center">
       <div>{{message}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      type: 0
    };
  }
};
</script>
<style lang="less" scoped>
.dialog-tips {
  position: fixed;
  z-index: 100;
  min-width: 220px;
  padding: 40px 40px;
  white-space: nowrap;
  background-color: #fff;
  box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: #fff;
  .dialog-tips-icon {
    width: 54px;
    height: 54px;
    // @extend %bg-contain;
    display: inline-block;
    margin-bottom: 13px;
  }
}
.dialog-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}
.full {
  width: 100%;
  height: 100%;
  z-index: 101;
  position: fixed;
  top: 0px;
  left: 0px;
  transform: translate(-0%, -0%);
}
</style>
