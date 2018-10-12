<template>
    
        <div class="left-nav">
        	<dl class="head-img">
        		<dt><img src="../assets/index-wangyisheng.png"></dt>
        		<dd>王医生</dd>
        	</dl>
        	<ul>
                <router-link tag="li" replace to="/index/list" active-class="active" class="index"><i class="icon"></i>首页</router-link>
                <!-- <li class="active index"><i class="icon"></i>首页</li> -->
                  <router-link tag="li" replace to="/index/knowledge" active-class="active" class="zhishiku"><i class="icon"></i>知识库</router-link>
              
                <!-- <li class="zhishiku"><i class="icon"></i>知识库</li> -->
                <router-link tag="li" to="/index/account" active-class="active" class="wode"><i class="icon"></i>我的</router-link>
              
        		<!-- <li class="wode"><i class="icon"></i>我的</li> -->
        	</ul>
            <div class="left-nav-logo"></div>
        </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
</style>

