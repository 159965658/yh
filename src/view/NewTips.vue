<template>
<div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>提示</p>
            <p class="dialog-c">
                {{text}}
            </p>
        </slot>
        <div class="dialog-btn" :class="{cen:type == 0}">
            <button class="btn-default btn-next" v-if="type == 1" @click="close">{{ltitle}}</button>
            <button class="btn-default btn-next"  @click="nextHref">{{stitle}}</button>
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
      $vm.$router.replace("/Identification");
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
  justify-content: center !important;
}
</style>
