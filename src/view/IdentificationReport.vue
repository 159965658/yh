<template>
<div style="height: 100%;">
    <app-header :ltitle='"后退"' :ctitle='title'></app-header>
    <div class="scroll">
        <div class="report">
            <div class="shadow">
                <h2>中医体质辨识报告</h2>
                <ul class="title">
                    <li><label for="">姓名</label><span class="flowell">{{card.cName}}</span></li>
                    <li><label for="">性别</label><span>{{card.sex | sex}}</span></li>
                    <li><label for="">出生年月</label><span>{{card.birth}}</span></li>
                    <li><label for="">测评日期</label><span>{{report.testDate}}</span></li>

                </ul>
                <ul class="title2">
                   <li><label for="">测评日期</label><span>{{report.testDate}}</span></li> 
                    <li><label for="">季节</label><span>{{report.testDate | season}}</span></li>
                    <li><label for="">节气</label><span>{{report.testDate | throttle}}</span></li>
                    <li><label for="">农历日期</label><span>{{report.testDate | lunarDate}}</span></li>
                </ul>
                <div class="bor-b">
                    <h3><i></i>体质类型</h3>
                    <h6>
                        根据测评，您的体质类型为<span style="" v-html="tizhi"></span>
                        体质得分情况如下：
                        <!-- <div class="echart">		    		<ol class="clearfix">		    		<li><i class="icon mian"></i>柱状图</li>		    		<li><i class="icon line"></i>折线图</li>		    		</ol>		    		</div> -->
                    </h6>
                    <div class="echarts-img" id="myChart">
                        <!-- <img src="../assets/echarts.jpg" alt="" /> -->
                        <!-- <div id="myChart" ></div> -->
                    </div>
                    <p class="pingjia" v-if="report.reportType == 60" v-html="mainTizhi.yihuanb">先天禀赋良好，后天调养得当，身体健壮，平素患病较少。</p>
                    <ol class="clearfix">
                        <li><label for="">体质类型</label>{{mainPhysicalStr[0]}}</li>
                        <li><label for="">理想分数</label>{{mainFirstScope}}</li>
                        <li><label for="">体质得分</label>{{mainFirst}} <i class="icon up"></i></li>
                    </ol>
                </div>

                <ul class="table-ul">
                    <li>体质类型</li>
                    <li>平和质</li>
                    <li>气虚质</li>
                    <li>阳虚质</li>
                    <li>阴虚质</li>
                    <li>痰湿质</li>
                    <li>湿热质</li>
                    <li>血瘀质</li>
                    <li>气郁质</li>
                    <li>特禀质</li>
                </ul>
                <ul class="table-ul" v-if="report.reportType == 60">
                    <li>理想分数</li>
                    <li>≥60</li>
                    <li>≤40</li>
                    <li>≤40</li>
                    <li>≤40</li>
                    <li>≤40</li>
                    <li>≤40</li>
                    <li>≤40</li>
                    <li>≤40</li>
                    <li>≤40</li>
                </ul>
                <ul class="table-ul" v-else>
                    <li>理想分数</li>
                    <li>≥17</li>
                    <li>≤10</li>
                    <li>≤10</li>
                    <li>≤10</li>
                    <li>≤10</li>
                    <li>≤10</li>
                    <li>≤10</li>
                    <li>≤10</li>
                    <li>≤10</li>
                </ul>
                <ul class="table-ul" v-if="report.reportType == 60">
                    <li>目前得分</li>
                    <li>{{report.pingheScore}} <span v-if="report.pingheScore >= 60">↑</span><span v-else>↓</span> </li>
                    <li>{{report.qixuScore}} <span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span></li>
                    <li>{{report.yangxuScore}} <span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span> </li>
                    <li>{{report.yinxuScore}} <span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span></li>
                    <li>{{report.tanshiScore}} <span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span></li>
                    <li>{{report.shireScore}}<span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span> </li>
                    <li>{{report.xueyuScore}} <span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span></li>
                    <li>{{report.qiyuScore }}<span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span></li>
                    <li>{{report.tebingScore}} <span v-if="report.pingheScore <= 40">↑</span><span v-else>↓</span></li>
                </ul>
                <ul class="table-ul" v-else>
                    <li>目前得分</li>
                    <li>{{report.pingheScore}} <span v-if="report.pingheScore >= 17">↑</span><span v-else>↓</span> </li>
                    <li>{{report.qixuScore}} <span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span></li>
                    <li>{{report.yangxuScore}} <span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span> </li>
                    <li>{{report.yinxuScore}} <span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span></li>
                    <li>{{report.tanshiScore}} <span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span></li>
                    <li>{{report.shireScore}}<span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span> </li>
                    <li>{{report.xueyuScore}} <span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span></li>
                    <li>{{report.qiyuScore }}<span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span></li>
                    <li>{{report.tebingScore}} <span v-if="report.pingheScore <= 10">↑</span><span v-else>↓</span></li>
                </ul>
                <div class="">
                    <h3><i></i>体质解析</h3>
                    <div v-for="(item,i) in mainPhysicalStr" :key="i" v-if="item">
                        <!-- <p class="nr" >{{item}}</p> -->
                        <p class="nr" v-html="tizhij(item)">常见表现：面色、肤色润泽，头发稠密有光泽，目光有神，鼻色明润，嗅觉通利，味觉正常，唇色红润，精力充沛，不易疲劳，耐受寒热，睡眠安和，胃纳良好，二便正常。</p>
                    </div>
                </div>
            </div>

            <div class="shadow" v-if='query.type == 0'>
                <h2>中医体质辨识报告</h2>
                <!-- <div class="bor-b">
                    <p class="nr">夏至是一年之中阳气最旺的节气，气候趋于炎热，人们更喜欢长时间呆在空调房中。 温度低，不通风的空调环境，不利于机体阳气的舒展，寒湿之气的驱除。 建议少吹空调，少在空调房停留，尽量多到户外活动，借助自然界的阳气培补自身的阳气，促进腠理开泄，排除湿气与寒气。 炎热烦躁之时，可试着调整呼吸，使心神安静，体会夏日的清爽宁静。</p>
                </div>
                <div class="bor-b">
                    <h3><i></i>原则</h3>
                    <p class="nr">健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。</p>
                </div> -->
                  <div class="bor-b">
                    <h3><i></i>节气养生</h3>
                    <div class="html-fu" v-html="report.jieqiContent">

                    </div>
                </div>
                <div class="bor-b">
                    <h3><i></i>调理建议</h3>
                    <div class="html-fu" v-html="report.blockContent ">
                        <div class="bor-b">
                            <h3><i></i>膳食调理</h3>
                            <p class="nr">适宜食物:</p>
                            <p class="nr">谷物类： 黄豆 粳米 糯米 肉食类： 海参 兔肉 蔬菜类： 黑木耳 山药 白菜 果品类： 梨 核桃 苹果</p>
                            <p class="nr">注意事项</p>
                            <p class="nr">饮食宜有节制、四季营养合理搭配；多食五谷杂粮、蔬菜水果，少食过于油腻及辛辣之物。</p>
                            <p class="nr">精选食谱:</p>
                            <p class="nr">红枣党参烧海参</p>
                            <p class="nr">【配方】</p>
                            <p class="nr">红枣10枚，党参12克，海参50克，黑木耳30克，胡萝卜100克，鸡汤300毫升，绍酒、葱、姜、盐、素油各适量。</p>
                            <p class="nr">【功效】</p>
                            <p class="nr">补气补血，添精益髓</p>
                            <p class="nr">【用法】</p>
                            <p class="nr">佐餐食用</p>
                            <p class="nr">【制作】</p>
                            <p class="nr">将红枣洗净、去核；海参洗净、发透，切成长条；黑木耳发透，去蒂根，撕成瓣；胡萝卜切成4厘米长、3厘米宽的块；姜拍松，葱切段；把锅置火上烧热，加入素油，烧至六成热时，加入葱、姜爆香，投入海参，加绍酒、盐、党参、红枣、黑木耳、胡萝卜，炒匀，再加入鸡汤用文火烧至浓稠即成。</p>
                            <p class="nr">观音面茶</p>
                            <p class="nr">【配方】</p>
                            <p class="nr">黑芝麻500克，藕粉500克，粳米500克，白糖500克，淮山药500克。</p>
                            <p class="nr">【用法】</p>
                            <p class="nr">每次根据个人食量，取30克左右，用白开水冲调服食。作早点或加餐用。</p>
                            <p class="nr">【制作】</p>
                            <p class="nr">将芝麻、粳米、山药分别炒熟，研成细末，过筛，取细粉；将上细粉与藕粉、白糖混匀，用瓷罐收</p>
                        </div>
                        <div class="bor-b">
                            <h3><i></i>起居调理</h3>
                            <p class="nr">穴位按摩:</p>
                            <p class="nr">起居有常，不妄作劳，顺应四时，悉心调护。起居有常，不妄作劳。顺从人体的生物钟调理起居，有规律地生活，合理安排学
                                习、工作、睡眠、休息，养成良好的起居习惯。起居规律，能保养神气，使人体精力充沛，生命力旺盛。否则，恣意妄行，逆于生乐，以酒为浆，以妄为常，就
                                会导致脏腑功能损害，精神不振，适应能力减退，体质下降，引起早衰或疾病。正如《素问？上古天真论》所说 “起居无节，故半百而衰也。”
                                顺应四时，调摄起居春季起居保健《素问？四气调神大论》指出：“春三月，此为发陈，天地俱生，万物以荣，夜
                                卧早起，广步于庭，被发缓形，以使志生。”春天是万物欣欣向荣、推陈出新的季节。宜晚卧早起，起床后宜在室外悠然自得、无拘无束地散步，以顺应春季升发条达的气机。夏季起居保健《素问？四气调神大论》指出：“夏三月，此谓蕃秀，天地之交，万物华实，夜卧早起，无厌于日。”夏天是阴阳两气相交，万物荣华充实、繁茂秀丽的季节。应当晚些入睡，早点起床，多活动，顺应阳气的充盈和盛实，利于气血活动，振奋精神。夏日漫长，中午建议适当午休，以消除疲劳，提高下午的工作和学习效率。夜晚在外乘凉不要过晚，以免引起疾病。秋季起居保健《素问？四气调神大论》指出：“秋三月，此谓容平，天地以急，地气以明，早卧早起，与鸡俱兴。”秋季，阴气渐盛，阳气渐收，万物结实，应早睡早起，以应秋天收敛之气。早睡一点是顺应阴精的收藏，早一点起床，是顺应阳气的舒
                                。冬季起居保健《素问？四气调神大论》指出：“冬三月，此谓闭藏，水冰地坼，无扰乎阳；早卧晚起，必待日光。”冬天天地万物处在闭藏状态，应早睡晚起，避寒就温，顺应冬天潜藏之气。注意衣着保暖，特别是脚部的保暖，以增强人体抗寒能力，减少感冒和其他疾病的发生。此外，衣着也不宜过厚，若出汗过多，亦损伤阳气。</p>
                        </div>
                        <div class="bor-b">
                            <h3><i></i>经络调理</h3>
                            <p class="nr">穴位按摩:</p>
                            <p class="nr">起居有常，不妄作劳，顺应四时，悉心调护。起居有常，不妄作劳。顺从人体的生物钟调理起居，有规律地生活，合理安排学
                                习、工作、睡眠、休息，养成良好的起居习惯。起居规律，能保养神气，使人体精力充沛，生命力旺盛。否则，恣意妄行，逆于生乐，以酒为浆，以妄为常，就
                                会导致脏腑功能损害，精神不振，适应能力减退，体质下降，引起早衰或疾病。正如《素问？上古天真论》所说 “起居无节，故半百而衰也。”
                                顺应四时，调摄起居春季起居保健《素问？四气调神大论》指出：“春三月，此为发陈，天地俱生，万物以荣，夜
                                卧早起，广步于庭，被发缓形，以使志生。”春天是万物欣欣向荣、推陈出新的季节。宜晚卧早起，起床后宜在室外悠然自得、无拘无束地散步，以顺应春季升发条达的气机。夏季起居保健《素问？四气调神大论》指出：“夏三月，此谓蕃秀，天地之交，万物华实，夜卧早起，无厌于日。”夏天是阴阳两气相交，万物荣华充实、繁茂秀丽的季节。应当晚些入睡，早点起床，多活动，顺应阳气的充盈和盛实，利于气血活动，振奋精神。夏日漫长，中午建议适当午休，以消除疲劳，提高下午的工作和学习效率。夜晚在外乘凉不要过晚，以免引起疾病。秋季起居保健《素问？四气调神大论》指出：“秋三月，此谓容平，天地以急，地气以明，早卧早起，与鸡俱兴。”秋季，阴气渐盛，阳气渐收，万物结实，应早睡早起，以应秋天收敛之气。早睡一点是顺应阴精的收藏，早一点起床，是顺应阳气的舒
                                。冬季起居保健《素问？四气调神大论》指出：“冬三月，此谓闭藏，水冰地坼，无扰乎阳；早卧晚起，必待日光。”冬天天地万物处在闭藏状态，应早睡晚起，避寒就温，顺应冬天潜藏之气。注意衣着保暖，特别是脚部的保暖，以增强人体抗寒能力，减少感冒和其他疾病的发生。此外，衣着也不宜过厚，若出汗过多，亦损伤阳气。</p>
                        </div>
                    </div>
                </div>
              
                <div class="bor-b">
                    <h3><i></i>医师建议 <span>根据测评，您的体质类型为平和质,体质得分情况如下：</span></h3>
                    <div class="html-fu" v-html="report.ysjyContent ">
                        <p class="qingkuang"></p>
                        <p class="qianming">医师签名：</p>
                    </div>

                </div>
                <div class="bor-b tip">
                    <h3><i></i>温馨提示</h3>

                    <div class="html-fu" v-html="report.promptContent">
                    </div>
                    <!-- <div class="html-fu" v-else v-html="report.promptContent">
                        <p class="nr">1.若您已患某种疾病，请您遵医嘱接受治疗和调护。</p>
                        <p class="nr">2.若已患糖尿病、高脂血症、痛风、肥胖等疾病，应遵照相应的膳食规定。如：糖尿病少食高糖类食物；</p>
                        <p class="nr">3.高脂血症及肥胖应少食高胆固醇、高糖、高脂肪食物；</p>
                        <p class="nr">4.痛风禁食海鲜类等嘌呤含量较高的食物。</p>
                        <p class="nr">5.根据体质的易患疾病，请您提高警惕，防患于未然，定期进行相关检查；</p>
                        <p class="nr">6.若有其他疑问，欢迎致“KY3H 全国客服电话”（86）4008118899 或 访问www.ky3h.com 进行咨询</p>
                    </div> -->
                </div>
            </div>
            <div class="shadow" v-if="query.type == 1">
                <h2>中医体质辨体施养方案</h2>
                <div class="bor-b">
                    <h3><i></i>节气养生</h3>
                    <div class="html-fu">
                        <i class="icon icon-add" @click="next(2)"></i>
                        <div id="editor" class="editor" type="text/plain"></div>
                    </div>
                </div>
                <div class="bor-b">
                    <h3><i></i>调养方案</h3>
                    <div class="html-fu">
                        <i class="icon icon-add" @click="next(1)"></i>
                        <div id="editor1" class="editor" type="text/plain"></div>
                    </div>
                </div>
                <div class="bor-b">
                    <h3><i></i>医师建议</h3>
                    <div class="html-fu">
                        <i class="icon icon-add" @click="next(3)"></i>
                        <div id="editor2" class="editor" type="text/plain"></div>
                    </div>
                </div>
                <div class="bor-b">
                    <h3><i></i>温馨提示</h3>
                    <div class="html-fu">
                        <i class="icon icon-add" @click="next(4)"></i>
                        <div id="editor3" class="editor" type="text/plain"></div>
                    </div>
                </div>
                <div class="button-jh fang">
                    <button class="button jh" @click="updateSave">保存</button>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import { Indicator } from "mint-ui";
import { throttle } from "@/filters/index";
import { jieqi } from "../../static/dict/jieqi.js";

import { tizhi, tizhiGong } from "../../static/dict/tizhi.js";

import { tiaoyang, tiaoyangGong } from "../../static/dict/tiaoyang.js";
import FullTipsVue from "../components/FullTips.vue";

export default {
  data() {
    return {
      card: {
        cName: ""
      },
      report: {},
      query: {},
      title: "体质辨识报告",
      type: 1,
      baseList: [],
      tizhi: "",
      saveFlag: false,
      mainPhysicalStr: [],
      mainFirst: 0,
      mainTizhi: {},
      mainFirstScope: 0 //第一体质的理想分数
    };
  },
  computed: {},
  filters: {
    rtrim(value) {
      return value.substring(0, value.length - 1);
    }
  },
  mounted() {
    Indicator.open({
      text: "正在生成报告...",
      spinnerType: "fading-circle"
    });
    this.card = this.$cache.get(this.$cacheEnum["cardModel"]);
    this.report = this.$cache.get(this.$cacheEnum["report"]);
    // document.write(JSON.stringify(this.report));
    this.query = this.$route.query;
    const maArr = this.report.mainPhysical.split(",");
    if (this.report.reportType == 60) {
      this.mainPhysicalStr = maArr;
    } else {
      this.mainPhysicalStr.push(maArr[0]);
    }
    //获取第一个体质得分
    this.getFirst();
    // console.log(this.mainPhysicalStr);
    let th = this;
    setTimeout(() => {
      this.drawLine();
      if (th.query.type == 1) th.ueInit();
      Indicator.close();
    }, 100);
    if (this.query.type == 1) {
      this.title = "编辑体质辨识报告";
    }
    this.getKnowledge(2);
    this.tizhi = this.sicalFilter();
    // document.write(JSON.stringify(this.report));
  },
  methods: {
    getFirst() {
      const first = this.mainPhysicalStr[0],
        re = this.report;
      let val = "";
      let scope = "≤";
      let scopeGong = "≤";
      switch (first) {
        case "平和质":
          val = re.pingheScore;
          scope = "≥80";
          scopeGong = "≥17";
          break;
        case "气虚质":
          val = re.qixuScore;
          scope = "≤40";
          scopeGong = "≤10";
          break;
        case "阳虚质":
          val = re.yangxuScore;

          scope = "≤40";
          scopeGong = "≤10";
          break;
        case "阴虚质":
          val = re.yinxuScore;

          scope = "≤40";
          scopeGong = "≤10";
          break;
        case "痰湿质":
          val = re.tanshiScore;

          scope = "≤40";
          scopeGong = "≤10";
          break;
        case "湿热质":
          val = re.shireScore;

          scope = "≤40";
          scopeGong = "≤10";
          break;
        case "血瘀质":
          val = re.qiyuScore;

          scope = "≤40";
          scopeGong = "≤10";
          break;
        case "特禀质":
          val = re.tebingScore;

          scope = "≤40";
          scopeGong = "≤10";
          break;
        default:
          break;
      }
      this.mainTizhi = tiaoyang.find(p => p.id == first);
      if (re.reportType == 60) {
        this.mainFirstScope = scope;
      } else {
        this.mainFirstScope = scopeGong;
      }
      this.mainFirst = val;
      return val;
    },
    tizhij(value) {
      console.log(tizhi, value);
      if (this.report.reportType == 33) {
        const key = this.sicalGong();
        return tizhiGong.find(p => p.id == key).name;
      }
      return tizhi.find(p => p.id == value).name;
    },
    sicalFilter: function() {
      let report = this.report,
        value = report.mainPhysical;
      //如果只有一个选项
      if (report.reportType == 33) {
        //公卫版
        const arr = value.split(",");
        return arr[0] + "。";
      } else if (report.reportType == 60) {
        //去掉最后一个逗号
        //value = value.ToString().RTrim(",");
        //专业版
        const arr = value.split(",");
        arr.pop();
        if (arr.length == 1) {
          //查看是否是平和体质
          if (arr[0] == "平和质") {
            return "<span class='bl'>平和质。</span>";
          } else {
            return `<span class='bl'>${
              arr[0]
            }</span>,属<span class='bl'>偏颇体质</span>`;
          }
        } else {
          //value = value.substring(0, value.length - 1);
          if (report.mainPhysicalScore >= 40) {
            return `<span class='bl'>兼夹体质</span>。主要体质类型为<span class='bl'>${value}</span>属<span class='bl'>偏颇体质</span>`;
          } else {
            return `基本是<span class='bl'>平和质</span>,有<span class='bl'>${value}</span>倾向,属<span class='bl'>兼夹体质</span>`;
          }
        }
      }
    },
    sicalGong() {
      let report = this.report,
        value = report.mainPhysical;
      // alert(value);
      const arr = value.split(",");
      arr.pop();
      if (arr.length == 1) {
        //查看是否是平和体质
        if (arr[0] == "平和质") {
          return "平和体质";
        } else {
          return `偏颇体质`;
        }
      } else {
        if (report.mainPhysicalScore >= 10) {
          return `兼夹体质`;
        } else {
          return `倾向体质`;
        }
      }
    },
    getKnowledge(funType = 1) {
      if (funType == 1) window["getknowledge"] = this.getKnowledgeSuccess;
      else if (funType == 2) window["getknowledge"] = this.getKnowledgeCache;
      window["getError"] = this.getError;
      const user = this.$cache.getUser();
      this.$native.run(
        "getknowledge",
        {
          userCode: user.userCode
        },
        "getknowledge",
        "getError"
      );
    },
    getError(data) {},
    getKnowledgeCache(data) {
      const res = JSON.parse(data).knowledgeList;
      this.baseList = res;
    },
    getKnowledgeSuccess(data) {
      try {
        const res = JSON.parse(data).knowledgeList;
        this.$cache.setBase(res.filter(p => p.type == this.type));
        this.$cache.set("word2", {
          content: this.ue.getContent()
        }); //节气养生
        this.$cache.set("word1", {
          content: this.ue1.getContent()
        }); //调养方案
        this.$cache.set("word3", {
          content: this.ue2.getContent()
        }); //医师建议、
        this.$cache.set("word4", {
          content: this.ue3.getContent()
        }); //温馨提示
        this.$router.push("/selectword?type=" + this.type + "&cache=" + true);
      } catch (error) {
        alert(error);
      }
    },
    next(type) {
      this.type = type;
      this.getKnowledge();
    },
    updateSave() {
      let report = this.report;
      report.jieqiContent = this.ue.getContent();
      report.blockContent = this.ue1.getContent();
      report.ysjyContent = this.ue2.getContent();
      report.promptContent = this.ue3.getContent();
      if (!report.jieqiContent) {
        this.$toast("节气养生内容不能为空，请输入内容。");
        return;
      }
      if (!report.blockContent) {
        this.$toast("调理方案内容不能为空，请输入内容。");
        return;
      }
      if (!report.ysjyContent) {
        this.$toast("医师建议内容不能为空，请输入内容。");
        return;
      }
      if (!report.promptContent) {
        this.$toast("温馨提示内容不能为空，请输入内容。");
        return;
      }
      //没有词条新增
      for (let i = 0; i < 4; i++) {
        switch (i) {
          case 0:
            this.newBase(report.blockContent, 1); //调养方案
            break;
          case 1:
            this.newBase(report.jieqiContent, 2); //节气养生
            break;
          case 2:
            this.newBase(report.ysjyContent, 3); //医师建议
            break;
          case 3:
            this.newBase(report.promptContent, 4); //温馨提示
            break;
        }
      }
      // this.newBase(report.jieqiContent, 2); //节气养生
      // this.newBase(report.blockContent, 1); //调养方案
      // this.newBase(report.ysjyContent, 3); //医师建议
      // this.newBase(report.promptContent, 4); //温馨提示
      window["updateinventoryinfo"] = this.updateSaveSuccess;
      this.$native.run("updateinventoryinfo", report, "updateinventoryinfo");
    },
    newBase(content, type) {
      const user = this.$cache.getUser();
      const baseList = this.baseList;
      let addBase = {
        userCode: user.userCode, //创建用户编号
        type: type, // 条目类型 1：调理方案，2：节气养生，3：医师建议，4：温馨提示
        content: "", // 条目内容的html字串
        isShared: 0 //是否共享 0：不共享，1：共享
      };
      const model = baseList.find(p => p.content == content && p.type == type);
      // alert(JSON.stringify(model));
      if (!model) {
        addBase.content = content;
        window["addknowledge"] = this.addKnowledge;
        this.$native.run("addknowledge", addBase, "addknowledge");
      }
    },
    addKnowledge() {},
    updateSaveSuccess() {
      this.$cache.remove("word1");
      this.$cache.remove("word2");
      this.$cache.remove("word3");
      this.$cache.remove("word4");
      this.$toast("体质报告创建成功");
      this.saveFlag = true;
      this.$router.push("/index");
    },
    ueInit() {
      UE.delEditor("editor");
      UE.delEditor("editor1");
      UE.delEditor("editor2");
      UE.delEditor("editor3");
      this.ue = UE.getEditor("editor", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        initialFrameHeight: 300 //设置富文本的高度为300px
      });
      this.ue1 = UE.getEditor("editor1", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        initialFrameHeight: 300 //设置富文本的高度为300px
      });
      this.ue2 = UE.getEditor("editor2", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        initialFrameHeight: 300 //设置富文本的高度为300px
      });
      this.ue3 = UE.getEditor("editor3", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        initialFrameHeight: 300 //设置富文本的高度为300px
      });
      let th = this;
      setTimeout(() => {
        const word = this.$cache.get("word2");
        if (word) th.ue.setContent(word.content);
        //节气养生
        else {
          const date = new Date(),
            dateStr = `${date.getFullYear()}-${date.getMonth() +
              1}-${date.getDate()}`;
          let jiqiKey = throttle(dateStr);
          if (jiqiKey) {
            const mode = jieqi.find(p => p.id == jiqiKey);
            th.ue.setContent(mode.name);
          }
          // console.log(throttle(dateStr), mode);
        }
        const word1 = this.$cache.get("word1");
        if (word1) th.ue1.setContent(word1.content);
        //调养方案
        else {
          let arr = [],
            re = th.report.mainPhysical;
          let tiaoyangArr = tiaoyang;
          if (th.report.reportType == 33) {
            tiaoyangArr = tiaoyangGong;
          }
          // if (re == "平和质") {
          //   re = "平和质,";
          // }
          if (re.indexOf(",") > -1) {
            arr = re.split(",");
            let co = "";
            // arr.forEach(item => {
            const modeArr = tiaoyangArr.find(p => p.id == arr[0]);
            // if (mode) {
            co += modeArr.name;
            // }
            // });
            th.ue1.setContent(co);
          }
          //  } else if (this.report.reportType == 33) {
          //公卫版
          // this.sicalGong();
          //   alert(th.report.mainPhysical)
          // }
        }
        const word2 = this.$cache.get("word3");
        if (word2) th.ue2.setContent(word2.content);
        //医师建议、
        else {
          th.ue2.setContent(`<p style="text-align: left;">
    <span style="text-align: center;"><br/></span>
</p>
<p style="text-align: left;">
    <span style="text-align: center;"><br/></span>
</p>
<p style="text-align: left;">
    <span style="text-align: center;"><br/></span>
</p>
<p style="text-align: left;">
    <span style="text-align: center;"><br/></span>
</p>
<p style="text-align: left;">
    <span style="text-align: center;"><br/></span>
</p>
<p style="text-align: left;">
    <span style="text-align: center;"><br/></span>
</p>
<p style="text-align: right;">
    <span style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;医生签名</span><br/>
</p>`);
        }
        const word3 = this.$cache.get("word4");
        if (word3) th.ue3.setContent(word3.content);
        //温馨提示
        else {
          th.ue3.setContent(`如您已患某种疾病，请您遵医嘱接受治疗和调护<br>
若已患糖尿病、高脂血症、痛风、肥胖等疾病，应遵照相应的膳食规。如:<br>
糖尿病少高糖类食物；<br>
高脂血症及肥胖应少食高胆固醇、高糖、高脂肪食物；<br>
痛风禁食海鲜类嘌呤含量较高的食物；<br>
根据体质的易患疾病，请您提高警惕，防患于未然，定期进行相关检查；若有其它疑问，欢迎致 “KY3H全国客服电话” （86）4008118899或访问www.eky3h.com进行咨询，为了便于您更有效地管理自己的健康状况，我们在KY3H健康网（www.eky3h.com）为您提供了更加丰富的健康管理工具及体质调理产品，欢迎您登陆。`);
        }
      }, 1500);
    },

    drawLine() {
      const report = this.report;
      const dataChart = [
        report.pingheScore,
        report.qixuScore,
        report.yangxuScore,
        report.yinxuScore,
        report.tanshiScore,
        report.shireScore,
        report.xueyuScore,
        report.qiyuScore,
        report.tebingScore
      ];
      // 基于准备好的dom，初始化echarts实例
      let lineF = {
        itemStyle: {
          color: "rgba(59,199,221,0.9)",
          normal: {
            borderWidth: 1,
            lineStyle: {
              type: "dash",
              color: "rgba(59,199,221,0.9)",
              width: 2
            },
            label: {
              formatter: function(value) {
                //  console.log(value.);
                // if (value.value == 15) {
                //   return "基础分";
                // }
                if (value.value == 30) {
                  return "横向分";
                }
                if (value.value == 40) {
                  return "确定分";
                }
                return "1";
              },
              textStyle: {
                fontSize: 10
              }
            }
          }
        },
        silent: true,
        data: [
          // {
          //   yAxis: 15
          // },
          {
            yAxis: 30
          },
          {
            yAxis: 40
          }
        ]
      };

      let myChart = this.$echarts.init(document.getElementById("myChart"));
      if (this.report.reportType == 33) {
        lineF = {};
      }
      myChart.resize();
      // 绘制图表
      myChart.setOption({
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          //图例
          data: ["柱状图", "折线图"], //与series的name对应
          animation: true,
          //left: "10%", //图例的位置，可以用像素，可以用百分比，也可以用center，right等
          // top: -10, //图例的位置
          // right: 0,
          // z: 1000
          itemWidth: 30, //图例图标的宽
          itemHeight: 10, //图例图标的高
          textStyle: {
            color: "#878787", //值的具体的颜色
            fontSize: 15
          }
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false
          }, //去除网格分割线
          //splitArea: { show: true }, //保留网格区域
          axisLine: {
            //坐标线
            lineStyle: {
              type: "solid",
              color: "#d8d8d8", //轴线的颜色
              width: "2" //坐标线的宽度
            }
          },
          axisTick: {
            //刻度
            show: false //不显示刻度线
          },
          axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
              color: "#878787" //坐标值的具体的颜色
            }
          },
          splitLine: {
            show: false //去掉分割线
          },
          data: [
            "平和质",
            "气虚质",
            "阳虚质",
            "阴虚质",
            "痰湿质",
            "湿热质",
            "血瘀质",
            "气郁质",
            "特禀质"
          ]
        },
        backgroundColor: "#fff", //图得背景色
        yAxis: {
          name: " ", //轴的名字，默认位置在y轴上方显示
          max: 100, //最大刻度
          min: 0,
          type: "value",
          scale: true,
          boundaryGap: false,
          axisLine: {
            //线
            show: false
          },
          axisTick: {
            //刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#878787" //坐标值得具体的颜色
            }
          },
          splitNumber: 10,
          splitLine: {
            lineStyle: {
              color: ["#dddddd "] //分割线的颜色
            }
          }
        },
        // visualMap: {
        //   top: -5,
        //   right: 10,
        //   pieces: [
        //     {
        //       gt: 0,
        //       lte: 15,
        //       color: "#096"
        //     },
        //     {
        //       gt: 15,
        //       lte: 30,
        //       color: "#ffde33"
        //     },
        //     {
        //       gt: 30,
        //       lte: 40,
        //       color: "#ff9933"
        //     }, {
        //       gt: 40,
        //       lte: 40,
        //       color: "#83bff6"
        //     }
        //   ],
        //   outOfRange: {
        //     color: "#37A2DA"
        //   }
        // },
        series: [
          {
            name: "柱状图",
            type: "bar",
            data: dataChart,
            itemStyle: {
              emphasis: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#2378f7"
                  },
                  {
                    offset: 0.7,
                    color: "#2378f7"
                  },
                  {
                    offset: 1,
                    color: "#83bff6"
                  }
                ])
              },
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#83bff6"
                  },
                  {
                    offset: 0.5,
                    color: "#188df0"
                  },
                  {
                    offset: 1,
                    color: "#188df0"
                  }
                ]), //设置柱子颜色
                //color: "rgba(59,199,221,0.9)",
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#37A2DA" //值得颜色
                  }
                }
              },
              barGap: "-100%",
              barCategoryGap: "40%",
              //  data: dataShadow,
              animation: false
            },
            barWidth: 15 //设置柱子宽度，单位为px
          },
          // {
          //   name: "折线图1",
          //   type: "line",
          //   data: [15],
          //   itemStyle: {
          //     color: "rgba(59,199,221,0.9)",
          //     normal: {
          //       borderWidth: 1,
          //       lineStyle: {
          //         type: "dash",
          //         color: "rgba(59,199,221,0.9)",
          //         width: 2
          //       },
          //       label: {
          //         formatter: function(value) {
          //           alert("1");
          //         },
          //         textStyle: {
          //           fontSize: 16
          //         }
          //       }
          //     }
          //   },
          //   markLine: {
          //     silent: true,
          //     data: [
          //       {
          //         yAxis: 15
          //       },
          //       {
          //         yAxis: 30
          //       },
          //       {
          //         yAxis: 40
          //       }
          //     ]
          //   }
          // },
          {
            name: "折线图",
            type: "line",
            // yAxisIndex: 1,
            data: dataChart,
            itemStyle: {
              color: "rgba(59,199,221,0.9)"
            },
            markLine: lineF
          }
        ]
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (this.query.type == 1 && !this.saveFlag) {
      this.$toastFull(FullTipsVue, true, {
        text: "确定要退出编辑体质辨识报告吗？",
        title: "提示",
        subText: "确定",
        fl: 1,
        s: function() {
          next();
        }
      });
      next(false);
    } else {
      next();
    }
  },
  beforeDestroy() {
    this.$cache.remove("base");
    Indicator.close();
  }
};
</script>

<style lang="less" scoped>
.table-ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // text-align: center;
  > li {
    flex: 1;
    display: flex;
    justify-content: center;
    border: 1px solid #00a6e7;
    height: 80px;
    align-items: center;

    > span {
      display: inline-block;
      // margin-left: 9px;
      // margin-bottom: 2px;
    }
  }
}

.yihuan {
  margin-bottom: 20px;
}

.fang {
  margin: 0 auto;
  padding-top: 40px;
}

.icon-add {
  position: absolute;
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
  background-size: 100%;
  // float: t;
  right: -90px;
  top: 40px;
}

.icon-add {
  background-image: url(../assets/add2.png);
  height: 60px;
}

.editor {
  width: 100%;
  // height: 500px;
}

.html-fu {
  min-height: 60px;
  position: relative;
}

.scroll {
  height: calc(100% - 202px);
  overflow-y: auto;
}

.bor-b {
  border-bottom: 1px solid #dcdcdc;

  p.nr {
    font-size: 32px;
    color: #656565;
    padding-left: 20px;
    padding-bottom: 50px;
  }

  p.nr:first-child {
    padding-top: 35px;
  }

  p.nr:last-child {
    padding-bottom: 50px;
  }

  .qingkuang {
    height: 152px;
  }

  .qianming {
    text-align: right;
    color: #656565;
    font-size: 32px;
    padding-bottom: 30px;
    width: 100%;
    padding-right: 120px;
  }
}

.bor-b.tip {
  border-bottom: none;

  p.nr {
    font-size: 32px;
    color: #656565;
  }
}

.report {
  width: 2500px;
  margin: 0 auto;
  margin-top: 60px;

  h2 {
    font-size: 42px;
    color: #282828;
    text-align: center;
    padding-top: 55px;
    padding-bottom: 60px;
  }

  ul.title,
  .title2 {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 15px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      // float: left;
      font-size: 30px;
      color: #282828;
      width: 350px;
      padding-bottom: 35px;
      line-height: 40px;

      label {
        display: block;
        width: 145px;
        float: left;
        color: #989898;
      }
    }
  }

  .title2 {
    border-bottom: 1px solid #dcdcdc;
  }

  h3 {
    font-size: 36px;
    color: #282828;
    margin-top: 50px;
    margin-bottom: 45px;

    i {
      display: block;
      width: 7px;
      height: 32px;
      background: #00a6e7;
      border-radius: 10px;
      float: left;
      margin-right: 15px;
      margin-top: 5px;
    }

    span {
      font-size: 32px;
      color: #989898;
    }
  }

  h6 {
    font-size: 32px;
    color: #989898;
    margin-top: 30px;

    .echart {
      float: right;
      width: 374px;
      height: 76px;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      margin-top: -15px;

      ol {
        width: 100%;

        li {
          margin-right: 0;
        }
      }

      li {
        float: left;
        font-size: 30px;
        color: #282828;
        line-height: 76px;

        i {
          float: left;
          display: block;
        }
      }

      li {
        i.mian {
          width: 38px;
          height: 26px;
          background: #3ba6dd;
          margin-left: 30px;
          margin-top: 26px;
          margin-right: 8px;
        }

        i.line {
          width: 42px;
          height: 4px;
          background: #3fc9e2;
          margin-left: 30px;
          margin-top: 36px;
          margin-right: 8px;
        }
      }
    }
  }

  .echarts-img {
    width: 100%;
    height: 1000px;
    margin-top: 75px;
    // img {
    //   width: 100%;
    // }
  }

  p.pingjia {
    font-size: 36px;
    color: #3ba6dd;
    text-align: center;
    margin-top: 85px;
    margin-bottom: 70px;
  }

  ol {
    margin: 0 auto;
    width: 885px;
    padding-bottom: 65px;

    li {
      float: left;
      font-size: 39px;
      color: #00a6e7;
      margin-right: 50px;
      position: relative;

      i.down {
        width: 12px;
        height: 30px;
        display: block;
        background: url(../assets/down_03.png) no-repeat;
        background-size: 100%;
        position: absolute;
        right: -20px;
        top: 5px;
      }

      label {
        color: #656565;
        margin-right: 10px;
      }
    }

    li:last-child {
      margin-right: 0;
    }
  }
}

.shadow {
  box-shadow: -1px 1px 30px #cacaca;
  border-radius: 10px;
  padding: 0 120px;
  margin-bottom: 30px;
  padding-bottom: 45px;
}
</style>
