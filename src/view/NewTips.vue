<template>
<div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>提示</p>
            <p class="dialog-c">
                请选择您要执行的操作
            </p>
        </slot>
        <div class="dialog-btn" style="">
            <button class="btn-default btn-next" @click="close">首页</button>
            <button class="btn-default btn-next" @click="nextHref">进入体质识别报告</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$closeFull();
      $vm.$router.push("/index");
    },
    nextHref() {
      this.$closeFull();
      $vm.$router.replace("/Identification");
    }
  }
};
</script>

<style lang='less' scoped>
.dialog-btn {
  padding-top: 80px;
}
</style>
