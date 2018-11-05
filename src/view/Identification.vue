<template>
<div>
    <app-header :ltitle='"后退"' :ctitle='"开始辨识"'></app-header>
    <div class="card">
        <router-link :to="{ path: 'answer', query: { type: 0 }}" class="left fl " :class="{active:user.crowdFlag == 1}" tag="div" replace>
            <i class="icon"></i>
            <h2>普通人群</h2>
            <div class="left-q"></div>
        </router-link>
        <!-- <div class="left fl active">
            <i class="icon"></i>
            <h2>普通人群</h2>
            <div class="left-q"></div>
        </div> -->
        <router-link   :to="{ path: 'answer', query: { type: 1 }}" class="right fr " :class="{active:user.crowdFlag == 2}" tag="div" replace>
            <i class="icon"></i>
            <h2>老年人群</h2>
            <div class="right-q"></div>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.user = this.$cache.getUser();
  }
};
</script>

<style lang="less" scoped>
.card {
  // width: 1718px;
  // margin: 0 auto;
  margin-top: 100px;
  margin-left: 250px;
  margin-right: 250px;
  display: flex;
  justify-content: space-around;
  .left,
  .right {
    width: 765px;
    height: 1155px;
    background: #fff;
    box-shadow: -1px 1px 30px #cacaca;
    border-radius: 50px;

    h2 {
      text-align: center;
      font-size: 60px;
      color: #282828;
      padding-top: 55px;
    }

    .left-q,
    .right-q {
      width: 465px;
      height: 720px;
      background: url(../assets/left-q.png) no-repeat;
      background-size: 100%;
      margin: 0 auto;
      margin-top: 200px;
    }

    .right-q {
      background: url(../assets/right-q.png) no-repeat;
      background-size: 100%;
    }
  }

  .left.active,
  .right.active {
    border: 1px solid #3ba6dd;
    box-shadow: -1px 1px 30px #3ba6dd;

    i.icon {
      width: 68px;
      height: 68px;
      background: url(../assets/xuanzhong.png) no-repeat;
      background-size: 100%;
      float: right;
      margin-top: 20px;
      margin-right: 20px;
    }
  }
}
</style>
