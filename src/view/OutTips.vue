<template>
<div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>退出登录</p>
            <p class="dialog-c">
                是否退出当前登录用户
            </p>
        </slot>
        <div class="dialog-btn" >
            <button class="btn-default btn-can" @click="close">取消</button>
            <button class="btn-default btn-next"  @click="nextHref">确定</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$closeFull();
    },
    nextHref() {
      // this.$cache.set(this.$cacheEnum["cardModel"], this.addUser);
      this.$closeFull();
      this.$cache.remove(this.$cacheEnum.user);
      $vm.$router.replace("/login");
    }
  }
};
</script>

<style lang='less' scoped>
.dialog-btn {
  padding-top: 80px;
  display: flex;
  justify-content:space-between;
}
</style>
