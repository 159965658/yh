<template>
<div class="select">
  <div class="select_click_box" >
    <p>{{msg}}</p>
    <span @click='updateMySelect' v-show='!selectBool'>V</span>
  </div>
  <div class="my_select" v-show='selectBool'>
   <ul class="select_box">
     <li class="opotion" @click='updateOpotion(index)' v-for='(opotion,index) in data'>{{opotion}}</li>
   </ul>
</div>
</div>

</template>

<script>
export default {
  data() {
    return {
      selectBool:false,
      msg:'',
      data:['下拉菜单一','下拉菜单二','下拉菜单三','下拉菜单四']
    };
  },
  props:['opotionList'],
  methods:{
    updateMySelect() {
      this.selectBool = !this.selectBool;
    },
    updateOpotion(index) {
      this.selectBool = !this.selectBool;
      this.msg = this.data[index];
      this.$emit('opotion', this.msg)
    }
  },
  mounted(){
    if(this.opotionList.length > 0){
      this.data = this.opotionList;
    }
  }
};
</script>

<style lang="less" scoped>
  .select{
    width: 400px;
    position: relative;
    .select_click_box{
      width: 100%;
      height: 50px;
      position: relative;
      border:1px solid #333;
      >span{
        position: absolute;
        right: 0;
        top: 0;
      }
      >p{
        float: left;
      }
    }
    .select_click_box:hover{
      border:1px solid #afdcf3 !important;
    }
    .my_select{
      width: 100%;
      border: 1px solid #afdcf3 !important;
      .select_box{
        .opotion{
          width: 100%;
          line-height: 50px;
        }
        .opotion:hover{
            background-color: #afdcf3;
          }
      }
    }
  }
  

</style>