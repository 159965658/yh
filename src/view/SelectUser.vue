<template>
   <div class="dialog-div">
    <div class="dialog-body">
        <slot name="body">
            <p>辨识人群众选择 <i class="icon close"></i></p>
            <ol class="clearfix">
            		<li><i class="icon radio active"><b></b></i><input type="radio" />全部</li>
            		<li><i class="icon radio"><b></b></i><input type="radio" />普通人群</li>
            		<li><i class="icon radio"><b></b></i><input type="radio" />老年人群</li>
            </ol>
        </slot>
    </div>
   </div> 
</template>

<script>
export default {
  methods: {
    save() {
      this.$closeFull();
      $vm.$emit("selectUser");
    }
  }
};
</script>

<style lang='less' scoped>
.dialog-body{
	p{
		padding-top: 55px;
		text-align: left;
		padding-left: 78px;
	}
	
}
.dialog-body{
	width: 860px;
	height: 360px;
	padding: 0;
}
.icon.close{
	float: right;
	margin-right: 30px;
	margin-top: -20px;
}
ol{
	width: 740px;
	margin: 0 auto;
	margin-top: 100px;
	li{
		float: left;
		width: 240px;
		position: relative;
		text-align: left;
		color:#656565 ;
		font-size: 34px;
		i.icon{
			position: absolute;
			top: 10px;
			left: -2px;
		}
		input{
			margin-right: 25px;
		}
	}
}
</style>
