<template>
    <div style="height: 100%;">
           	 <app-header :ltitle='"后退"' :ctitle='"选择词条"'></app-header>
      	 
    		<div class="select-content">
    			<div class="scroll-y">
	    			<div class="left fl">
	    				<div class="top-nav-search">
	                    <input type="texe" placeholder="输入关键字">
	                    <i class="sousuo"></i>
	                </div>
	                <ul>
	                		<li class="shadow" v-for="(item,i) in baseList" :key="i">
	                			<i class="icon icon-add" @click="addWord(item)"></i>
	                			<p v-html="item.content"></p>
	                			<!-- <i class="icon arrow"></i> -->
	                		</li> 
	                </ul>
	    			</div>
    			</div>
    			<div class="right">
    			 <div id="editor" class="editor" width="100%;height:600px" type="text/plain"></div>

    				 <div class="button-jh fang"> 
	    				<button class="button jh" @click="save">保存</button>
	    			</div>
    			</div>
    		</div>
    
</div> 
</template>

<script>
export default {
  data() {
    return {
      baseList: [],
      addBase: {
        userCode: "", //创建用户编号
        type: 1, // 条目类型 1：调理方案，2：节气养生，3：医师建议，4：温馨提示
        content: "", // 条目内容的html字串
        isShared: 0 //是否共享 0：不共享，1：共享
      },
      user: {},
      cache: false
    };
  },
  mounted() {
    this.addBase.type = this.$route.query.type;
    this.cache = this.$route.query.cache;
    setTimeout(() => {
      UE.delEditor("editor");
      UE.registerUI = function() {};
      // this.ue = window.UE.getEditor("editor");
      this.ue = UE.getEditor("editor", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        // initialFrameWidth: 800, //设置富文本的宽度为600px
        initialFrameHeight: 200 //设置富文本的高度为200px
      });
    }, 1);
    this.baseList = this.$cache.getBase(); //获取知识库列表
    this.user = this.$cache.getUser(); //获取用户信息
  },
  computed: {
    list() {
      return this.baseList;
    }
  },
  methods: {
    addWord(item) {
      this.ue.setContent(item.content);
    },
    save() {
      try {
        let addBase = this.addBase;
        addBase.userCode = this.user.userCode;
        addBase.content = this.ue.getContent();
        // alert(addBase.content);
        window["addknowledge"] = this.addKnowledge;
        this.$native.run("addknowledge", addBase, "addknowledge");
      } catch (error) {
        alert(error);
      }
    },
    addKnowledge() {
      if (this.cache) {
        this.$cache.set("word" + this.addBase.type, {
          content: this.addBase.content
        });
      }
      this.$toast("保存成功");
      $appBack();
    }
  }
};
</script>

<style lang="less" scoped>
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
    width: 800px;
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
