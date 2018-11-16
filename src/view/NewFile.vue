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
                    <li class="dashed"><label for="">档案号:</label>
                        <input type="text" placeholder="档案号" v-model="addUser.code" maxlength="10"></li>
                    <li class="dashed"><i class="must">*</i><label for="">姓名:</label>
                        <input type="text" placeholder="姓名" v-model="cName" maxlength="10">
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
                    <li style="z-index:9"><i class="must">*</i><label for="">
                      <app-select class="idCard" :opotionList='idCardArr' @opotion='idClick'></app-select>
                    </label>
                        <input type="text" v-model="uCardNum" placeholder="" maxlength="18"/>
                        <!-- <app-sex @radioClick='idClick' :radioArr="idCardArr" :defaultHover='addUser.cCardType'></app-sex> -->
                        <!-- <i class="icon arrow"></i> -->
                    </li>
                    <li>
                        <i class="must">*</i><label for="">出生日期:</label>
                        <span>{{addUser.birth}}</span>
                        <mt-datetime-picker ref="picker" :startDate='startDate' :endDate='endDate' type="date" v-model="birth" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
                        </mt-datetime-picker> <i class="icon rili" @click="openPicker"></i>
                    </li>

                    <li style="z-index:8"><i class="must">*</i>
                        <label for="">婚姻状况:</label>
                        <label for="" style="width:85%">
                           <app-select  class="nation hun"  :opotionList='marriageArr' :id="1" @opotion='marriageClick'></app-select>
                        </label>
                    </li>

                    <li style="z-index:7"><i class="must">*</i><label for="">居住地:</label>
                        <label for="">
                          <app-select  class="nation hun"  :opotionList='province' :id="0" @opotion='provinceClick'></app-select> 
                      </label>
                        <label for="" class="city">

                        <app-select  class="nation hun"  :opotionList='cityC' :id='cityId' @opotion='cityClick'></app-select> 
                      </label>
                    </li>
                    <li><label for="">地址:</label><input type="text" v-model="contactAddress" placeholder="联系地址" maxlength="50"></li>
                    <li><label for="">手机号码:</label><input type="number" v-model="addUser.mobileTel" placeholder="手机号码"/></li>
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
//导入婚姻
import { marriage } from "../../static/dict/marriage.js";
//导入省
import { province } from "../../static/dict/province.js";

//导入市
import { city } from "../../static/dict/city.js";
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
        nation: 10,
        sex: 0, //"性别 0：男，1：女",
        fixedTel: " ",
        mobileTel: "",
        contactAddress: "",
        marriage: 1,
        custOrgProvince: 0,
        custOrgCity: 0
      },
      cName: "",
      contactAddress: "",
      uCardNum: "",
      province: province,
      city: city,
      cityC: [
        {
          name: "请选择",
          id: 0
        }
      ],
      cityId: 0,
      error: false,
      birth: new Date(),
      startDate: new Date("1900-01-01"),
      endDate: new Date(),
      marriageArr: marriage,
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
  watch: {
    cName(val) {
      this.$nextTick(() => {
        const value = filterInput(val, true);
        this.addUser.cName = value;
        this.cName = value;
      });
    },
    contactAddress(val) {
      this.$nextTick(() => {
        const value = filterInput(val, true);
        this.addUser.contactAddress = value;
        this.contactAddress = value;
      });
    },
    uCardNum(val) {
      this.$nextTick(() => {
        let value = filterInput(val);
        if (this.addUser.cCardType == 101) {
          value = value.toUpperCase();
          if (value.length == 18) {
            let u = this.checkId(value);
            if (u) {
              var ic = value;
              var birth =
                ic.substring(6, 10) +
                "-" +
                ic.substring(10, 12) +
                "-" +
                ic.substring(12, 14);
              if (!this.addUser.birth) {
                this.addUser.birth = birth;
                this.birth = new Date(birth);
              }
            }
          }
        }
        this.addUser.uCardNum = value;

        this.uCardNum = value;
      });
    }
  },
  mounted() {
    this.addUser.userCode = this.$cache.getUser().userCode;
    //加载民族文件
    // this.marriageArr = marriage;
    // this.$http.get("static/dict/nation.json").then(res => {
    this.nationArr = this.$cache.get(this.$cacheEnum.nation);
    setTimeout(() => {
      $vm.$emit("selectChange", 10);
      // }, 1);
      //  console.log("json数据为:", res.body); //此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
    });
    this.getOcrAdd();
  },
  methods: {
    getOcrAdd() {
      //是否需要读取缓存
      if (this.$route.query.type) {
        const data = this.$cache.get(this.$cacheEnum.ocrAdd);
        this.ocrSuccess(JSON.stringify(data));
      }
    },
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
      this.cName = res.Name.value;
      this.addUser.sex = res.Sex.value == "男" ? 0 : 1;
      //民族
      const folk = res.Folk.value;
      let folkModel = this.nationArr.find(p => p.name.indexOf(folk) > -1);
      if (folkModel) {
        this.addUser.nation = folkModel.id;
      } else {
        folkModel = this.nationArr.find(p => p.name.indexOf("汉") > -1);
        this.addUser.nation = folkModel.id;
      }
      $vm.$emit("selectChange", folkModel.id);
      $vm.$emit("sexChange", this.addUser.sex);
      let b = res.Birt.value.replace("年", "-");
      b = b.replace("月", "-");
      b = b.replace("日", "");
      this.addUser.birth = b;
      this.birth = b;
      this.uCardNum = res.Num.value;
      this.contactAddress = res.Addr.value;
    },
    handleConfirm(value) {
      console.log(this.addUser.birth, value);
      this.addUser.birth = value.format("yyyy-MM-dd");
    },
    save() {
      const user = this.addUser;
      // if (!user.customerCode) {
      //   this.$toast("档案号不能为空，请输入档案号。");
      //   return;
      // }
      if (!user.cName) {
        this.$toast("姓名不能为空，请输入姓名。");
        return;
      }
      if (!user.uCardNum) {
        if (user.cCardType == 101)
          this.$toast("身份证不能未空，请输入您的身份证号码。");
        else {
          this.$toast("请输入您的其他号码。");
        }
        return;
      }
      if (user.uCardNum) {
        if (user.cCardType == 101) {
          // if (user.uCardNum.length != 18) {
          let u = this.checkId(user.uCardNum);
          if (u) {
            var ic = this.uCardNum;
            var birth =
              ic.substring(6, 10) +
              "-" +
              ic.substring(10, 12) +
              "-" +
              ic.substring(12, 14);
            if (!user.birth) {
              user.birth = birth;
              this.birth = new Date(birth);
            }
          } else {
            return;
          }
        }
      }
      if (!user.birth) {
        this.$toast("出生不能未空，请选择您的出生日期");
        return;
      }

      // if (!user.contactAddress) {
      //   this.$toast("地址不能为空，请输入您的地址。");
      //   return;
      // }
      if (user.custOrgProvince == 0) {
        this.$toast("请您选择省");
        return;
      }
      if (user.custOrgCity == 0) {
        this.$toast("请您选择城市");
        return;
      }
      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (user.mobileTel && !myreg.test(user.mobileTel)) {
        this.$toast("请填写正确手机号码");
        return;
      }
      try {
        window["addcustomerSucess"] = this.addcustomer;
        window["addcustomerError"] = this.addcustomerError;
        this.$native.run(
          "addcustomer",
          user,
          "addcustomerSucess",
          "addcustomerError"
        );
      } catch (error) {
        alert(error);
      }
    },
    addcustomerError(data) {
      // document.write(data);
      try {
        const res = JSON.parse(data);
        //this.addcustomer(data, "该档案已存在，是否直接进入辨识报告？");
        this.$cache.set(this.$cacheEnum["cardModel"], res);
        this.$toastFull(NewTipsVue, true, {
          text: "档案信息已存在，请选择您要执行的操作",
          ltitle: "返回首页",
          stitle: "开始辨识",
          type: 1
        });
      } catch (error) {
        this.$toast(data);
      }
    },
    checkId(pId) {
      //检查身份证号码
      var arrVerifyCode = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var Checker = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];
      if (pId.length != 15 && pId.length != 18) {
        //return "身份证号共有15位或18位"
        this.$toast("身份证号共有15位或18位");
        return;
      }
      var Ai =
        pId.length == 18
          ? pId.substring(0, 17)
          : pId.slice(0, 6) + "19" + pId.slice(6, 16);
      if (!/^\d+$/.test(Ai)) {
        //return "身份证除最后一位外，必须为数字！"
        this.$toast("身份证除最后一位外，必须为数字！");
        return;
      }
      var yyyy = Ai.slice(6, 10),
        mm = Ai.slice(10, 12) - 1,
        dd = Ai.slice(12, 14);
      var d = new Date(yyyy, mm, dd),
        now = new Date();
      var year = d.getFullYear(),
        mon = d.getMonth(),
        day = d.getDate();
      if (year != yyyy || mon != mm || day != dd || d > now || year < 1800) {
        //return "身份证输入错误！"
        this.$toast("您输入的身份证错误！");
        return;
      }
      for (var i = 0, ret = 0; i < 17; i++) {
        ret += Ai.charAt(i) * Wi[i];
      }
      Ai += arrVerifyCode[(ret %= 11)];
      return pId.length == 18 && pId != Ai
        ? this.$toast("您输入的身份证错误！")
        : Ai;
    },
    addcustomer(data, text = "档案创建成功，请选择您要执行的操作") {
      // alert(data);
      this.$cache.set(this.$cacheEnum["cardModel"], JSON.parse(data));
      //$vm.$router.replace("/Identification");
      this.$toastFull(NewTipsVue, true, {
        text: text,
        ltitle: "返回首页",
        stitle: "开始辨识",
        type: 1
      });
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
    },
    marriageClick(item) {
      this.addUser.marriage = item.id;
    },
    provinceClick(item) {
      let city = [];
      this.cityC = city.concat(this.city.filter(p => p.pCode == item.id));
      this.cityId = this.cityC[0].id;
      this.addUser.custOrgCity = this.cityId;
      this.addUser.custOrgProvince = item.id;
    },
    cityClick(item) {
      this.addUser.custOrgCity = item.id;
    }
  }
};
</script>

<style lang="less" scoped>
.city {
  width: 400px !important;
  padding-left: 100px;
}

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
