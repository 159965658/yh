<template>
<div>
    <app-header :ctitle='"设备验证"'></app-header>
    <div class="blue-bg shebei clearfix">
        <i class="icon icon-jhsb-saoyisao" @click="qrCode"></i>
        <div class="inputs">
            <ul>
                <li class="code_input">
                    <input type="text" placeholder="输入激活码" v-model="code">		        		
                </li>
            </ul>
            <p class="jh-tips"></p>
            <div class="button-jh">
                <a href="javascript:void(0)" class="button jh" :class="{'btn-yellow':code}" @click="submit">提交验证</a>
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
        window["errors"] = this.errors;
        this.$native.run("activition", params, "success", "errors");
      }
    },
    errors(data) {
      this.$native.loadHide();
      this.$toast(data);
    },
    success() {
      // alert("success Verification");
      this.$native.loadHide();
      this.$router.push("/createuser");
    },
    qrCode() {
      window["qrcodeSuccess"] = this.qrcodeSuccess;
      this.$native.run("qrcode", {}, "qrcodeSuccess");
    },
    qrcodeSuccess(data) {
      this.code = data;
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
</style>
