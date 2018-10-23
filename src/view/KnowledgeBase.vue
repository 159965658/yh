<template>
    <div style="height: 100%;"> 
    		<div class="knowledage-top-nav">
    			<ul>
    				<li class="active">调理方案</li>
    				<li>节气养生</li>
    				<li>医师建议</li>
    				<li>温馨提示</li>
    			</ul>
    		</div>
    		<div class="right-cont-w">
	    		<div class="center-content ">
	    			<div class="total">
	    				<ul class="clearfix">
	    					<li class="fl"><p>当前共有数据：<span>10</span></p> <i class="icon icon-paixu icon-del" @click="delClick"></i>
                <i class="icon icon-paixu icon-add" @click="addClick"></i></li>
	    					<li class="fl">
	    						<div class="top-nav-search">
			                    <input type="texe" placeholder="输入关键字">
			                    <i class="sousuo"></i>
			                </div>
			                <router-link to="/newfile" class="shatubiao"></router-link>
	    					</li>
							
	    					<li class="fl xiala clearfix" style="position:relative ;display: flex;
    align-items: center">
								<label for="" style="margin-right:10px;">共享状态</label>
								  	<Select v-on:opotion="opotion" :opotionList='opotionList'></Select>
	    						<!-- <label for="">共享状态</label>
	    						<select name="" id="">
	    							<option value="">111</option>
	    							<option value="">111</option>
	    							<option value="">111</option>
	    						</select> --> 
	    					</li>
	    				</ul>
	    			</div>
	    			<div class="right-list">
	    				<ul>
	    					<li  v-for="(item,i) in list" :key="i">
                  <span v-html="item.content"></span><b v-if="item.isShared == 1">已共享</b></li>
	    			
	    				</ul>
	    			</div>
	    		</div>
    		</div>
    </div>
</template>

<script>
import Select from "../components/Select";
export default {
  components: {
    Select
  },
  data() {
    return {
      opotionList: ["按钮-1", "按钮-2", "按钮-3", "按钮-4"],
      knowledgeList: [],
      type: 1
    };
  },
  computed: {
    list() {
      return this.knowledgeList.filter(p => p.type == this.type);
    }
  },
  mounted() {
    this.getKnowledge();
  },
  methods: {
    getKnowledge() {
      window["getknowledge"] = this.getKnowledgeSuccess;
      const user = this.$cache.getUser();
      this.$native.run(
        "getknowledge",
        { userCode: user.userCode },
        "getknowledge"
      );
    },
    getKnowledgeSuccess(data) {
      //document.write(data);
      //sessionStorage.setItem("L", data);
      try {
        //alert(sessionStorage.getItem("L"));
        // data = data.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
        const res = JSON.parse(data).knowledgeList;
        // this.$cache.setBase(res);
        // alert(res[0]);
        this.knowledgeList = res;
        // this.setList();
        // console.log(this.knowledgeList);
      } catch (error) {
        alert(error);
      }
    },
    setList() {},
    opotion(opotion) {
      alert(opotion);
    },
    addClick() {
      this.setCache();
      this.$router.push("/selectword?type=" + this.type);
    },
    setCache() {
      this.$cache.setBase(this.knowledgeList.filter(p => p.type == this.type));
      // console.log(list);
    },
    delClick() {
      this.$router.push("/delword");
    }
  }
};
</script>

<style lang='less' scoped>
.right-cont-w {
  float: left;
  width: calc(100% - 208px);
  height: calc(100% - 120px);
  .center-content {
    height: calc(100% - 20px);
  }
  .icon-add {
    background-image: url(../assets/add2.png);
    height: 60px;
    right: 75px;
  }
  .icon-del {
    background-image: url(../assets/del.png);
    right: 270px;
    top: 63px;
  }
  ul {
    li.xiala {
      margin-top: -5px;
      margin-left: 65px;
      position: relative;
      i.arrow {
        position: absolute;
        width: 26px;
        height: 16px;
        background-size: 100%;
        right: 25px;
        top: 25px;
      }
      select {
        width: 210px;
        height: 70px;
        background: #fff;
        border: 1px solid #dcdcdc;
        border-radius: 10px;
      }
    }
  }
}
.right-list {
  height: calc(100% - 140px);
  overflow-y: auto;

  ul {
    li {
      box-shadow: -1px 1px 30px #cacaca;
      background: #ffffff;
      border-radius: 15px;
      padding: 85px 305px;
      margin-bottom: 35px;
      margin-right: 60px;
      text-align: center;
      position: relative;
      b {
        position: absolute;
        color: #ffffff;
        font-size: 28px;
        background: #00a6e7;
        padding: 0 15px;
        height: 44px;
        line-height: 44px;
        border-radius: 50px;
        left: 30px;
        top: 30px;
      }
    }
  }
}

.knowledage-top-nav {
  background: #fff;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      font-size: 36px;
      color: #656565;
      height: 116px;
      line-height: 116px;
    }
    li.active {
      position: relative;
      color: #3ba6dd;
    }
    li.active:after {
      content: "";
      position: absolute;
      width: 138px;
      height: 6px;
      left: 50%;
      bottom: 0;
      display: block;
      background: #3ba6dd;
      margin-left: -69px;
    }
  }
}
</style>
