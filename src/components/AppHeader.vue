<template>
    <div class="app-header">
        <div class="left" @click='back'><slot name='left'><i class='icon' :class="{'icon-back':ltitle}" ></i></slot></div>
        <div class="center">{{ctitle}}</div>
        <div class="right" @click="rClick">{{rtitle}}</div>
    </div>
</template>
<script>
import newUser from "./FullTips";
export default {
  props: {
    ctitle: {
      type: String,
      default: ""
    },
    rtitle: {
      type: String,
      default: ""
    },
    ltitle: {
      type: String,
      default: ""
    },
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      fun: false
    };
  },
  mounted() {
    // this.getDeviceInfo(false);
  },
  methods: {
    rClick() {
      if (this.type == 1) {
        this.fun = true;
        this.getDeviceInfo();
      }
    },
    getDeviceInfo(active = true) {
       this.$toastFull(newUser);
      //验证设备激活
      // const device = this.$cache.get(this.$cacheEnum["device"]);
      // if (device) {
      //   if (active) this.infoSuccess(JSON.stringify(device));
      //   return;
      // }
      // window["infoSuccess"] = this.infoSuccess;
      // this.$native.run("getDeviceInfo", {}, "infoSuccess");
    },
    infoSuccess(data) {
      // data = JSON.parse(data);
      // if (this.fun) {
      //   if (!data.activeCode && !data.enterpriseIdentification) {
      //     //不是首次激活
      //     this.$toastFull(newUser);
      //     return;
      //   }
      //   //首次激活
      //   this.$router.push("/createuser");
      //   this.fun = false;
      // } else {
      //   this.$cache.set(this.$cacheEnum["device"], data);
      // }
    },
    back() {
      if (this.type == 2) {
        $vm.$emit("tipsBack");
        return;
      }
      $appBack();
    }
  },
  beforeDestroy() {}
};
</script>
<style lang="less" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  height: 88px;
  line-height: 88px;
  align-items: center;
  position: relative;
  color: #282828;
  padding: 0px 20px;
  background-color: #fff;
  font-size: 38px;
  // padding-top: 54px;
  // background-color: red;
  .center {
    margin: 0 auto;
    // float: left;
    width: 70%;
    text-align: center;
  }
  .right {
    right: 78px;
    text-align: center;
    font-size: 36px;
    width: 15%;
    // float: left;
    white-space: nowrap;
  }
  .left {
    width: 15%;
    white-space: nowrap;
    // float: left;
  }
  .icon-back {
    background: url("./../assets/back.png") no-repeat center;
    background-size: 80%;
    width: 80px;
    height: 80px;
  }
}
</style>
