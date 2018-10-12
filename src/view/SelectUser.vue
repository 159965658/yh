<template>
   <div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>机构名称</p>
            <p class="dialog-c">
              j
            </p>
        </slot>
        <div class="dialog-btn" style="padding-top:50px">
            <button class="btn-default btn-can" @click="$closeFull">取消</button>
            <button class="btn-default btn-next" @click="save">确认</button>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  methods: {
    save() {
      this.$closeFull();
      $vm.$emit("selectUser");
    }
  }
};
</script>

<style lang='less' scoped>
</style>
