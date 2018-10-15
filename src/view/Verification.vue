<template>
<div>
    <app-header :ctitle='"设备验证"'></app-header>
    <div class="blue-bg shebei clearfix">
        <i class="icon icon-jhsb-saoyisao"></i>
        <div class="inputs">
            <ul>
                <li class="code_input">
                    <input type="text" placeholder="输入激活码" v-model="code">		        		
                </li>
            </ul>
            <p class="jh-tips">请输入激活码，激活码可安购买的软件上获取</p>
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
        // window["error"] = function() {
        //   th.$toast("您输入的激活码有误，请查证后输入");
        // };
        this.$native.run("activition", params, "success");
      }
    },
    success() {
      // alert("success Verification");
      this.$router.push("/createuser");
    },
    qrCode() {
      window["qrcodeSuccess"] = this.qrcodeSuccess;
      this.$native.run("qrcode", {}, "qrcodeSuccess");
    },
    qrcodeSuccess(data) {
      alert(data);
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
