<template>
    <div style="height: 100%;">
           	 <app-header :ltitle='"后退"' :ctitle='"选择词条"'></app-header>
      	 
    		<div class="select-content clearfix">
    			<div class="scroll-y fl">
	    			<div class="left fl">
	    				<div class="top-nav-search">
	                    <input type="texe" placeholder="输入关键字">
	                    <i class="sousuo"></i>
	                </div>
	                <ul>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                		<li class="shadow">
	                			<i class="icon icon-add"></i>
	                			<p>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态</p>
	                			<i class="icon arrow"></i>
	                		</li>
	                </ul>
	    			</div>
    			</div>
    			<div class="right fr">
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
      user: {}
    };
  },
  mounted() {
    setTimeout(() => {
      UE.delEditor("editor");
      // this.ue = window.UE.getEditor("editor");
      this.ue = UE.getEditor("editor", {
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/js/UE/",
        // initialFrameWidth: 800, //设置富文本的宽度为600px
        initialFrameHeight: 200 //设置富文本的高度为200px
      });
    }, 100);
    this.baseList = this.$cache.getBase(); //获取知识库列表
    this.user = this.$cache.getUser(); //获取用户信息
  },
  computed: {
    list() {
      return this.baseList;
    }
  },
  methods: {
    save() {
      try {
        let addBase = this.addBase;
        addBase.userCode = this.user.userCode;
        addBase.content = this.ue.getContent().trim();
        // alert(addBase.content);
        window["addknowledge"] = this.addKnowledge;
        this.$native.run("addknowledge", addBase, "addknowledge");
      } catch (error) {
        alert(error);
      }
    },
    addKnowledge() {
      this.$toast("保存成功");
    }
  }
};
</script>

<style lang="less" scoped>
.button-jh.fang {
  margin-left: 235px;
  position: fixed;
  bottom: 40px;
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
  width: 2408px;
  margin: 0 auto;
  margin-top: 35px;

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
          right: 20px;
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
    width: 1200px;
    background: #fff;
    height: 100%;
    textarea {
      width: 100%;
      background: #fff;
      height: 315px;
    }
  }
}
</style>
