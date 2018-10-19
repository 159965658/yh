<template>
<ol class="clearfix">
    <li v-for="item in radioArr" :key="item.id" @click="sClick(item)">
        <i class="icon radio" :class="{'active':item.id == currenHover}"><b></b></i>{{item.name}}</li>
    <!-- <li @click="sClick"><i class="icon radio"><b></b></i>女</li> -->
</ol>
</template>

<script>
export default {
  props: {
    radioArr: {
      type: Array,
      default: () => {
        return [{ id: 0, name: "男" }, { id: 1, name: "女" }];
      }
    },
    defaultHover: {
      type: Number,
      default: 0
    },
    isHover: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currenHover: this.defaultHover
    };
  },
  methods: {
    sClick(item) {
      this.$emit("radioClick", item);
      if (!this.isHover) {
        this.currenHover = item.id;
      }
    }
  }
};
</script>

<style lang='less' scoped>
ol {
  display: inline-flex;
  justify-content: space-evenly;
  border: none !important;
  margin: 0 !important;
  li {
    float: left;
    width: 260px;
    position: relative;
    display: flex;
    align-items: center;

    i.icon {
      // position: absolute;
      // left: 9px;
      // top: 42px;
      margin-right: 10px;
    }

    input {
      margin-right: 30px;
    }
  }
}
</style>
