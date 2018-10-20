<template>
<div style="height:100%">
    <app-header :ltitle='"后退"' :ctitle='"删除词条"'></app-header>
    <div class="center-content ">
        <div class="total clearfix">
            <p>当前共有数据：<span>1</span></p>
            <ol class="to-btns clearfix">
                <li class="bor-h"><i class="icon icon-shanchu"></i>删除<span style="margin-left:5px;">2</span></li>
                <li class="bor-h"><i class="radio-btn active" ></i>全选</li>
            </ol>
        </div>
        <div class="right-list">
            <ul>
                <li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。<i class="radio-btn list-icon active" ></i></li>
                <li>健补脾、肾，平衡人体阴阳，将体质维护在一个良好的状态。饮食宜有节制，四季营养合理搭配。<i class="radio-btn list-icon " ></i></li> 
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.center-content {
  padding-left: 60px;
  padding-right: 60px;
  margin: 0 auto;
}
.list-icon {
  position: absolute;
  right: 20px;
  top: 10px;
}
.total {
  padding-top: 32px !important;
  margin-bottom: 36px !important;
  padding-right: 60px !important;
}

.total p {
  float: left;
  line-height: 80px;
}

.card_area,
.total {
  padding-left: 10px;
  padding-right: 10px;
}

ol.to-btns {
  float: right;
}

ol.to-btns li {
  float: left;
  width: 240px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #3ba6dd !important;
  border-radius: 10px;
  margin-left: 50px;
  color: #989898;
  font-size: 32px;
  line-height: 82px;
}

ol.to-btns li.bor-h {
  border: 1px solid #ff9e35 !important;
}

ol.to-btns li span {
  height: 34px;
  background: #ff9e35;
  border-radius: 50%;
  color: #fff !important;
  font-size: 30px;
  padding: 0 8px;
}

ol.to-btns li i {
  float: left;
  margin-left: 56px;
  margin-top: 20px;
  margin-right: 18px;
  position: initial !important;
}

.radio-btn {
  width: 40px;
  height: 40px;
  background: url(../assets/111.png) no-repeat;
  background-size: 100%;
  display: inline-block;
}

.card_area ul.card > li .radio-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
}

.radio-btn.active {
  background: url(../assets/222.png) no-repeat;
  background-size: 100%;
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
</style>
