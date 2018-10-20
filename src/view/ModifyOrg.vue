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
    nextHref() {
      if (!this.orgName) {
        this.$toast("请填写机构名称");
        return;
      }
      let user = this.$cache.getUser();
      user.institutionName = this.orgName;
      window["chageOrg"] = this.chageOrg;
      // alert(JSON.stringify(user));
      this.$native.run("updateUser", user, "chageOrg");
    },
    chageOrg() {
      this.$closeFull();
      $vm.$emit("changeOrg", this.orgName);
    }
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

