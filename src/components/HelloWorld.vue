<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-on:click="clickHref">跳转</h2>
    <h2 v-on:click="clickNative">原生方法测试</h2>
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
  methods: {
    clickHref() {
      this.$router.push("/login");
    },
    clickNative() {
      Android.run("log", "log from js");
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
