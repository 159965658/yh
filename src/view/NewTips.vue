<template>
  <div class="dialog-div">
    <div class="dialog-body">
      <slot name="body">
        <p>提示</p>
        <p class="dialog-c">{{text}}</p>
      </slot>
      <div class="dialog-btn cen">
        <button class="btn-default btn-next" v-if="type == 1" @click="close">{{ltitle}}</button>
        <button class="btn-default btn-next" @click="nextHref">{{stitle}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "ltitle", "type", "stitle"],
  methods: {
    close() {
      this.$closeFull();
      $vm.$router.push("/index");
    },
    nextHref() {
      // this.$cache.set(this.$cacheEnum["cardModel"], this.addUser);
      this.$closeFull();
      const user = this.$cache.getUser();
      // this.$cache.set(this.$cacheEnum["cardModel"], item);
      if (user.crowdFlag == 0) {
        $vm.$router.replace("/Identification");
        return;
      }
      // alert(user.crowdFlag);
      $vm.$router.push("/answer?type=" + user.crowdFlag);
      // this.$router.push("/answer?type=" + user.crowdFlag);
    }
  }
};
</script>

<style lang='less' scoped>
.dialog-btn {
  padding-top: 80px;
  > button {
    margin-left: 20px;
  }
}
.cen {
  justify-content: space-between !important;
}
</style>
