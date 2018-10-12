<template>
    <div>
    			<app-header :ltitle='"后退"' :ctitle='"新增档案"'></app-header>
    		
    		<ul class="tab clearfix">
    			<li class="active edit"><p> <i class="icon"></i> 人工输入</p></li>
    			<li class="ocr">	<p><i class="icon"></i>OCR识别</p> </li>
    		</ul>
    		<div class="center-content">
    			 <div style="width: 100%;height: 5px;"></div>
    			 <div class="border">
    			 	<ul>
    			 		<li class="dashed"><label for="">档案编号:</label>12344</li>
    			 		<li class="dashed"><i class="must">*</i><label for="">档案编号:</label>12344</li>
    			 		<li><i class="must">*</i><label for="">性别：:</label>
    			 			<ol class="clearfix">
    			 				<li><i class="icon radio active"><b></b></i><input type="radio" />男</li>
    			 				<li><i class="icon radio"><b></b></i><input type="radio" />女</li>
    			 			</ol>
    			 		</li>
    			 		<li><i class="must">*</i><label for="">民族:</label>汉</li>
    			 		<li><i class="must">*</i><label for="">出生:</label>1987-01-01 <i class="icon rili"></i></li>
    			 		<li><i class="must">*</i><label for="">出生:</label>1987-01-01 <i class="icon arrow"></i></li>
    			 		<li><i class="must">*</i><label for="">地址:</label>山东省滨州市滨城区黄河二路600号2号楼2单元402室</li>
    			 		<li><i class="must">*</i><label for="">联系方式:</label></li>
    			 	</ul>
    			 	<div class="button-submit"> 
	    				<a href="javascript:void(0)" class="button submit btn-save">保存</a>
	    			</div>
    			 </div>
    			 <div style="width: 100%;height: 50px;"></div>
    		</div>
    		
    		<div class="error-tips hide">您的身份证与系统用户身份证有冲突</div>
         
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.center-content {
  box-shadow: -1px 1px 30px #cacaca;
  width: 1370px;
  margin: 0 auto;
}

i.icon {
  float: left;
}

.tab {
  width: 1250px;
  margin: 0 auto;
  li {
    width: 50%;
    float: left;
    height: 88px;
    background: #c6cdda;
    margin-top: 10px;
    line-height: 88px;
    font-size: 36px;
    color: #fff;
    border-radius: 10px 10px 0 0;
  }
  li.edit {
    i {
      background: url(../assets/edit.png) no-repeat;
      width: 42px;
      height: 42px;
      background-size: 100%;
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 198px;
    }
  }
  li.ocr {
    i {
      width: 48px;
      height: 48px;
      background: url(../assets/ocr.png) no-repeat;
      background-size: 100%;
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 185px;
    }
  }
  li.active {
    height: 98px;
    background: #3ba6dd;
    margin-top: 0px;
    p {
      padding-top: 10px;
    }
  }
}
.border {
  border: 1px solid #dcdcdc;
  width: 1270px;
  margin: 0 auto;
  margin-top: 50px;
  ul {
    margin-left: 60px;
    margin-right: 60px;
    padding-top: 5px;

    li {
      height: 120px;
      line-height: 120px;
      color: #282828;
      font-size: 36px;
      position: relative;
      border-bottom: 1px solid #e1e1e1;
      label {
        min-width: 170px;
        display: block;
        float: left;
        color: #989898;
      }
      i.must {
        position: absolute;
        color: #f00;
        left: -20px;
      }
      i.rili {
        float: right;
        margin-top: 32px;
      }
      i.arrow {
        float: right;
        margin-top: 32px;
        width: 34px;
        height: 21px;
        background-size: 100%;
        margin-top: 50px;
      }
      ol {
        li {
          float: left;
          width: 260px;
          position: relative;

          i.icon {
            position: absolute;
            left: 0px;
            top: 42px;
          }
          input {
            margin-right: 30px;
          }
        }
      }
    }
    li.dashed {
      border-bottom: 1px dashed #e1e1e1;
    }
  }
  .button-submit {
    .submit {
      background: #3ba6dd;
      border-radius: 10px;
      width: 500px;
      margin: 20px auto;
    }
  }
}

.error-tips {
  top: 35%;
}
</style>
