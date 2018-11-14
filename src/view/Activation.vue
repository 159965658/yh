<template>
<div>
    <app-header :ctitle='"设备激活"'></app-header>
    <div class="blue-bg shebei clearfix">
        <i class="icon icon-jhsb-saoyisao" @click="qrCode"></i>
        <div class="inputs">
            <ul>
                <li class="code_input">
                    <input type="text" placeholder="输入激活码" v-model="code">		
                    <i class="icon clear" v-show="code" @click="code = ''"></i>
                </li>
            </ul>
            <p class="jh-tips">请输入激活码，激活码可安购买的软件上获取</p>
            <div class="button-jh">
                <a href="javascript:void(0)" class="button jh" :class="{'btn-yellow':code}" @click="submit">确认激活</a>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      code: ""
    };
  },
  //   mounted() {
  //     window["success"] = this.success;
  //     window["error"] = function() {
  //       alert("error Ver");
  //     };
  //   },
  methods: {
    submit() {
      if (this.code) {
        //
        let params = {
          code: this.code
        };
        window["success"] = this.success;
        let th = this;
        window["errors"] = this.errorS;
        this.$native.run("activition", params, "success", "errors");
      }
    },
    errorS(data) {
      this.$native.loadHide();
      this.$toast(data);
    },
    success() {
      // alert("success Verification");
      this.$native.loadHide();
      this.getDeviceInfo();
    },
    qrCode() {
      window["qrcodeSuccess"] = this.qrcodeSuccess;
      this.$native.run("qrcode", {}, "qrcodeSuccess");
    },
    qrcodeSuccess(data) {
      this.code = data;
    },
    getDeviceInfo(active = true) {
      // const device = this.$cache.get(this.$cacheEnum["device"]);
      // if (device) {
      //   if (active) this.infoSuccess(JSON.stringify(device));
      //   return;
      // }
      window["infoSuccess"] = this.infoSuccess;
      this.$native.run("getDeviceInfo", {}, "infoSuccess");
    },
    infoSuccess(data) {
      data = JSON.parse(data);
      //console.log(data);
      //   if (this.fun) {
      // if (!data.activeCode && !data.enterpriseIdentification) {
      //   //首次激活 进入激活页面
      //   this.$router.replace("/activation");
      //   return;
      // }
      //不是首次激活 进入 切换用户
      // if()
      //this.$router.push("/switch");
      //  this.fun = false;
      //  } else {
      this.$cache.set(this.$cacheEnum["device"], data);
      this.$router.push("/createuser");
      // }
    }
  }
  //   watch: {
  //     code() {
  //       console.log(this.code);
  //     }
  //   }
};
</script>

<style lang="less" scoped>
.code_input {
  > input::-webkit-input-placeholder {
    letter-spacing: 2px;
  }
  > input {
    letter-spacing: 20px;
  }
}
.icon.clear {
  float: right;
  margin-right: 30px;
  margin-top: 28px;
}
</style>
