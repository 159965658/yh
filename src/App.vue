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
    // console.log(this.$native);
    // this.$native.run();
    // window["testFun"] = this.testFun;
  },
  methods: {
    // testFun() {
    //   alert("回调");
    //   console.log("回调");
    // }
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
  /* margin-top: 60px; */
}
</style>

