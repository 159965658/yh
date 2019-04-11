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
import FullTipsVue from "../components/FullTips.vue";
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
      const item = this.$cache.get(this.$cacheEnum["cardModel"]);
      if (item.haveGwreport == 1 || item.haveReport == 1) {
        $vm.$off("submitTiZhi", this.submitTiZhi);
        $vm.$on("submitTiZhi", this.submitTiZhi);
        this.$toastFull(FullTipsVue, true, {
          title: "体质辨识",
          text: "本年已有体质辨识记录，是否再次辨识？",
          subText: "确定",
          canText: "取消",
          submitEmit: "submitTiZhi",
          callBack: this.callBack
        });
        return;
      }
      this.submitTiZhi();
    },

    callBack() {
      console.log('关闭回调');
      $vm.$router.replace("/index");
    },
    submitTiZhi() {
      const user = this.$cache.getUser();
      // this.$cache.set(this.$cacheEnum["cardModel"], item);
      if (user.crowdFlag == 0) {
        $vm.$router.replace("/Identification");
        return;
      }
      // alert(user.crowdFlag);
      $vm.$router.push("/answer?type=" + user.crowdFlag);
    }
  },
  beforeDestroy() {
    $vm.$off("submitTiZhi", this.submitTiZhi);
  }
};
</script>

<style lang="less" scoped>
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
