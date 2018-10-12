<template>
     <div class="dialog-div">
        <div class="dialog-body">
            <slot name="body">
            <p>创建新账户</p>
            <p class="dialog-c">
                创建新账户时需要验证当前设备激活码，是否继续下一步？
            </p>
            </slot>
            <div class="dialog-btn" style="padding-top:50px">
                <button class="btn-default btn-can" @click="close">取消</button>
                <button class="btn-default btn-next" @click="nextHref">继续</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // isShow: false
    };
  },
  methods: {
    close() {
      // this.visible = false;
      this.$closeFull();
    },
    nextHref: function() {
      //console.log(this, $vm);
      // this.visible = false;
      if (this.type == 1) $vm.$router.push("/verification");
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  > .dialog-body {
    width: 860px;
    text-align: center;
    height: 458px;
    background-color: #fff;
    border-radius: 10px;
    color: #282828;
    padding: 30px 58px;
    letter-spacing: 5px;
    > .dialog-btn {
      height: 84px;
      display: flex;
      justify-content: space-between;
      > button {
        width: 380px;
      }
    }
    > .dialog-c {
      white-space: pre-line;
      color: #cfcfcf;
      font-size: 38px;
      padding: 0px 25px;
      line-height: 60px;
    }
  }
}
</style>
