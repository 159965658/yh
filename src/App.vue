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
    // console.log(this.$native);
    // this.$native.run();
    // window["testFun"] = this.testFun;
  },
  methods: {}
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
  /* margin-top: 60px; */
}
</style>

