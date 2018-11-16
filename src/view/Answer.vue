<template>
<div>
    <app-header :ctitle='countitle' :type='2'>
        <div slot='left' class="left">
            <i class="icon icon-close1"></i>取消体质辨识
        </div>
    </app-header>
    <div v-show="!isAnswer">
        <div class="answer shadow ">
            <h2>{{currentAnswer.title}}</h2>
            <ul>
                <li v-for="(model,i) in currentAnswer.table" :key="i" :class="{active:i == answerHover-1}" @click="selAnswer(model,i,$event)">{{model}}</li>
                <!-- <li>{{item.B || answerMolde.B}}</li>
                <li>{{item.C || answerMolde.C}}</li>
                <li>{{item.D || answerMolde.D}}</li>
                <li>{{item.E || answerMolde.E}}</li> -->
            </ul>
        </div>
        <div class="button-jh fang clearfix">
            <button  class="button jh fl prev" @click="prev"  :class="{'btn-active':index > 1}">上一题</button>
            <button  class="button jh fr" @click="next">下一题</button>
        </div>
    </div>
    <!--答题完成-->
    <div v-show="isAnswer">
        <div class="answered ">
            <dl>
                <dt></dt>
                <dd>已完成所有辨识题目</dd>
                <dd>请将设备交还医师</dd>
            </dl>
        </div>
        <div class="button-jh wid500 fang">
            <button class="button jh " @click="submit">进入体质辨识报告</button>
            <!-- <a href="jvascript:void(0)" >进入体质辨识报告</a> -->
        </div>
    </div>
</div>
</template>

<script>
import tipsVue from "@/components/FullTips";
import TipsAnswerVue from "./TipsAnswer.vue";
export default {
  data() {
    return {
      answer: [],
      index: 1,
      //   currentAnswer: {},
      countitle: "辨识答题(1/33)",
      isAnswer: false,
      query: {},
      isAnswerNext: 0,
      subModel: {
        auditDate: "",
        customerCode: "",
        question1: "",
        question10: "",
        question11: "",
        question12: "",
        question13: "",
        question14: "",
        question15: "",
        question16: "",
        question17: "",
        question18: "",
        question19: "",
        question2: "",
        question20: "",
        question21: "",
        question22: "",
        question23: "",
        question24: "",
        question25: "",
        question26: "",
        question27: "",
        question28: "",
        question29: "",
        question3: "",
        question30: "",
        question31: "",
        question32: "",
        question33: "",
        question34: "",
        question35: "",
        question36: "",
        question37: "",
        question38: "",
        question39: "",
        question4: "",
        question40: "",
        question41: "",
        question42: "",
        question43: "",
        question44: "",
        question45: "",
        question46: "",
        question47: "",
        question48: "",
        question49: "",
        question5: "",
        question50: "",
        question51: "",
        question52: "",
        question53: "",
        question54: "",
        question55: "",
        question56: "",
        question57: "",
        question58: "",
        question59: "",
        question6: "",
        question60: "",
        question7: "",
        question8: "",
        question9: "",
        reportType: "",
        blockContent: "", //调理方案Html字串
        jieqiContent: "", //节气养生Html字串
        promptContent: "", //温馨提示Html字串
        ysjyContent: "" //医师建议Html字串
      },
      defaultModel: [
        "A. 没有（从来没有）",
        "B. 很少（可以忽略）",
        "C. 有时（偶尔出现）",
        "D. 经常（有规律）",
        "E. 总是（一直有）"
      ],
      answerHover: -1
    };
  },
  computed: {
    currentAnswer() {
      return (
        this.answer[this.index - 1] || {
          title: ""
        }
      );
    }
  },
  mounted() {
    this.query = this.$route.query;
    //获得测评数据
    this.getHxJson();
    const cardModel = this.$cache.get(this.$cacheEnum["cardModel"]);
    //获取客户编号
    this.subModel.customerCode = cardModel.customerCode;
    setTimeout(() => {
      $vm.$on("tipsBack", this.tips); //检测是否回退

      $vm.$on("submit", this.sub);
    }, 1);
  },
  methods: {
    selAnswer(item, i, e) {
      if (this.isAnswerNext > 0) {
        return;
      }
      this.answerHover = i + 1;

      this.isAnswerNext = 1;
      setTimeout(() => {
        this.isAnswerNext = 0;
        this.next();
      }, 300);
    },
    hisAnswer(prev = false) {
      let i = this.index;
      console.log(i);
      if (prev) {
        //恢复答案
        this.index--;
        this.answerHover = this.subModel["question" + this.index];
      } else {
        const i2 = i + 1,
          next = this.subModel["question" + i2];
        this.subModel["question" + i] = this.answerHover; //保存这次答案
        if (next) {
          //如果下一题答过 重新赋值选中上一次的答案
          this.answerHover = next;
        } else {
          this.subModel["question" + i] = this.answerHover;
          //恢复选中答案默认值
          this.answerHover = -1;
        }
        this.index++;
      }
      this.setTitle();
    },
    next() {
      //下一题
      if (this.isAnswerNext > 0) {
        return;
      }
      if (this.answerHover == -1) {
        this.$toast("请选择答案");
        return;
      }
      if (this.answer.length > this.index) {
        //记录答案
        this.hisAnswer();
        return;
      }
      this.hisAnswer();
      this.isAnswer = true;
      this.countitle = `辨识答题`;
      //this.submit();
      //this.uploadReportSuccess();
    },
    submit() {
      let model = this.subModel;
      model.reportType = this.answer.length;
      window["uploadreport"] = this.uploadReportSuccess;
      // document.write(JSON.stringify(model));
      this.$native.run("addinventoryinfo", model, "uploadreport");
    },
    uploadReportSuccess(data) {
      // document.write(data);
      let res = JSON.parse(data);
      if (!res.mainPhysical) {
        this.$toastFull(TipsAnswerVue);
        return;
      }
      this.$cache.set(this.$cacheEnum["report"], JSON.parse(data));
      this.$router.replace("/IdentificationReport?type=1");

      // {"auditDate":"","blockContent":"","cId":"","createdOnUTC":1540194666448,"creator":"","customerCode":"customer1540194338874","gwauditDate":"","inventoryCode":"inventory1540194666448","isAudit":"0","isDelete":"0","isupload":"0","jieqiContent":"","mainPhysical":"","mainPhysicalScore":0,"modifier":"","pingheScore":50,"pingheType":"0","promptContent":"","qixuScore":0,"qixuType":"0","qiyuScore":0,"qiyuType":"0","question1":"1","question10":"2","question11":"1","question12":"2","question13":"1","question14":"2","question15":"1","question16":"2","question17":"1","question18":"2","question19":"1","question2":"2","question20":"1","question21":"2","question22":"1","question23":"2","question24":"1","question25":"2","question26":"1","question27":"2","question28":"1","question29":"2","question3":"1","question30":"2","question31":"1","question32":"2","question33":"1","question34":"2","question35":"1","question36":"2","question37":"1","question38":"2","question39":"1","question4":"2","question40":"1","question41":"2","question42":"1","question43":"2","question44":"1","question45":"2","question46":"1","question47":"2","question48":"1","question49":"2","question5":"1","question50":"2","question51":"1","question52":"2","question53":"1","question54":"2","question55":"1","question56":"2","question57":"1","question58":"2","question59":"1","question6":"2","question60":"1","question7":"2","question8":"1","question9":"2","reportType":"60","shireScore":0,"shireType":"0","tanshiScore":0,"tanshiType":"0","tebingScore":0,"tebingType":"0","testDate":"","upFlag":"0","updatedOnUTC":1540194666448,"xueyuScore":0,"xueyuType":"0","yangxuScore":0,"yangxuType":"0","yinxuScore":0,"yinxuType":"0","ysjyContent":""}
      // const res = JSON.parse(data);
      // if (res.state == 0) {
      //   alert("提交成功");
      // }
    },
    prev() {
      //上一题
      if (this.index > 1) {
        this.hisAnswer(true); //选中上一题的答案
      }
    },
    sub() {
      $appBack(true);
    },
    setTitle() {
      this.countitle = `辨识答题(${this.index}/${this.answer.length})`;
    },
    tips() {
      this.$toastFull(tipsVue, true, {
        title: "提示",
        text: "退出将导致本次体质辨识失败，确认退出？",
        subText: "确认"
      });
    },
    getHxJson() {
      //获取测评数据
      try {
        window["getjson"] = this.getJson;
        let fun = "getgwjson";
        if (this.query.type == 1) fun = "gethxjson";
        //  alert(fun);
        this.$native.run(fun, "", "getjson");
      } catch (error) {
        alert(error);
      }
    },
    getJson(data) {
      try {
        const res = JSON.parse(data);
        console.log(res, res.questions.length);
        const titleArr = ["A. ", "B. ", "C. ", "D. ", "E. ", "F. ", "G. "];
        res.questions.forEach(item => {
          const arrSplit = item.split("|");
          let answerModel = {};
          answerModel.table = [];
          arrSplit.forEach((model, i) => {
            if (i == 0) {
              answerModel.title = arrSplit[i];
            }
            answerModel.table[i - 1] = titleArr[i - 1] + arrSplit[i];
          });
          if (answerModel.table.length == 0)
            answerModel.table = this.defaultModel;
          this.answer.push(answerModel);
        });
        //开始答题
        this.setTitle(); //设置标题
      } catch (error) {
        alert(error);
      }
    }
  },
  beforeDestroy() {
    $vm.$off("tipsBack", this.tips);
    $vm.$off("submit", this.sub);
  }
};
</script>

<style lang="less" scoped>
.btn-active {
  background-color: #249dcc !important;
}

.button-jh {
  width: 860px;
  margin: 0 auto;
  margin-top: 65px;

  .button {
    width: 370px;
  }

  .prev {
    background: #d1d8db;
  }
}

.wid500 {
  width: 500px;
  margin-top: 160px;

  .button {
    width: 500px;
  }
}

.answer {
  width: 2400px;
  height: 1045px;
  background: #fff;
  margin: 0 auto;
  margin-top: 90px;
  background: url(../assets/yuan_03.png) repeat-y;
  background-size: 28px 57px;
  background-position: 12px 15px;
  padding-bottom: 110px;

  h2 {
    // text-align: center;
    margin-left: 40px;
    font-size: 40px;
    color: #282828;
    padding-top: 115px;
    padding-left: 60px;
  }

  ul {
    margin-top: 90px;

    li {
      width: 1000px;
      background: #f2f2f2;
      border-radius: 100px;
      border: 1px solid #dcdcdc;
      margin: 0 auto;
      margin-left: 80px;
      padding: 30px 45px;
      color: #656565;
      font-size: 40px;
      margin-bottom: 40px;
    }

    li.active {
      background: #3ba6dd;
      color: #fff;
    }

    li:last-child {
    }
  }
}

.answered {
  dl {
    width: 500px;
    margin: 0 auto;
    margin-top: 250px;

    dt {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      margin-bottom: 55px;
      background: url(../assets/ok.png) no-repeat;
      background-size: 100%;
    }

    dd {
      text-align: center;
      margin-bottom: 45px;
      font-size: 36px;
      color: #282828;
    }
  }
}

.icon-close1 {
  background-image: url("../assets/close1.png");
  background-repeat: no-repeat;
  height: 74px;
  width: 80px;
  background-size: 80%;
  display: inline-block;
  vertical-align: middle;
}

.left {
  color: #989898;
}
</style>

<style>
body {
  background: #f5f5f5;
}
</style>
