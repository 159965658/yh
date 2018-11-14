<template>
<div>
    <app-header :ctitle='"创建账号"'></app-header>
    <div class="blue-bg">
        <h3>设备激活成功 ！您可以创建一个属于自已的帐户</h3>
        <div class="inputs clearfix">
            <ul>
                <li>
                    <label>账号：</label>
                    <input type="text" placeholder="请输入一个账号作为您的登录名" maxlength="10" v-model="loginName">		        		</li>
                <li>
                    <label>密码：</label>
                    <input :type="flag ? 'password' : 'text'" placeholder="请输入6-20位字符" maxlength="20" v-model="addUser.password">
                    <i class="icon icon-zhengyan" :class="{'icon-biyan':!flag}" @click="flag = !flag"></i>
                </li>
                <li>
                    <label>确认密码：</label>
                    <input :type="flag1 ? 'password' : 'text'" placeholder="请输入6-20位字符" maxlength="20" v-model="addUser.spassword">
                    <i class="icon icon-zhengyan" :class="{'icon-biyan':!flag1}" @click="flag1 = !flag1"></i>
                </li>
                <!-- <li>
                    <label>机构编码：</label>
                    <input type="text" placeholder="机构编码" v-model="institutionCode" maxlength="20" >       		</li>	-->
                <li>
                    <label>机构名称：</label>
                    <!-- <input type="text" placeholder="机构名称" v-model="institutionName" maxlength="20" >		  -->
                    <app-select class="org" :opotionList='orgArr' @opotion="orgClick"></app-select>
                </li>
                <li>
                    <label>机构编码：</label>
                    <input type="text" placeholder="机构编码" disabled v-model="addUser.institutionCode" maxlength="20" > 
              	</li> 

                <li>
                    <label>网络版用户名：</label>
                    <input type="text" placeholder="网络版用户名" maxlength="10" v-model="webNickName">		        		</li>
            </ul>
            <div class="button-submit">
                <button   class="button submit" @click="addUserSubmit">完 成</button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      addUser: {
        userCode: "",
        loginName: "",
        password: "",
        spassword: "",
        gesture: "",
        institutionCode: "",
        institutionName: "",
        webNickName: "",
        crowdFlag: "0"
      },
      loginName: "",
      webNickName: "",
      institutionCode: "",
      institutionName: "",
      flag1: true,
      flag: true,
      orgArr: [
        {
          id: -1,
          name: "请选择"
        }
      ]
    };
  },
  watch: {
    loginName(val) {
      this.$nextTick(() => {
        this.loginName = filterInput(val);
      });
    },
    webNickName(val) {
      this.$nextTick(() => {
        this.webNickName = filterInput(val, true);
      });
    },
    institutionCode(val) {
      this.$nextTick(() => {
        this.institutionCode = filterInput(val);
      });
    },
    institutionName(val) {
      this.$nextTick(() => {
        this.institutionName = filterInput(val, true);
      });
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getorgdata();
    },
    orgClick(item) {
      if (item.id == -1) {
        this.addUser.institutionCode = "";
        this.addUser.institutionName = item.name;
        return;
      }
      this.addUser.institutionCode = item.id;
      this.addUser.institutionName = item.name;
      this.addUser.enterpriseIdentification = item.enterpriseIdentification;
      console.log(item);
    },
    getorgdata() {
      try {
        window["getorgdata"] = this.getorgdataSuccess;
        this.$native.run("getorgdata", {}, "getorgdata");
      } catch (error) {
        alert(error);
      }
    },
    getorgdataSuccess(data) {
      //  document.write(data);
      const arr = JSON.parse(data).orgData;
      arr.forEach(item => {
        this.orgArr.push({
          id: item.orgId,
          name: item.orgName,
          enterpriseIdentification: item.enterpriseIdentification
        });
      });
    },
    doctorcheck(data) {
      //验证医生
      // document.write(data);
      // const res = JSON.parse(data);
      window["doctorcheck"] = this.doctorcheckSuccess;
      window["errorCheck"] = this.errorCheck;
      let params = this.addUser;
      // alert(params.enterpriseIdentification);
      params.orgId = params.enterpriseIdentification;
      this.$native.run("doctorcheck", params, "doctorcheck", "errorCheck");
    },
    errorCheck(data) {
      this.$native.loadHide();
      this.$toast(data);
    },
    doctorcheckSuccess(data) {
      try {
        const res = JSON.parse(data);
        this.$native.loadHide();
        let params = this.addUser;
        params.operId = res.operId;
        window["addUserSuccess"] = this.success;
        this.$native.run("addUser", params, "addUserSuccess");
      } catch (error) {
        this.$native.loadHide();
        alert(error);
      }
    },
    addUserSubmit() {
      let params = this.addUser;
      params.loginName = this.loginName;
      params.webNickName = this.webNickName;
      // params.institutionCode = this.institutionCode;
      // params.institutionName = this.institutionName;
      // console.log(params.password.length);
      if (!params.loginName) {
        this.$toast("账号不能为空，请输入一个账号作为您的登录名。");
        return;
      }
      if (!params.password) {
        this.$toast("设置密码不能为空，请输入设置密码");
        return;
      }
      if (params.password.length < 6 || params.password.length > 20) {
        this.$toast("设置密码不符合要求，请输入6-20位字符");
        return;
      }
      if (!params.spassword) {
        this.$toast("确认密码不能为空，请输入确认密码");
        return;
      }
      if (params.password != params.spassword) {
        this.$toast("两次输入密码不一致，请重新输入");
        return;
      }
      // alert(params.institutionCode);
      if (!params.institutionCode || params.institutionCode == -1) {
        this.$toast("请选择一个机构。");
        return;
      }
      if (!params.webNickName) {
        this.$toast("请输入网络版用户名。");
        return;
      }
      this.doctorcheck();
    },
    success() {
      // alert()
      this.$router.push("/login");
      this.$toast("创建账号成功");
    }
  }
};
</script>

<style lang="less" scoped>
input::-webkit-input-placeholder {
  color: #1880c3 !important;
  font-size: 36px;
}

.blue-bg {
  // height: 1279px;
  padding-bottom: 60px;

  h3 {
    font-size: 36px;
    color: #ffffff;
    text-align: center;
    padding-top: 86px;
    padding-bottom: 76px;
  }
}

.inputs {
  // height: 1020px;
  padding-bottom: 60px;
}

.inputs ul li {
  margin-bottom: 44px;
}

.button-submit {
  margin-top: 96px;
}
</style><style lang="less">
.org {
  width: 100% !important;
  // height: 100%;
  margin-top: 20px;
  position: absolute !important;
  left: 0px !important;

  > .select_click_box {
    border: none !important;
    text-align: center;
    background-color: transparent !important;

    p {
      text-align: center;
      padding: 0px !important;
      width: 100% !important;
      color: #1880c3 !important;
    }
  }

  > .my_select {
    .opotion {
      height: 50px !important;
      text-align: center;
      color: #1880c3 !important;
    }
  }
}
</style>
