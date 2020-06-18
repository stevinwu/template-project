<template>
  <div class="page_404">
    <div class="page_404_box">
      <p><img alt="Vue logo" src="../assets/404.svg" /></p>
      <Button type="primary" @click="gotoIndex">返回首页</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    gotoIndex() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
.page_404 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .page_404_box {
    text-align: center;
  }
}
</style>
