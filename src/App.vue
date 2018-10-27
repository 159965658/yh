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
    //初始化
    // if (!this.$cache.get(this.$cacheEnum["nation"]))
    //   this.$http.get("../static/dict/nation.json").then(res => {
    //     // this.nationArr = res.body;
    //     this.$cache.set("nationCache", res.body);
    //     //  console.log("json数据为:", res.body); //此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
    //   });
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

