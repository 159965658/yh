<template>
<div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>提示</p>
            <p class="dialog-c">
                辨识结果异常（所有体质皆未超过基准线线），是否重新辨识？
            </p>
        </slot>
        <div class="dialog-btn" >
            <button class="btn-default btn-can" @click="close">首页</button>
            <button class="btn-default btn-next"  @click="nextHref">重新辨识</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$closeFull();
      $vm.$router.replace("/index");
    },
    nextHref() {
      // this.$cache.set(this.$cacheEnum["cardModel"], this.addUser);
      this.$closeFull();
    //   this.$cache.remove(this.$cacheEnum.user);
      $vm.$router.replace("/Identification");
    }
  }
};
</script>

<style lang='less' scoped>
.dialog-btn {
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
}
</style>
