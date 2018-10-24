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
                    <input type="text" @click="openPicker(1)" v-model="search.startText">
                     <mt-datetime-picker ref="pickerFilter" v-model="defaultDate" :startDate='startDate' :endDate='endDate' type="date"  year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
                    </mt-datetime-picker>
                    <p></p>
                    <input type="text" @click="openPicker(2)" v-model="search.endText"/>
                   
                </li>
                <li class="clearfix">
                    <label for="">上传状态</label>
                    <input type="text" />
                    <div class="arrow"></div>
                </li>
                <li class="clearfix">
                    <label for="">创建人</label>
                    <input type="text" placeholder="创建人" v-model="search.createUser"/>
        		</li>
                <li class="clearfix">
                    <label for="">机构</label>
                    <input type="text" placeholder="机构名称" v-model="search.orgName"/>
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
export default {
  data() {
    return {
      search: {
        createUser: "",
        orgName: "",
        startText: "",
        endText: ""
      },
      startDate: new Date("1971-01-01"),
      endDate: new Date(),
      openIndex: 1,
      defaultDate: new Date("1971-01-01")
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
      if (!this.search.endText) {
        if (this.search.startText) {
          this.search.endText = new Date().format("yyyy-MM-dd");
        }
      }
      $vm.$emit("search", this.search);
    },
    handleConfirm(value) {
      console.log(value);
      if (this.openIndex == 1) {
        this.search.startText = value.format("yyyy-MM-dd");
        return;
      }
      this.search.endText = value.format("yyyy-MM-dd");
      //   this.addUser.birth = value.format("yyyy-MM-dd");
    },
    openPicker(i) {
      this.openIndex = i;
      if (i == 1 && this.search.startText) {
        this.defaultDate = new Date(this.search.startText);
        this.startDate = new Date("1970-01-02");
      } else if (i == 2) {
        if (!this.search.startText) {
          this.$toast("请先选择开始时间");
          return;
        }
        let s = new Date(this.search.startText);
        s.setDate(s.getDate() + 1);
        this.startDate = s; //只能选中开始日期之后的时间
        if (this.search.endText)
          this.defaultDate = new Date(this.search.endText);
      }
      this.$refs.pickerFilter.open();
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
</style><style lang="less">
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
