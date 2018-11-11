<template>
<div class="data-null" >
    <img src="../assets/indexnull2.png" alt="" srcset="">
    <p>暂无数据</p>
</div>
</template>

<script>
export default {
  //   props: ["show"]
};
</script>

<style lang="less" scoped>
.data-null {
  width: 1.95313rem;
  /* height: 1.95313rem; */
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 90%;
  flex-direction: column;

  > img {
    width: 100%;
  }

  > p {
    color: #98cae4;
    font-size: 36px;
  }
}
</style>
