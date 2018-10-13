<template>
    <div style="height: 100%;">
    				 <app-header :ltitle='"后退"' :ctitle='"查看档案"'></app-header>
    		<div class="clearfix all">
    			<div class="left-content fl">
    				<div class="dangan">
    					<h3>居民档案信息</h3>
    					<div class="shadow">
    						<p class="edit">编辑</p>
						<div class="border">
							<ul>	
								<li><label for="">姓名：</label>张三</li>
								<li><label for="">性别：</label>男</li>
								<li><label for="">民族：</label>汉</li>
								<li><label for="">出生：</label>1987-01-01</li>
								<li><label for="">身份证：</label>110010198703241234</li>
								<li><label for="">地址：</label>山东省滨州市滨城区黄河二路600号2号楼2单元402室</li>
							</ul>
						</div>
						<div style="height: 25px;"></div>
    					</div>
    				</div>
    				
    				<div class="shadow update">
    					<h2>修改记录</h2>
    					<div class="border">
	    					<ol>
	    						<li>
	    							<p class="time">2018-08-21</p>
	    							<p>李四  把性别修改为男</p>
	    							<i class="icon radio active"></i>
	    						</li>
	    						<li>
	    							<p class="time">2018-08-21</p>
	    							<p>李四  把性别修改为男</p>
	    							<i class="icon radio active"></i>
	    						</li>
	    						<li>
	    							<p class="time">2018-08-21</p>
	    							<p>李四  把性别修改为男</p>
	    							<i class="icon radio active"></i>
	    						</li>
	    						<li>
	    							<p class="time">2018-08-21</p>
	    							<p>李四  把性别修改为男</p>
	    							<i class="icon radio active"></i>
	    						</li>
	    					</ol>
    					</div>
    				</div>
    			</div>
    			<div class="right-content dangan fr">
    				<h3>体质辨识报告信息</h3>
    				<div class="shadow">
    					<div class="hei50"></div>
					<ul>	
						<li>
							<b class="biaoti">体质辨识报告    张三</b>
							<b class="time">2018-05-02</b>
							<i class="jiao"></i>
						</li>
						<li>
							<b class="biaoti">体质辨识报告    张三</b>
							<b class="time">2018-05-02</b>
						</li>
					</ul>
				</div>
    			</div>
    		</div>
    </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.all {
  width: 1635px;
  margin: 0 auto;
  height: calc(100% - 180px);
}
.left-content,
.right-content {
  width: 770px;
  padding-top: 40px;
  .border {
    ul,
    ol {
      border: 1px solid #dcdcdc;
      margin: 0 50px;
    }
  }
  .shadow {
    box-shadow: -1px 1px 30px #cacaca;
    border-radius: 10px;

    p.edit {
      font-size: 36px;
      color: #3ba6dd;
      text-align: right;
      width: calc(100% -50px);
      height: 95px;
      line-height: 95px;
      padding-right: 50px;
    }
  }
}
.left-content {
  .border {
    ul {
      li {
        border-bottom: 1px dashed #e1e1e1;
        font-size: 32px;
        color: #282828;
        margin: 0 30px;
        padding-bottom: 32px;
        padding-top: 32px;
        label {
          color: #989898;
        }
      }
      li:last-child {
        border: none;
      }
    }
  }
  .update {
    margin-top: 30px;
    .border {
      padding-bottom: 15px;
    }
    h2 {
      color: #282828;
      font-size: 36px;
      text-align: center;
      padding-top: 40px;
      padding-bottom: 30px;
      font-weight: bold;
    }
    ol {
      padding-top: 45px;
      max-height: 220px;
      overflow-y: auto;
      li {
        border-left: 1px dashed #dcdcdc;
        margin-left: 50px;
        padding-left: 35px;
        padding-bottom: 50px;
        position: relative;
        p {
          height: auto;
          line-height: auto;
          font-size: 32px;
          color: #282828;
        }
        p.time {
          font-size: 28px;
          color: #989898;
          margin-bottom: 22px;
        }
        i.icon {
          position: absolute;
          left: -17px;
          top: 0;
        }
      }
      li:last-child {
        border: none;
      }
    }
  }
}
.dangan {
  h3 {
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    background: #00a6e7;
    border-radius: 10px 10px 0px 0px;
  }
}
.right-content {
  height: 100%;
  .shadow {
    height: calc(100% -50px);
    overflow-y: auto;
  }
  .hei50 {
    height: 50px;
  }
  ul {
    li {
      margin: 0 50px;
      background: #eef2fa;
      border: 1px solid #3ba6dd;
      margin-bottom: 42px;
      position: relative;
      b {
        display: block;
        font-weight: normal;
        margin: 0 50px;
      }
      b.biaoti {
        font-size: 32px;
        color: #282828;
        padding: 44px 0;
      }
      b.time {
        padding-bottom: 40px;
        font-size: 28px;
        color: #989898;
      }
      i.jiao {
        width: 56px;
        height: 65px;
        background: url(../assets/jiao_03.jpg) no-repeat;
        background-size: 100%;
        display: block;
        position: absolute;
        right: -1px;
        bottom: -1px;
      }
    }
  }
}
</style>
