<template>
<div style="height: 100%;">
    <app-header :ltitle='"后退"' :ctitle='title'></app-header>

    <div class="select-content">
        <div class="scroll-y">
            <div class="left fl">
                <div class="top-nav-search">
                    <input type="texe" placeholder="输入关键字" v-model="name">
                    <i class="sousuo" @click="search"></i>
                </div>
                <ul v-if="searcheList.length>0">
                    <li class="shadow" v-for="(item,i) in searcheList" :key="i">
                        <i class="icon icon-add" @click="addWord(item)"></i>
                        <p v-html="item.content"></p>
                        <!-- <i class="icon arrow"></i> -->
                    </li>
                </ul>
                <data-null v-else></data-null>
            </div>
        </div>
        <div class="right">
            <div id="editor" class="editor" width="100%;height:600px" type="text/plain"></div>
            <div class="status">
                <label for="">共享状态：</label>
                <app-select v-on:opotion="opotion" :id='defaultId' :opotionList='opotionList' :isClick='isClick'></app-select>
            </div>
            <div class="button-jh fang">
                <button class="button jh" @click="save">保存</button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import dataNull from "@/components/DataNull";
import FullTipsVue from "@/components/FullTips";
export default {
  components: {
    dataNull
  },
  data() {
    return {
      opotionList: [
        {
          id: 2,
          name: "私有"
        },
        {
          id: 1,
          name: "共享"
        }
      ],
      isClick: false,
      defaultId: 0,
      baseList: [],
      allBaseList: [],
      searcheList: [],
      addBase: {
        userCode: "", //创建用户编号
        type: 1, // 条目类型 1：调理方案，2：节气养生，3：医师建议，4：温馨提示
        content: "", // 条目内容的html字串
        isShared: 2 //是否共享 0：不共享，1：共享
      },
      user: {},
      cache: false,
      name: "",
      fname: "",
      editModel: null,
      title: "选择词条"
    };
  },
  mounted() {
    this.addBase.type = this.$route.query.type;
    this.cache = this.$route.query.cache;
    this.editModel = this.$cache.get(this.$cacheEnum.baseEdit);
    // alert(this.editModel.type);
    setTimeout(() => {
      UE.delEditor("editor");
      UE.registerUI = function() {};
      // this.ue = window.UE.getEditor("editor");
      this.ue = UE.getEditor("editor", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        // initialFrameWidth: 800, //设置富文本的宽度为600px
        initialFrameHeight: 200 //设置富文本的高度为300px
      });
      if (this.editModel) {
        this.title = "编辑词条";
        setTimeout(() => {
          this.ue.setContent(this.editModel.content);
          this.defaultId = this.editModel.isShared;
          this.isClick = this.editModel.userCode != this.user.userCode;
          //alert(this.editModel.type);
          $vm.$emit("selectChange", this.defaultId);
        }, 200);
      }
    }, 1);
    this.baseList = this.$cache.getBase(); //获取知识库列表
    this.allBaseList = this.$cache.getBase();
    this.searcheList = this.$cache.getBase();
    this.user = this.$cache.getUser(); //获取用户信息
  },
  computed: {
    // list() {
    //   if (this.fname) {
    //     return this.baseList.filter(p => p.text.indexOf(this.fname) > -1);
    //   }
    //   return this.baseList;
    // }
  },
  methods: {
    addWord(item) {
      this.ue.setContent(this.ue.getContent() + item.content);
    },
    save() {
      try {
        let addBase = this.addBase;
        addBase.content = this.ue.getContent();
        if (!addBase.content.trim()) {
          this.$toast("词条内容不能为空，请您输入内容");
          return;
        }
        if (addBase.isShared == -1) {
          this.$toast("请选择共享状态");
          return;
        }
        const baseList = this.allBaseList;
        const model = baseList.find(p => p.content == addBase.content);
        if (model) {
          this.$toast("该词条已经存在，请您修改后在保存");
          return;
        }
        if (this.editModel) {
          // alert("编辑词条");

          $vm.$off("submitEdit", this.editSave);
          $vm.$on("submitEdit", this.editSave);
          this.$toastFull(FullTipsVue, true, {
            title: "提示",
            text: "是否保存修改的词条？",
            subText: "确定",
            canText: "取消",
            submitEmit: "submitEdit"
          });
          return;
        }
        addBase.userCode = this.user.userCode;

        // alert(addBase.content);
        window["addknowledge"] = this.addKnowledge;
        this.$native.run("addknowledge", addBase, "addknowledge");
      } catch (error) {
        alert(error);
      }
    },
    editSave() {
      let item = this.editModel;
      item.content = this.ue.getContent();
      item.isShared = this.addBase.isShared;
      window["updateknowledge"] = this.updateSuccess;
      this.$native.run("updateknowledge", item, "updateknowledge");
      this.$cache.remove(this.$cacheEnum.baseEdit);
    },
    updateSuccess() {
      this.$toast("修改成功");
      $appBack();
    },
    addKnowledge() {
      if (this.cache) {
        this.$cache.set("word" + this.addBase.type, {
          content: this.addBase.content
        });
      }
      this.$toast("保存成功");
      $appBack();
    },
    opotion(opotion) {
      this.addBase.isShared = opotion.id;
    },
    search() {
      console.log(this.baseList);
      this.fname = this.name;
      // alert(this.baseList.length);
      this.searcheList = this.baseList.filter(
        p => p.text.indexOf(this.fname) > -1
      );
      // alert(JSON.stringify(this.searcheList));
    }
  },
  beforeDestroy() {
    this.$cache.remove(this.$cacheEnum.baseEdit);
    $vm.$off("submitEdit", this.editSave);
  }
};
</script>

<style lang="less" scoped>
.status {
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .select {
    display: inline-block;
  }
}

.button-jh.fang {
  // margin-left: 235px;
  // position: fixed;
  // bottom: 40px;
  display: flex;
  justify-content: center;

  margin: 0 auto;
  margin-top: 50px;

  > button {
    text-align: center;
  }
}

.select-content {
  height: calc(100% - 180px);
}

.scroll-y {
  height: 100%;
  overflow-y: auto;
  width: 950px;
  padding-left: 20px;
}

.top-nav-search {
  margin: 0;
  width: 100%;
  margin-bottom: 40px;

  input {
    width: 80%;
  }
}

.select-content {
  width: 100%;
  margin: 0 auto;
  margin-top: 35px;
  display: flex;
  justify-content: space-around;

  .left {
    width: 925px;

    ul {
      li {
        position: relative;
        padding: 95px 45px;
        margin-bottom: 30px;

        .icon-add {
          position: absolute;
          top: 20px;
          right: 30px;
        }

        p {
          color: #282828;
          font-size: 42px;
        }
      }
    }
  }

  .icon-add {
    position: absolute;
    background-repeat: no-repeat;
    width: 60px;
    height: 50px;
    background-size: 100%;
    float: right;
  }

  .icon-add {
    background-image: url(../assets/add2.png);
    height: 60px;
  }

  .icon.arrow {
    width: 32px;
    height: 21px;
    background-size: 100%;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .right {
    width: 1000px;
    background: #fff;
    height: 100%;
    // textarea {
    //   width: 100%;
    //   background: #fff;
    //   height: 315px;
    // }
  }
}
</style>
