<template>
    <div class="index-page">
		<left-nav></left-nav>
       <router-view></router-view>
		
    </div>
    
</template>
<script>
//左边菜单
import LeftNav from "./IndexNav";
import Select from "../components/Select";

export default {
  data() {
    return {
      opotionList: ["按钮-1", "按钮-2", "按钮-3", "按钮-4"]
    };
  },
  components: {
    LeftNav,
    Select
  },
  methods: {
    opotion(opotion) {
      alert(opotion);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
