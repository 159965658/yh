<template>
    <div class="index-page">
    	<div style="width: 100%;height: 100px;">
    		<div style="width: 100px;height: 50px; background:red;float: left;">
    			测试div
    		</div>
    		<div style="float: left;">
    			<Select v-on:opotion="opotion" :opotionList='opotionList'></Select>
    		</div>
    	</div>
		<left-nav></left-nav>
       <router-view></router-view>
		
    </div>
    
</template>
<script>

//左边菜单
import LeftNav from "./IndexNav";
import Select from "../components/Select"

export default {
  data(){
  	return{
		opotionList:['按钮-1','按钮-2','按钮-3','按钮-4']
  	}
  },
  components: {
    LeftNav,
    Select
  },
 methods:{
  opotion(opotion) {
   alert(opotion)
  }
}
};
</script>
<style lang="less" scoped>

</style>
