<template>
<div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>{{title}}</p>
            <p class="dialog-c" v-html="text">
                <!-- {{text}} -->
            </p>
        </slot>
        <div class="dialog-btn" style="">
            <button class="btn-default btn-can" @click="close">{{canText}}</button>
            <button class="btn-default btn-next" @click="nextHref">{{subText}}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // isShow: false
      title: "创建新用户",
      text: "创建新账户时需要验证当前设备激活码，是否继续下一步？",
      subText: "继续",
      canText: "取消",
      submitEmit: "submit",
      fl:0,
      s:''
      // callBack: this.close
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
      this.close();
      if (this.type == 1 && this.title == "创建新用户")
        $vm.$router.push("/verification");
      else if(this.fl == 1){
        console.log(1);
        this.s();
        // location.href = '/#/index'
      }
      else if(this.f1 == 2){
        this.s();
      }
      else {
        $vm.$emit(this.submitEmit);
        // this.callBack();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-btn {
  padding-top: 80px;
}
.dialog-div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  // z-index: 1000;
  > .dialog-body {
    width: 860px;
    text-align: center;
    // height: 458px;
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
      padding: 25px 25px;
      line-height: 60px;
    }
  }
}
</style>
