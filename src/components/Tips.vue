<template>
<div v-show="visible" class="dialog-tips dialog-center">
    <div class="">{{message}}</div>
  
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
  },
  
};
</script>

<style lang="less" scoped>
.dialog-tips {
  position: fixed;
  z-index: 1000;
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
  transform: translate(-50%, -50%);
}

</style>
