<template>
<div>
    <app-header :ctitle='countitle' :type='2'>
        <div slot='left' class="left">
            <i class="icon icon-close1"></i>取消体质辨识
        </div>
    </app-header>
    <div v-show="!isAnswer">
        <div class="answer shadow " v-for="(item,i) in answer" :key="i">
            <h2>{{i+1}}.{{item.title}}</h2>
            <ul>
                <li class="active">A. 没有（从来没有）</li>
                <li>B. 很少（可以忽略）</li>
                <li>C. 有时（偶尔出现）</li>
                <li>D. 经常（有规律）</li>
                <li>E. 总是（一直有）</li>
            </ul>
        </div>
        <div class="button-jh fang clearfix">
            <a href="jvascript:void(0)" class="button jh fl prev">上一题</a>
            <a href="jvascript:void(0)" class="button jh fr" @click="next">下一题</a>
        </div>
    </div>
    <!--答题完成-->
    <div v-show="isAnswer">
        <div class="answered ">
            <dl>
                <dt></dt>
                <dd>答完了！</dd>
                <dd>请把设备交还给医师。</dd>
            </dl>
        </div>
        <div class="button-jh wid500 fang">
            <router-link to="/IdentificationReport" class="button jh ">进入体质辨识报告</router-link>
            <!-- <a href="jvascript:void(0)" >进入体质辨识报告</a> -->
        </div>
    </div>
</div>
</template>

<script>
import tipsVue from "@/components/FullTips";
export default {
  data() {
    return {
      answer: [],
      index: 1,
      countitle: "辨识答题(1/33)",
      isAnswer: false
    };
  },
  computed: {
    // isAnswer() {
    //   return this.answer < this.index;
    // }
  },
  mounted() {
    this.answer.push({
      title: "您精力充沛吗？（指精神头足，乐于做事）"
    });
    this.setTitle();
    setTimeout(() => {
      $vm.$on("tipsBack", this.tips); //检测是否回退

      $vm.$on("submit", this.sub);
    }, 1);
  },
  methods: {
    next() {
      if (this.answer.length > this.index) {
        this.index++;
        this.setTitle();
        return;
      }
      this.isAnswer = true;
      this.countitle = `辨识答题`;
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
        text: "退出后，答题记录不报存，是否要退出答题状态",
        subText: "确认"
      });
    }
  },
  beforeDestroy() {
    $vm.$off("tipsBack", this.tips);
    $vm.$off("submit", this.sub);
  }
};
</script>

<style lang="less" scoped>
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
  width: 1750px;
  height: 1045px;
  background: #fff;
  margin: 0 auto;
  margin-top: 90px;
  background: url(../assets/yuan_03.png) repeat-y;
  background-size: 28px 57px;
  background-position: 12px 15px;
  padding-bottom: 110px;

  h2 {
    text-align: center;
    font-size: 48px;
    color: #282828;
    padding-top: 115px;
  }

  ul {
    margin-top: 90px;

    li {
      width: 1000px;
      background: #f2f2f2;
      border-radius: 100px;
      border: 1px solid #dcdcdc;
      margin: 0 auto;
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
