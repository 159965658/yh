<template>
<div v-show="visible" v-bind:class="{ 'full': type==1}" class="dialog-tips dialog-center">
    <div class="" v-if="type==0">{{message}}</div>
    <div class="dialog-div" v-if="type==1">
        <div class="dialog-body">
            <p>创建新账户</p>
            <p class="dialog-c">
                创建新账户时需要验证当前设备激活码，是否继续下一步？
            </p>
            <div class="dialog-btn" style="padding-top:50px">
                <button class="btn-default btn-can" @click="close">取消</button>
                <button class="btn-default btn-next" @click="nextHref">继续</button>
            </div>
        </div>
    </div>
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
  methods: {
    close() {
      this.visible = false;
    },
    nextHref: function() {
      //console.log(this, $vm);
      this.visible = false;
      if (this.type == 1) $vm.$router.push("/verification");
    }
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
  transform: translate(-50%, -50%);
}

.full {
  width: 100%;
  height: 100%;
  z-index: 101;
  position: fixed;
  top: 0px;
  left: 0px;
  transform: translate(-0%, -0%);
  border-radius: 0px;

  > .dialog-div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    > .dialog-body {
      width: 860px;
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
}
</style>
