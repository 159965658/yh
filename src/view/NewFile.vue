<template>
<div>
    <app-header :ltitle='"后退"' :ctitle='"新建档案"'></app-header>
    <ul class="tab clearfix">
        <li class=" edit" :class="{active:!error}">
            <p> <i class="icon"></i> 人工输入</p>
        </li>
        <li class="ocr" @click="ocr" :class="{active:error}">
            <p><i class="icon" ></i>OCR识别</p>
        </li>
    </ul>
    <div class="center-content">
        <div style="width: 100%;height: 5px;"></div>
        <div class="border">
            <div class="edit-content" v-if="!error">
                <ul>
                    <!-- <li class="dashed"><label for="">档案编号:</label>
                        <input type="text" placeholder="档案编号" v-model="addUser.customerCode"></li> -->
                    <li class="dashed"><i class="must">*</i><label for="">姓名:</label>
                        <input type="text" placeholder="姓名" v-model="addUser.cName">
                    </li>
                    <li><i class="must">*</i><label for="">性别：</label>
                        <app-sex @radioClick='sexClick' :defaultHover='addUser.sex'></app-sex>
                        <!-- <ol class="clearfix">
                            <li><i class="icon radio active"><b></b></i>男</li>
                            <li><i class="icon radio"><b></b></i>女</li>
                        </ol> -->
                    </li>
                    <li style="z-index:10">
                      <i class="must">*</i><label for="">民族:</label> 
                      <label for="" style="width:85%">
                        <app-select  class="nation"  :opotionList='nationArr' :id="10" @opotion='nationClick'></app-select>
                      </label> <!-- <input type="text" v-model="addUser.nation" placeholder="汉"> -->
                    </li>
                    <li>
                        <i class="must">*</i><label for="">出生:</label>
                        <span>{{addUser.birth}}</span>
                        <mt-datetime-picker ref="picker" :startDate='startDate' :endDate='endDate' type="date" v-model="birth" year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日" @confirm="handleConfirm" >
                        </mt-datetime-picker> <i class="icon rili" @click="openPicker"></i>
                    </li>
                    <!-- <li><i class="must">*</i><label for="">出生:</label>1987-01-01 <i class="icon rili"></i></li> -->

                    <li><i class="must">*</i><label for="">
                      <app-select class="idCard" :opotionList='idCardArr' @opotion='idClick'></app-select>
                    </label>
                        <input type="text" v-model="addUser.uCardNum" placeholder=""/>
                        <!-- <app-sex @radioClick='idClick' :radioArr="idCardArr" :defaultHover='addUser.cCardType'></app-sex> -->
                        <!-- <i class="icon arrow"></i> -->
                    </li>
                    <li><i class="must">*</i><label for="">地址:</label><input type="text" v-model="addUser.contactAddress" placeholder="联系地址"></li>
                    <li><i class="must">*</i><label for="">联系方式:</label><input type="text" v-model="addUser.mobileTel" placeholder="联系方式"/></li>
                </ul>
                <div class="button-submit">
                    <button href="javascript:void(0)" class="button submit btn-save" @click="save">保存</button>
                </div>
            </div>
        </div>

        <div class="ocr-content" v-if="error">
            <div class=" fail">
                <div class="img"><img src="../assets/iii.png" alt="" /></div>
                    <p>未识别出来，请重试...</p>

                    <div class="button-submit blue-btn">
                        <button class="button submit btn-save" @click="ocr">重试</button>
                    </div>
                </div>
            </div>
            <div style="width: 100%;height: 50px;"></div>
        </div>

        <div class="error-tips hide">您的身份证与系统用户身份证有冲突</div>

    </div>
</template>

<script>
//报存提示
import NewTipsVue from "./NewTips.vue";

export default {
  data() {
    return {
      addUser: {
        customerCode: "",
        userCode: "",
        //cId: 0,
        cCardType: 101, // "101：身份证，105：其他",
        uCardNum: "",
        cName: "",
        birth: "",
        nation: "",
        sex: 0, //"性别 0：男，1：女",
        fixedTel: " ",
        mobileTel: "",
        contactAddress: ""
      },
      error: false,
      birth: "",
      startDate: new Date("1900-01-01"),
      endDate: new Date(),
      idCardArr: [
        {
          id: "101",
          name: "身份证"
        },
        {
          id: 105,
          name: "其他"
        }
      ],
      nationArr: []
    };
  },
  mounted() {
    this.addUser.userCode = this.$cache.getUser().userCode;
    //加载民族文件

    // this.$http.get("static/dict/nation.json").then(res => {
    this.nationArr = this.$cache.get(this.$cacheEnum.nation);
    setTimeout(() => {
      $vm.$emit("selectChange", 10);
      // }, 1);
      //  console.log("json数据为:", res.body); //此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
    });
  },
  methods: {
    ocr() {
      window["ocr"] = this.ocrSuccess;
      window["ocrError"] = this.ocrError;
      this.$native.run("ocr", "", "ocr", "ocrError");
    },
    ocrError() {
      this.error = true;
    },
    ocrSuccess(data) {
      const res = JSON.parse(data);
      console.log(res);
      this.addUser.cName = res.Name.value;
      this.addUser.sex = res.Sex.value == "男" ? 0 : 1;
      $vm.$emit("sexChange", this.addUser.sex);
      this.addUser.nation = res.Folk.value;
      let b = res.Birt.value.replace("年", "-");
      b = b.replace("月", "-");
      b = b.replace("日", "");
      this.addUser.birth = b;
      this.birth = b;
      this.addUser.uCardNum = res.Num.value;
      this.addUser.contactAddress = res.Addr.value;
    },
    handleConfirm(value) {
      console.log(this.addUser.birth, value);
      this.addUser.birth = value.format("yyyy-MM-dd");
    },
    save() {
      const user = this.addUser;
      if (!user.cName) {
        this.$toast("请填写姓名");
        return;
      }
      if (!user.nation) {
        this.$toast("请填写民族");
        return;
      }
      if (!user.birth) {
        this.$toast("请填写出生日期");
        return;
      }
      if (!user.uCardNum) {
        if (user.cCardType == 101) this.$toast("请填写身份证号");
        else {
          this.$toast("请填写其他证件号");
        }
        return;
      }
      if (!user.contactAddress) {
        this.$toast("请填写地址");
        return;
      }

      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!user.mobileTel || !myreg.test(user.mobileTel)) {
        this.$toast("请填写正确联系方式");
        return;
      }
      try {
        window["addcustomerSucess"] = this.addcustomer;
        this.$native.run("addcustomer", user, "addcustomerSucess");
      } catch (error) {
        alert(error);
      }
    },
    addcustomer(data) {
      // alert(data);
      this.$cache.set(this.$cacheEnum["cardModel"], JSON.parse(data));
      this.$toastFull(NewTipsVue);
    },
    datepickerOpenedFunction() {
      console.log("open");
    },
    openPicker() {
      this.$refs.picker.open();
    },
    sexClick(item) {
      //男女
      this.addUser.sex = item.id;
      console.log(item);
    },
    idClick(item) {
      this.addUser.cCardType = item.id;
      console.log(item);
    },
    nationClick(item) {
      this.addUser.nation = item.id;
    }
  }
};
</script>

<style lang="less" scoped>
.center-content {
  box-shadow: -1px 1px 30px #cacaca;
  width: 1370px;
  margin: 0 auto;
  background: #fff;
}

i.icon {
  float: left;
}

.my-select {
  font-size: 36px;
  color: #989898;
  border: none;
  outline: none;
}

.tab {
  width: 1250px;
  margin: 0 auto;

  li {
    width: 50%;
    float: left;
    height: 88px;
    background: #c6cdda;
    margin-top: 10px;
    line-height: 88px;
    font-size: 36px;
    color: #fff;
    border-radius: 10px 10px 0 0;
  }

  li.edit {
    i {
      background: url(../assets/edit.png) no-repeat;
      width: 42px;
      height: 42px;
      background-size: 100%;
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 198px;
    }
  }

  li.ocr {
    i {
      width: 48px;
      height: 48px;
      background: url(../assets/ocr.png) no-repeat;
      background-size: 100%;
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 185px;
    }
  }

  li.active {
    height: 98px;
    background: #3ba6dd;
    margin-top: 0px;

    p {
      padding-top: 10px;
    }
  }
}

.border {
  border: 1px solid #dcdcdc;
  width: 1270px;
  margin: 0 auto;
  margin-top: 50px;

  ul {
    margin-left: 60px;
    margin-right: 60px;
    padding-top: 5px;

    li {
      height: 120px;
      line-height: 120px;
      color: #282828;
      font-size: 36px;
      position: relative;
      border-bottom: 1px solid #e1e1e1;

      label {
        min-width: 170px;
        display: block;
        float: left;
        color: #989898;
      }

      i.must {
        position: absolute;
        color: #f00;
        left: -20px;
      }

      input {
        width: 950px;
        height: 60px;
        font-size: 36px;
        border: none;
        // color: #989898;
      }

      i.rili {
        float: right;
        margin-top: 32px;
        z-index: 101;
      }

      i.arrow {
        float: right;
        margin-top: 32px;
        width: 34px;
        height: 21px;
        background-size: 100%;
        margin-top: 50px;
      }
    }

    li.dashed {
      border-bottom: 1px dashed #e1e1e1;
    }
  }

  .button-submit {
    .submit {
      background: #3ba6dd;
      border-radius: 10px;
      width: 500px;
      margin: 20px auto;
    }
  }
}

.blck-bg {
  background: #191919;
  height: 1126px;
  width: 100%;
}

.fail {
  width: 100%;
  padding-bottom: 320px;

  .img {
    width: 270px;
    height: 270px;
    margin: 0 auto;
    margin-top: 255px;

    img {
      width: 100%;
    }
  }

  p {
    font-size: 36px;
    color: #989898;
    text-align: center;
    margin-top: 75px;
    margin-bottom: 115px;
  }

  .button-submit {
    .button {
      width: 910px;
      margin: 0 auto;
    }
  }
}

.error-tips {
  top: 35%;
}
</style><style lang="less">
.inputTime {
  width: 100%;
  height: 60px;
  font-size: 36px;
  border: none;
}
.nation {
  width: 100% !important;
  float: left;
  margin-top: 25px;
}
.newc {
  width: 90%;

  // margin-left: 160px;
  .cell {
    border: none;
  }
}

.idCard {
  padding-top: 20px;

  //font-size: 36px;
  > .select_click_box {
    outline: none !important;
    border: none !important;

    > p {
      padding-left: 0px !important;
    }
  }
}
</style>
