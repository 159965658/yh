<template>
   <div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>辨识人群众选择 <i class="icon close" @click="$closeFull"></i></p>
            <ol class="clearfix">
				
            		<li v-for="item in user" :key="item.id" @click="switchFun(item.id)">
						<i class="icon radio" :class="{'active':id == item.id}"><b></b></i>
						<input type="radio" />{{item.name}}
					</li>
            		<!-- <li><i class="icon radio"><b></b></i><input type="radio" />普通人群</li>
            		<li><i class="icon radio"><b></b></i><input type="radio" />老年人群</li> -->
            </ol>
        </slot>
    </div>
   </div> 
</template>

<script>
export default {
  data() {
    return {
      user: [
        {
          id: 0,
          name: "全部"
        },
        {
          id: 1,
          name: "普通人群"
        },
        {
          id: 2,
          name: "老年人群"
        }
      ],
      id: 0
    };
  },
  methods: {
    switchFun(id) {
      this.id = id;
    //   this.$closeFull();
      $vm.$emit("selectUser");
    }
  }
};
</script>

<style lang='less' scoped>
.dialog-body {
  p {
    padding-top: 55px;
    text-align: left;
    padding-left: 78px;
  }
}
.dialog-body {
  width: 860px;
  height: 360px;
  padding: 0;
}
.icon.close {
  float: right;
  margin-right: 30px;
  margin-top: -20px;
}
ol {
  width: 740px;
  margin: 0 auto;
  margin-top: 100px;
  li {
    float: left;
    margin-right: 90px;
    position: relative;
    text-align: left;
    color: #656565;
    font-size: 34px;
    i.icon {
      position: absolute;
      top: 10px;
      left: -2px;
    }
    input {
      margin-right: 25px;
    }
  }
  li:last-child {
    margin-right: 0;
  }
}
</style>
