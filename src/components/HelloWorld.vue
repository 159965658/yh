<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-on:click="clickHref">跳转</h2>
    <h2 v-on:click="clickNative">激活设备</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your YH App"
    };
  },
  mounted() {
    window["success2"] = this.success;
    window["error"] = this.error;
  },
  methods: {
    clickHref() {
      this.$router.push("/login");
    },
    clickNative() {
      // Android.run(
      //   "activition",
      //   '{"code":"99999"}',
      //   "success2",
      //   "error"
      // );
      // //调用原生方法
      this.$native.run(
        "activition",
        { code: "12sdada122" },
        'success2',
        'error'
      );
    },
    error() {
      alert("error , HelloWorld");
    },
    success() {
      alert("success , HelloWorld222");
    },
    testFun() {
      alert("回调2");
      console.log("回调2");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
