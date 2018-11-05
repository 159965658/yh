<template>
  <div id="app"> 
    <!-- <tips></tips> -->
    <router-view/>
  </div>
</template>

<script>
// import tips from "@/components/Tips";
export default {
  name: "App",
  components: {
    // tips
  },
  mounted() {
    var h = document.body.scrollHeight;
    window.onresize = function() {
      ra();
      // }
    };
    ra();
    //是不是首次激活
    if (identity != "pc") this.getDeviceInfo();
  },
  methods: {
    getDeviceInfo(active = true) {
      const device = this.$cache.get(this.$cacheEnum["device"]);
      if (device) {
        if (active) this.infoSuccess(JSON.stringify(device));
        return;
      }
      window["infoSuccess"] = this.infoSuccess;
      this.$native.run("getDeviceInfo", {}, "infoSuccess");
    },
    infoSuccess(data) {
      data = JSON.parse(data);
      console.log(data);
      //   if (this.fun) {
      if (!data.activeCode && !data.enterpriseIdentification) {
        //首次激活 进入激活页面
        this.$router.push("/activation");
        return;
      }
      //不是首次激活 进入 切换用户
      // if()
      this.$router.push("/switch");
      //  this.fun = false;
      //  } else {
      this.$cache.set(this.$cacheEnum["device"], data);
      // }
    }
  }
};
</script>

<style lang='less'>
@import "./assets/app.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: #fff;

  /* margin-top: 60px; */
}
</style>

