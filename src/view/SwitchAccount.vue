<template>
<div>
    <app-header :ltitle='"后退"' :ctitle='"切换登录账号"'></app-header>
    <div class="blue-bg clearfix">
        <h3>请选择登录您自已的帐号</h3>
        <div class="pic ">
            <!--active 为头像高亮显示-->
            <dl v-for="(item,index) in user" :key="index" class="fr active" @click="login(item)">
                <dt></dt>
                <dd>{{item.webNickName}}</dd>
            </dl>
            <!--gray 为头像置灰-->
            <!-- <dl class="fr gray">
                <dt></dt>
                <dd>张三</dd>
            </dl> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: []
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      window["setUser"] = this.setUser;
      this.$native.run("getUser", {}, "setUser");
    },
    setUser(data) {
      let res = JSON.parse(data);
      this.user = res.userInfoList;
      if (this.user.length == 0) {
        this.$router.push("/login");
      }
    },
    login(item) {
      this.$router.push("/login?name=" + item.loginName);
    }
  }
};
</script>

<style lang="less" scoped>
.fr {
  float: none !important;
  margin-left: 20px;
}
.blue-bg {
  h3 {
    font-size: 48px;
    color: #fff;
    text-align: center;
    padding-top: 190px;
    margin-bottom: 185px;
  }

  .pic {
    margin: 0 auto;
    width: 742px;
    padding-bottom: 190px;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  dl {
    float: left;

    dt {
      width: 220px;
      height: 220px;
      border-radius: 50%;
    }

    dd {
      text-align: center;
      font-size: 36px;
      color: #fff;
      margin-top: 30px;
    }
  }

  dl.active {
    dt {
      background-color: #87c2f9;
      background: url(../assets/pic-active.png) no-repeat;
      background-size: 100%;
    }
  }

  dl.gray {
    dt {
      background-color: #d0d0d0;
      background: url(../assets/pic-gray.png) no-repeat;
      background-size: 100%;
    }
  }
}
</style>
