<template>
    <div class="index-page">
		<left-nav></left-nav>
       <router-view></router-view>
		
    </div>
    
</template>
<script>

//左边菜单
import LeftNav from "./IndexNav";

export default {
  components: {
    LeftNav
  },
 
};
</script>
<style lang="less" scoped>

</style>
