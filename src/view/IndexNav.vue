<template>
    
        <div class="left-nav">
        	<dl class="head-img" @click="outlogin">
        		<dt><img src="../assets/index-wangyisheng.png"></dt>
        		<dd style="color:#000" class="flowell">{{cacheUser.trueName}}</dd>
        	</dl>
        	<ul>
                <router-link tag="li" @click.native='removePar' to="/index/list" active-class="active" class="index" replace><i class="icon"></i>首页</router-link>
                <!-- <li class="active index"><i class="icon"></i>首页</li> -->
                  <router-link tag="li" @click.native='removeParBase' to="/index/Knowledgebase" active-class="active" class="zhishiku" replace><i class="icon"></i>知识库</router-link>
              
                <!-- <li class="zhishiku"><i class="icon"></i>知识库</li> -->
                <router-link tag="li" to="/index/account" active-class="active" class="wode" replace><i class="icon"></i>我的</router-link>
              
        		<!-- <li class="wode"><i class="icon"></i>我的</li> -->
        	</ul>
            <div class="left-nav-logo"></div>
        </div>
</template>
<script>
import OutTipsVue from "./OutTips.vue";
export default {
  data() {
    return {
      cacheUser: {}
    };
  },
  mounted() {
    //获取数据
    this.cacheUser = this.$cache.getUser();
  },
  methods: {
    removePar() {
      //清空首页搜索条件
      $vm.$emit("removeIndex");
    },
    removeParBase() {
      $vm.$emit("removeParBase");
    },
    outlogin() {
      this.$toastFull(OutTipsVue);
      // $vm.$on("submitEmit", this.outUser);
      //退出登录
      // this.$cache.remove(this.$cacheEnum.user);
      // this.$router.replace("/");
    }
  },
  beforeDestroy() {
    $vm.$off("submitEmit", this.outUser);
  }
};
</script>
<style lang="less" scoped>
.left-nav {
  ul {
    // height: 1340px;
    flex: 1 auto;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .left-nav-logo {
    flex: 1;
    background-repeat: no-repeat;
    //  position: fixed;
    //  bottom: 35px;
    // left: 50%;
    // margin-left: -61px;
    // margin-top: 200px;
  }
}
</style>

