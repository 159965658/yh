<template>
<!--弹出层背景-->
<div>
    <transition name="slide-fade" mode="out-in">

        <!--弹出层-筛选-->
        <div class="popup_filter">
            <h2>筛选</h2>
            <ul class="forms">
                <li class="clearfix time" style="position:relative">
                    <label for="" >时间</label>
                    <datepicker :calendar-class='"filterC"' :input-class='"filterTime"' name='time' placeholder="" :inline = "false" :language='zh' :format="'yyyy-MM-dd'"></datepicker>
                    <p></p>
                    <input type="text" />
        		</li>
                <li class="clearfix">
                    <label for="">上传状态</label>
                    <input type="text" />
                    <div class="arrow"></div>
                </li>
                <li class="clearfix">
                    <label for="">创建人</label>
                    <input type="text" />
        		</li>
                <li class="clearfix">
                    <label for="">机构</label>
                    <input type="text" />
        		</li>
                <li>
                    <button class="btn-save" @click="save">保存</button>
                </li>
            </ul>
        </div>
    </transition>
</div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { zh } from "vuejs-datepicker/dist/locale";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      zh: zh
    };
  },
  props: {
    isShow: false
  },
  watch: {
    isShow() {
      if (this.isShow) {
        //   console.log(this.isShow);
        this.$openFull();
      } else {
        this.$closeFull();
      }
    }
  },
  methods: {
    save() {
      console.log(2);
      $vm.$emit("search");
    }
  }
};
</script>

<style lang="less" scoped>
.popup_filter {
  width: 824px;
  background: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;

  input {
    font-size: 35px;
  }

  h2 {
    height: 84px;
    border-bottom: 1px solid #dcdcdc;
    text-align: center;
    font-size: 36px;
    color: #282828;
    padding-top: 72px;
    font-weight: bold;
  }
}

.forms {
  height: calc(100% - 156px);
  overflow-y: auto;

  li {
    width: 776px;
  }
}

.btn-save {
  margin-top: 100px;
  margin-left: 188px;
}
</style>
<style>
.filterC {
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 600px;
  border: 1px solid #ccc;
  top: 85px;
  left: 160px;
}
.filterTime {
  font-size: 30px;
}
.filterC .cell {
  border: none;
}
</style>