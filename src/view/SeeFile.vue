<template>
<div style="height: 100%;">
    <app-header :ltitle='"后退"' :ctitle='"查看档案"'></app-header>
    <div class="clearfix all">
        <div class="left-content fl">
            <div class="dangan">
                <h3>居民档案信息</h3>
                <div class="shadow">
                    <p class="edit" @click="editClick">{{btnText}}</p>
                    <div class="border">
                        <ul v-if="!edit">
                            <li><label for="">姓名：</label><span>{{cardModel.cName}}</span></li>
                            <li><label for="">性别：</label><span>{{cardModel.sex | sex}}</span></li>
                            <li><label for="">民族：</label><span>{{cardModel.nation}}</span></li>
                            <li><label for="">出生：</label><span>{{cardModel.birth}}</span></li>
                            <li><label for="">{{cardModel.cCardType | cardType}}：</label><span>{{cardModel.uCardNum}}</span></li>
                            <li><label for="">地址：</label><span>{{cardModel.contactAddress}}</span></li>
                        </ul>
                        <ul v-if="edit">
                            <li><i class="must">*</i><label for="">姓名：</label>
                                <input type="text" v-model="cardModelCopy.cName"> </li>
                            <li class="sex xingbie"><i class="must">*</i><label for="">性别：</label>
                                <app-sex :defaultHover='cardModelCopy.sex'></app-sex>
                            </li>
                            <li><i class="must">*</i><label for="">民族：</label><input type="text" v-model="cardModelCopy.nation"> </li>
                            <li><i class="must">*</i><label for="">出生：</label> <span @click="openPicker">{{cardModelCopy.birth}}</span>
                                <mt-datetime-picker @confirm="handleConfirm" ref="picker" type="date" v-model="cardModelCopy.birth" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
                                </mt-datetime-picker> <!-- @confirm="handleConfirm" -->
                            </li>
                            <li style='position:relative;'><i class="must">*</i><label for="" style="position:relative;display:block">
                      <app-select class="idCard" style="" :opotionList='idCardArr' :id='cardModelCopy.cCardType' @opotion='idClick'></app-select>
                    </label>
                     <input type="text"  class='carInput' style="" v-model="cardModelCopy.uCardNum"></li>
                            <li><i class="must">*</i><label for="">地址：</label><input type="text" v-model="cardModelCopy.contactAddress"></li>
                        </ul>
                    </div>
                    <div style="height: 25px;"></div>
                </div>
            </div>

            <div class="shadow update">
                <h2>修改记录</h2>
                <div class="border">
                    <ol>
                        <li>
                            <p class="time">2018-08-21</p>
                            <p>李四 把性别修改为男</p>
                            <i class="icon radio active"></i>
                        </li>
                        <li>
                            <p class="time">2018-08-21</p>
                            <p>李四 把性别修改为男</p>
                            <i class="icon radio active"></i>
                        </li>
                        <li>
                            <p class="time">2018-08-21</p>
                            <p>李四 把性别修改为男</p>
                            <i class="icon radio active"></i>
                        </li>
                        <li>
                            <p class="time">2018-08-21</p>
                            <p>李四 把性别修改为男</p>
                            <i class="icon radio active"></i>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="right-content dangan fr">
            <h3>体质辨识报告信息</h3>
            <div class="shadow">
                <div class="hei50"></div>
                <ul>
                    <li>
                        <b class="biaoti">体质辨识报告    张三</b>
                        <b class="time">2018-05-02</b>
                        <i class="jiao"></i>
                    </li>
                    <li>
                        <b class="biaoti">体质辨识报告    张三</b>
                        <b class="time">2018-05-02</b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cardModel: {},
      edit: false,
      btnText: "编辑",
      cardModelCopy: {},
      idCardArr: [
        {
          id: 101,
          name: "身份证"
        },
        {
          id: 105,
          name: "其他"
        }
      ]
    };
  },
  mounted() {
    this.cardModel = this.$cache.get(this.$cacheEnum["cardModel"]);
  },
  methods: {
    editClick() {
      if (!this.edit) {
        this.cardModelCopy = JSON.parse(JSON.stringify(this.cardModel));
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
      if (!model.cName) {
        this.$toast("请填写您的姓名");
        return false;
      }
      if (!model.nation) {
        this.$toast("请填写您的民族");
        return false;
      }
      if (!model.uCardNum) {
        this.$toast("请填写您的证件号");
        return false;
      }
      if (!model.contactAddress) {
        this.$toast("请填写您的地址");
        return false;
      }
      this.modifyHis(model, oldModel);
      return true;
    },
    modifyHis(model, oldModel) {
      //修改记录
      if (mode.cName != oldModel.cName) {
        //修改姓名
      }
      if (mode.nation != oldModel.nation) {
        //修改民族
      }
      if (mode.sex != oldModel.sex) {
        //修改性别
      }
      if (mode.birth != oldModel.birth) {
        //出生日期
      }
      if (mode.cCardType != oldModel.cCardType) {
        //证件类型
      }
      if (mode.uCardNum != oldModel.uCardNum) {
        //证件号
      }
      if (mode.contactAddress != oldModel.contactAddress) {
        //证件地址
      }
      return true;
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
      window["appBackCall"] = this.appBack;
      return false;
    }
  },
  beforeDestroy() {
    window["appBackCall"] = this.appBack;
  }
};
</script>

<style lang="less" scoped>
.carInput {
  margin-left: 120px;
  width: 50%;
  position: absolute;
  left: 100px;
  top: 40px;
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
  width: 1635px;
  margin: 0 auto;
  height: calc(100% - 180px);
}

.sex {
}

.left-content,
.right-content {
  width: 770px;
  padding-top: 40px;

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
        padding-bottom: 32px;
        padding-top: 32px;

        label {
          color: #989898;
          position: relative;
        }

        input {
          border: none;
          outline: none;
          width: 70%;
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

  .update {
    margin-top: 30px;

    .border {
      padding-bottom: 15px;
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
      padding-top: 45px;
      max-height: 220px;
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
    height: calc(100% -50px);
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
</style>
