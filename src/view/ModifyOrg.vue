<template>
   <div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>机构名称</p>
            <p class="dialog-c">
               <input type="text" v-model="orgName" :placeholder="orgName">
            </p>
        </slot>
        <div class="dialog-btn" style="padding-top:50px">
            <button class="btn-default btn-can" @click="$closeFull">取消</button>
            <button class="btn-default btn-next" @click="nextHref">确认</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      orgName: ""
    };
  },
  methods: {
    nextHref() {}
  }
};
</script>

<style lang="less" scoped>
input {
  height: 80px;
  border: none;
  border: 1px solid #dcdcdc;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 0 10px;
  width: 560px;
  font-size: inherit;
  margin-top: 60px;
}
</style>

