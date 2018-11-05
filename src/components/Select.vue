<template>
<div class="select">
  <div class="select_click_box" @click='updateMySelect' >
    <p>{{msg}}</p>
   
    <span  class="icon arrow" v-show='!selectBool'></span>
  </div>
  
  <div class="my_select" v-show='selectBool'>
   <ul class="select_box">
     <li class="opotion" @click='updateOpotion(opotion)' :key="index" v-for='(opotion,index) in opotionList'>{{opotion.name}}</li>
   </ul>
</div>
</div>

</template>

<script>
export default {
  data() {
    return {
      selectBool: false,
      msg: "",
      data: []
    };
  },
  props: ["opotionList", "id"],
  watch: {
    id() {
      this.msg = this.opotionList.find(p => p.id == this.id).name;
    }
  },
  methods: {
    updateMySelect() {
      this.selectBool = !this.selectBool;
    },
    updateOpotion(index) {
      this.selectBool = !this.selectBool;
      this.msg = index.name;
      this.$emit("opotion", index);
    },
    chageEmit(id) {
      console.log(id);
      let model = this.opotionList.find(p => p.id == id);
      if (!model) return;
      console.log(model);
      this.msg = model.name;
      //不发送事件通知
    }
  },
  mounted() {
    setTimeout(() => {
      $vm.$on("selectChange", this.chageEmit);
    }, 1);
    if (this.opotionList.length > 0) {
      this.data = this.opotionList;
      // console.log(this.data.find(p => p.id == this.id),this.id);
      if (this.id) {
        const model = this.opotionList.find(p => p.id == this.id);
        if (model) this.msg = model.name;
      } else {
        this.msg = this.opotionList[0].name;
      }
    }
  },
  beforeDestroy() {
    $vm.$off("selectChange", this.chageEmit);
  }
};
</script>

<style lang="less" scoped>
.select {
  width: 190px;
  display: inline-block;
  position: relative;
  z-index: 3;
  float: left;
  .select_box {
    max-height: 400px;
    overflow-y: scroll;
  }
  .select_click_box {
    width: 100%;
    height: 70px;
    border-radius: 20px;
    position: relative;
    background-color: #fff;
    line-height: 70px;
    vertical-align: middle;
    border: 1px solid #333;
    > span {
      position: absolute;
    }
    > p {
      float: left;
      padding-left: 8px;
    }
  }
  // .select_click_box:hover {
  //   border: 1px solid #afdcf3 !important;
  // }
  .my_select {
    width: 100%;
    border: 1px solid #afdcf3 !important;
    background-color: #fff;
    border-radius: 20px;
    position: absolute;
    border-top: 0px;
    .select_box {
      .opotion {
        // width: 100%;
        line-height: 50px;
        padding: 20px;
        border-radius: 20px;
      }
      .opotion:hover {
        background-color: #afdcf3;
      }
    }
  }
}
.arrow {
  position: absolute;
  width: 26px;
  height: 16px;
  background-size: 100%;
  right: 25px;
  top: 25px;
}
</style>