<template>
<div style="height: 100%;">
    <app-header :ltitle='"后退"' :ctitle='"查看档案"'></app-header>
    <div class="clearfix all">

        <div class="shadow update">
            <h3>修改记录</h3>
            <div class="border">
                <ol>
                    <li v-for="(item,index) in histList" :key="index">
                        <p class="time">{{item.createdOnUTC | timeStamp('yyyy-MM-dd')}}</p>
                        <p v-if="item.editTitle">{{user.webNickName}}把{{item.editTitle}}修改为{{item.editContent}}</p>
                        <p v-if="!item.editTitle">{{user.webNickName}}建立居民信息档案</p>

                        <i class="icon radio active"></i>
                    </li>
                </ol>
            </div>
        </div>
        <div class="left-content fl">
            <div class="dangan">
                <h3>居民档案信息</h3>
                <div class="shadow">
                    <p class="edit" @click="editClick">{{btnText}}</p>
                    <div class="border">
                        <ul v-if="!edit">
                            <li><label for="">档案编号：</label><span>{{cardModel.code}}</span></li>
                            <li><label for="">姓名：</label><span>{{cardModel.cName}}</span></li>
                            <li><label for="">性别：</label><span>{{cardModel.sex | sex}}</span></li>
                            <li><label for="">民族：</label><span>{{cardModel.nation | nation}}</span></li>
                            <li><label for="">出生：</label><span>{{cardModel.birth}}</span></li>
                            <li><label for="">婚姻状况：</label><span>{{cardModel.marriage | marriage}}</span></li>
                            <li><label for="">{{cardModel.cCardType | cardType}}：</label><span>{{cardModel.uCardNum}}</span></li>
                            <li><label for="">地址：</label><span>{{cardModel.contactAddress}}</span></li>
                            <li><label for="">居住地：</label><span>{{cardModel.custOrgProvince | province}}   {{cardModel.custOrgCity | city}}   </span></li>
                            <li><label for="">联系方式：</label><span>{{cardModel.mobileTel}}</span></li>
                        </ul>
                        <ul v-if="edit">
                            <li><label for="">档案编号：</label>
                                <input type="text" v-model="cardModelCopy.code" maxlength="10"> </li>
                            <li><i class="must">*</i><label for="">姓名：</label>
                                <input type="text" v-model="cardModelCopy.cName" maxlength="10"> </li>
                            <li class="sex xingbie"><i class="must">*</i><label for="">性别：</label>
                                <app-sex :defaultHover='cardModelCopy.sex' @radioClick='sexClick'></app-sex>
                            </li>
                            <li style="position:relative;z-index:10">
                                <i class="must">*</i><label for="">民族：</label>
                                <app-select class="nation" :opotionList='nationArr' :id="cardModelCopy.nation" @opotion='nationClick'></app-select>
                                <!-- <input type="text" v-model="cardModelCopy.nation">  -->
                            </li>
                            <li><i class="must">*</i><label for="">出生：</label>
                                <span @click="openPicker">{{cardModelCopy.birth}}</span>
                                <mt-datetime-picker @confirm="handleConfirm" :startDate='startDate' :endDate='endDate' ref="picker" type="date" v-model="birth" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
                                </mt-datetime-picker> <!-- @confirm="handleConfirm" -->
                            </li>
                            <li style="position:relative;z-index:9">
                                <i class="must">*</i><label for="">婚姻状况：</label>
                                <app-select class="nation" :opotionList='marriageArr' :id="cardModelCopy.marriage" @opotion='marriageClick'></app-select>
                                <!-- <input type="text" v-model="cardModelCopy.nation">  -->
                            </li>
                            <li style='position:relative;'><i class="must">*</i><label for="" style="position:relative;display:block">
                      <app-select class="idCard" style="" :opotionList='idCardArr' :id='cardModelCopy.cCardType' @opotion='idClick'></app-select>
                    </label>
                                <input type="text"  class='carInput' style="" v-model="cardModelCopy.uCardNum" maxlength="18"></li>
                            <li><i class="must">*</i><label for="">地址：</label><input type="text" v-model="cardModelCopy.contactAddress"></li>
                            <li style="position: relative;z-index:8"><i class="must">*</i><label for="">居住地:</label>
                                <label for="" style="
    display: inline-block;position:relative;
">
                                <app-select class=" province hun" :opotionList='province' @opotion="provinceClick" :id="cardModelCopy.custOrgProvince"></app-select>
</label> <label for="" style="
    display: inline-block;position:relative;
">
                                <app-select class=" city hun" :opotionList='cityC' @opotion="cityClick" :id='cardModelCopy.custOrgCity'></app-select>
</label>
                            </li>
                            <li><i class="must">*</i><label for="">联系方式：</label><input type="number" v-model="cardModelCopy.mobileTel"></li>
                        </ul>
                    </div>
                    <div style="height: 25px;"></div>
                </div>
            </div>

        </div>
        <div class="right-content dangan fr">
            <h3>体质辨识报告信息</h3>
            <div class="shadow">
                <div class="clearfix">
                    <ol class="to-btns clearfix" v-if="report.length">
                        <!-- <li @click="updateData"><i class="icon icon-shangchuan"></i>上传 <span>{{count}}</span></li> -->

                        <li class="bor-h" @click="delSubmit"><i class="icon icon-shanchu"></i>删除<span style="margin-left:5px;">{{delCount}}</span></li>
                        <!-- <li class="bor-h"  @click="allSelect"><i class="radio-btn " :class="{active:all}"></i>全选</li> -->
                    </ol>
                </div>
                <ul v-if="report.length">
                    <li v-for="(item,i) in report" :key="i" @click.stop='iden(item)'>
                        <i class="radio-btn list-icon" @click.stop="reportHover(item)" :class='{active:item.hover}'></i>
                        <b class="biaoti">{{item.mainPhysical.split(',')[0]}} </b>
                        <b class="time">{{user.webNickName}}-{{item.testDate | timeStamp('yyyy-MM-dd')}}</b>
                        <!-- {{report.testDate | timeStamp('yyyy-MM-dd')}} -->
                        <i class="jiao"></i>
                    </li>
                    <!-- <li>
                        <b class="biaoti">体质辨识报告    张三</b>
                        <b class="time">2018-05-02</b>
                    </li> -->
                </ul>
                <data-null v-else></data-null>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { sex } from "@/filters/index.js";
import { marriageFilter } from "@/filters/marriage.js";
import { marriage } from "../../static/dict/marriage.js";
import dataNull from "../components/DataNull";
import { Indicator } from "mint-ui";
//导入省
import { province } from "../../static/dict/province.js";

//导入市
import { city } from "../../static/dict/city.js";

import FullTipsVue from "../components/FullTips.vue";
export default {
  components: {
    dataNull
  },
  data() {
    return {
      delCount: 0,
      cardModel: {},
      edit: false,
      btnText: "编辑",
      cardModelCopy: {},
      birth: new Date(),
      histList: [],
      user: {},
      report: [],
      startDate: new Date("1971-01-01"),
      endDate: new Date(),
      marriageArr: marriage,
      idCardArr: [
        {
          id: 101,
          name: "身份证"
        },
        {
          id: 105,
          name: "其他"
        }
      ],
      nationArr: [],
      modifyNation: "",
      province: province,
      city: city,
      cityC: []
    };
  },
  mounted() {
    this.cardModel = this.$cache.get(this.$cacheEnum["cardModel"]);
    this.cityC = this.cityC.concat(
      this.city.filter(p => p.pCode == this.cardModel.custOrgProvince)
    );
    this.nationArr = this.$cache.get(this.$cacheEnum["nation"]); //获取民族
    this.user = this.$cache.getUser();
    this.getHistory(this.cardModel.customerCode);
    this.getInventoryInfo();
  },
  methods: {
    iden(item) {
      this.$cache.set(this.$cacheEnum["report"], item);
      this.$router.push("/IdentificationReport?type=0");
    },
    getInventoryInfo() {
      window["getinventoryinfo"] = this.getInventorySuccess;
      // alert(this.cardModel.customerCode);
      this.$native.run(
        "getinventoryinfo",
        {
          customerCode: this.cardModel.customerCode
        },
        "getinventoryinfo"
      );
    },
    getInventorySuccess(data) {
      // document.write(data);
      try {
        const res = JSON.parse(data).customerInventoryInfoList;
        res.forEach(item => {
          item.hover = false;
          this.report.push(item);
        });
        // this.report = res;
      } catch (error) {
        alert(error);
        this.$native.log(data);
      }
    },
    sexClick(item) {
      //男女
      this.cardModelCopy.sex = item.id;
      console.log(item);
    },
    editClick() {
      if (!this.edit) {
        //alert(this.cardModel.birth);
        let model = JSON.parse(JSON.stringify(this.cardModel));
        this.birth = new Date(model.birth);
        this.cardModelCopy = model;
        window["appBackCall"] = this.appBackCall;
      }
      let is = true;
      if (this.btnText == "保存") {
        console.log(this.cardModelCopy);
        is = this.save();
      }
      console.log(is);
      if (is) {
        this.edit = !this.edit;
        this.btnText = this.edit ? "保存" : "编辑";
      }
    },
    save() {
      const model = this.cardModelCopy,
        oldModel = this.cardModel;
      // if (!model.customerCode) {
      //   this.$toast("档案编号不能为空，请输入档案编号。");
      //   return false;
      // }
      if (!model.cName) {
        this.$toast("姓名不能为空，请输入姓名。");
        return false;
      }
      // if (!model.nation) {
      //   this.$toast("请填写您的民族");
      //   return false;
      // }
      if (!model.uCardNum) {
        if (model.cCardType == 101)
          this.$toast("身份证不能未空，请输入您的身份证号码。");
        else {
          this.$toast("请输入您的其他号码。");
        }
        return;
      }
      if (model.uCardNum) {
        if (model.cCardType == 101) {
          if (model.uCardNum.length != 18) {
            this.$toast("身份证输入不符合要求，请输入您的18位身份证号码。");
            return;
          }
        }
      }
      if (!model.contactAddress) {
        this.$toast("地址不能为空，请输入您的地址。");
        return false;
      }
      if (!model.custOrgProvince) {
        this.$toast("请选中您的省");
        return false;
      }
      if (!model.custOrgCity) {
        this.$toast("请选中您的市");
        return false;
      }
      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!model.mobileTel || !myreg.test(model.mobileTel)) {
        this.$toast("请填写正确联系方式");
        return;
      }
      // updatecustomer
      try {
        window["updatecustomer"] = this.updateCustomer;
        this.$native.run("updatecustomer", model, "updatecustomer");
      } catch (error) {
        alert(error);
      }
      return true;
    },
    modifyHis(model, oldModel) {
      //修改记录
      //修改记录
      if (model.code != oldModel.code) {
        //修改姓名
        this.modifyHisSub("档案编号", model.code);
      }
      if (model.cName != oldModel.cName) {
        //修改姓名
        this.modifyHisSub("姓名", model.cName);
      }
      if (model.nation != oldModel.nation) {
        //修改民族
        this.modifyHisSub("民族", this.modifyNation);
      }
      if (model.sex != oldModel.sex) {
        //修改性别
        let text = sex(model.sex);
        console.log(text);
        this.modifyHisSub("性别", text);
      }
      if (model.birth != oldModel.birth) {
        //出生日期
        this.modifyHisSub("出生日期", model.birth);
      }
      if (model.marriage != oldModel.marriage) {
        const id = this.marriageArr.find(p => p.id == model.marriage);
        this.modifyHisSub("婚姻状况", id.name);
      }
      if (model.cCardType != oldModel.cCardType) {
        //证件类型
        const id = this.idCardArr.find(p => p.id == model.cCardType);
        this.modifyHisSub("证件类型", id.name);
      }
      if (model.uCardNum != oldModel.uCardNum) {
        //证件号
        this.modifyHisSub("证件号", model.uCardNum);
      }
      if (model.contactAddress != oldModel.contactAddress) {
        //证件地址
        this.modifyHisSub("地址", model.contactAddress);
      }
      if (model.custOrgProvince != oldModel.custOrgProvince) {
        //省
        const id = this.province.find(p => p.id == model.custOrgProvince);
        const city = this.city.find(p => p.id == model.custOrgCity);
        this.modifyHisSub("居住地", id.name + "" + city.name);
        return true;
      }
      if (model.custOrgCity != oldModel.custOrgCity) {
        //省没有发生变化市发生了变化
        const id = this.province.find(p => p.id == model.custOrgProvince);
        const city = this.city.find(p => p.id == model.custOrgCity);
        this.modifyHisSub("居住地", id.name + "" + city.name);
      }
      if (model.mobileTel != oldModel.mobileTel) {
        //证件地址
        this.modifyHisSub("手机号", model.mobileTel);
      }
      return true;
    },
    modifyHisSub(t, c) {
      try {
        let histModel = {
          editHistoryCode: "", // 修改记录编号
          customerCode: this.cardModel.customerCode, // 被修改档案编号
          webNickName: this.cardModel.webNickName, // 修改者（用户）姓名
          editTitle: t, // 修改项
          editContent: c // 修改后内容
        };
        this.$native.run("addcustomeredithistory", histModel, "");
      } catch (error) {
        alert(error);
      }
    },
    updateCustomer() {
      this.btnText = "编辑";
      this.edit = false;
      const model = this.cardModelCopy,
        oldModel = this.cardModel;
      this.modifyHis(model, oldModel);
      this.cardModel = JSON.parse(JSON.stringify(this.cardModelCopy));

      this.getHistory(this.cardModel.customerCode);
      // this.$router.push("/index");
      // this.editClick();
    },
    appBack() {
      return true;
    },
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(value) {
      console.log(value);
      this.cardModelCopy.birth = value.format("yyyy-MM-dd");
    },
    idClick(item) {
      this.cardModelCopy.cCardType = item.id;
      this.cardModelCopy.uCardNum = "";
      console.log(item);
    },
    appBackCall() {
      this.edit = false;
      this.btnText = '编辑';
      window["appBackCall"] = this.appBack;
      return false;
    },
    getHistory(code) {
      window["getHistory"] = this.getHistoryList;
      this.$native.run(
        "getcustomeredithistory",
        {
          customerCode: code
        },
        "getHistory"
      );
    },
    getHistoryList(data) {
      const res = JSON.parse(data).customerEditHistoryList;
      this.histList = res;
    },
    nationClick(item) {
      this.cardModelCopy.nation = item.id;
      this.modifyNation = item.name;
    },
    marriageClick(item) {
      this.cardModelCopy.marriage = item.id;
    },
    provinceClick(item) {
      console.log(item);
      let city = [];
      this.cityC = city.concat(this.city.filter(p => p.pCode == item.id));
      this.cardModelCopy.custOrgCity = this.cityC[0].id;
      // this.cardModelCopy.custOrgCity = this.cityId;
      this.cardModelCopy.custOrgProvince = item.id;
    },
    cityClick(item) {
      this.cardModelCopy.custOrgCity = item.id;
    },
    delSubmit() {
      if (this.delCount == 0) {
        this.$toast("请您先选中数据");
        return;
      }
      $vm.$off("submit");
      $vm.$on("submit", this.deSubmitT);
      this.$toastFull(FullTipsVue, true, {
        title: "提示",
        text: "警告：被删除的内容无法恢复。是否继续？",
        canText: "取消",
        subText: "确认"
      });
    },
    reportHover(item) {
      item.hover = !item.hover;
      this.delCount = item.hover ? this.delCount + 1 : this.delCount - 1;
      if(this.delCount <=0){
        this.deCount = 0;
      }
      console.log(item);
    },
    deSubmitT() {
      Indicator.open({
        text: "正在删除报告...",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        this.report.forEach(item => {
          item.isDelete = '1';
          window["updateinventoryinfo"] = this.updateSaveSuccess;
          window["updateSaveError"] = this.updateSaveError;
          this.$native.run(
            "updateinventoryinfo",
            item,
            "updateinventoryinfo",
            "updateSaveError"
          );
        });
      }, 100);
    },
    updateSaveError(data) {
      Indicator.close();
      if (data) this.$toast(data);
    },
    updateSaveSuccess() {
      this.delCount = this.delCount - 1;
      if (this.delCount <= 0) {
        Indicator.close();
        this.report = [];
        this.getInventoryInfo();
        
      }
    }
  },
  beforeDestroy() {
    window["appBackCall"] = this.appBack;
    Indicator.close();
  }
};
</script>

<style lang="less" scoped>
.radio-btn {
  width: 40px;
  height: 40px;
  background: url(../assets/111.png) no-repeat;
  background-size: 100%;
  display: inline-block;
  float: right;
  margin: 10px;
}

.radio-btn.active {
  background: url(../assets/222.png) no-repeat;
  background-size: 100%;
}

ol.to-btns {
  float: right;
  margin: 10px;
  margin-right:20px;
}

ol.to-btns li {
  float: left;
  width: 240px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #3ba6dd !important;
  border-radius: 10px;
  margin-left: 50px;
  color: #989898;
  font-size: 32px;
  line-height: 82px;
}

ol.to-btns li.bor-h {
  border: 1px solid #ff9e35 !important;
}

ol.to-btns li span {
  height: 34px;
  background: #ff9e35;
  border-radius: 50%;
  color: #fff !important;
  font-size: 30px;
  padding: 0 8px;
}

ol.to-btns li i {
  float: left;
  margin-left: 56px;
  margin-top: 20px;
  margin-right: 18px;
  position: initial !important;
}

.carInput {
  margin-left: 120px;
  width: 50%;
  position: absolute;
  left: 100px;
  top: 40px;
}

.province {
  position: absolute !important;
  left: 0px;
  bottom: -20px;
}

.city {
  position: absolute !important;
  left: 200px;
  width: 300px !important;
  bottom: -20px;
}

.idCard {
  padding-top: 20px;
  position: absolute !important;
  top: -72px;
  left: 12px;
  // .select idCard {
  //   position: absolute;
  //   top: -10px;
  //   left: 0px;
  // }

  //font-size: 36px;
  > .select_click_box {
    outline: none !important;
    border: none !important;

    > p {
      padding-left: 0px !important;
    }
  }
}

.all {
  width: 2505px;
  margin: 0 auto;
  height: calc(100% - 180px);
  display: flex;
  justify-content: space-around;
}

.sex {
}

.left-content,
.right-content {
  width: 770px;
  padding-bottom: 15px;

  // padding-top: 40px;
  .border {
    ul,
    ol {
      border: 1px solid #dcdcdc;
      margin: 0 50px;
    }
  }

  .shadow {
    box-shadow: -1px 1px 30px #cacaca;
    border-radius: 10px;

    height: 1500px;
    overflow-y: auto;

    p.edit {
      font-size: 36px;
      color: #3ba6dd;
      text-align: right;
      width: calc(100% -50px);
      height: 95px;
      line-height: 95px;
      padding-right: 50px;
    }
  }
}

.left-content {
  .border {
    ul {
      li {
        border-bottom: 1px dashed #e1e1e1;
        font-size: 32px;
        color: #282828;
        margin: 0 30px;
        padding-bottom: 40px;
        padding-top: 40px;

        label {
          color: #989898;
          position: relative;
        }

        input {
          border: none;
          outline: none;
          width: 70%;
          white-space:nowrap;
          padding-left: 0px;
        }

        span {
          padding-left: 9px;
        }
      }

      li:last-child {
        border: none;
      }
    }
  }
}

.update {
  // margin-top: 40px;
  width: 770px;
  height: 1590px;

  h3 {
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    background: #00a6e7;
    border-radius: 10px 10px 0px 0px;
  }

  .border {
    padding-bottom: 15px;
    // height: 1500px;
    // overflow-y: scroll;
  }

  h2 {
    color: #282828;
    font-size: 36px;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 30px;
    font-weight: bold;
  }

  ol {
    padding-top: 50px;
    max-height: 1400px;
    overflow-y: auto;

    li {
      border-left: 1px dashed #dcdcdc;
      margin-left: 50px;
      padding-left: 35px;
      padding-bottom: 50px;
      position: relative;

      p {
        height: auto;
        line-height: auto;
        font-size: 32px;
        color: #282828;
      }

      p.time {
        font-size: 28px;
        color: #989898;
        margin-bottom: 22px;
      }

      i.icon {
        position: absolute;
        left: -17px;
        top: 0;
      }
    }

    li:last-child {
      border: none;
    }
  }
}

.xingbie ol {
  width: 400px;
}

.dangan {
  h3 {
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    background: #00a6e7;
    border-radius: 10px 10px 0px 0px;
  }
}

.right-content {
  height: 100%;

  .shadow {
    // height: calc(100% -50px);
    height: 1500px;
    overflow-y: auto;
  }

  .hei50 {
    height: 50px;
  }

  ul {
    li {
      margin: 0 50px;
      background: #eef2fa;
      border: 1px solid #3ba6dd;
      margin-bottom: 42px;
      position: relative;

      b {
        display: block;
        font-weight: normal;
        margin: 0 50px;
      }

      b.biaoti {
        font-size: 32px;
        color: #282828;
        padding: 44px 0;
      }

      b.time {
        padding-bottom: 40px;
        font-size: 28px;
        color: #989898;
      }

      i.jiao {
        width: 56px;
        height: 65px;
        background: url(../assets/jiao_03.jpg) no-repeat;
        background-size: 100%;
        display: block;
        position: absolute;
        right: -1px;
        bottom: -1px;
      }
    }
  }
}

.nation {
  position: absolute !important;
  width: 70% !important;
  bottom: 20px;
  // float: right !important;
  // margin-top: 25px;
}
</style>
