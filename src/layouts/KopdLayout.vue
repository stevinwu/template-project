<template>
  <div class="kopd-layout">
    <Layout>
      <Header class="kopd-kayout_header">
        <section :class="{ 'kopd-kayout_header_maxwidth': iskMaxWith }">
          <slot name="k-logo"></slot>
          <slot name="k-menu" v-bind:routes="routes"></slot>
          <slot name="k-nav" v-bind:routes="routes"></slot>
          <section class="kopd-kayout_header_right">
            <slot name="k-search" v-if="iskSearch"></slot>
            <slot name="k-avatar"></slot>
          </section>
        </section>
      </Header>
      <Content :style="{padding:'0 15px'}">
        <section :class="{ 'kopd-kayout_header_maxwidth': iskMaxWith }">
          <slot name="k-content"></slot>
        </section>
      </Content>
      <Footer class="layout-footer-center" v-if="iskFooterShow">
        <section :class="{ 'kopd-kayout_header_maxwidth': iskMaxWith }">
          <slot name="k-footer"></slot>
        </section>
      </Footer>
    </Layout>
  </div>
</template>

<script>
  import getRoutes from '@/router/routes.js'
  export default {
    name: "kopd-layout",
    props: {
      iskSearch: {
        type: Boolean,
        default: false 
      },
      iskMaxWith: {
        type: Boolean,
        default: false
      },
      iskFooterShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        routes: getRoutes()
      }
    },
  }
</script>

<style lang="less" scoped>
.layout-footer-center{
  text-align: center;
}
.kopd-layout{
  height: 100%;
  background-color: #f0f2f5;
  .ivu-layout{
    height: 100%;
    .ivu-layout-header{
      height: 62px;
      line-height: 62px;
      background-color: rgba(42, 130, 228, 1);
    }
  }
  .kopd-kayout_header {
    padding: 0 15px;
    section{
      display: flex;
      align-items: center;
    }
    .kopd-kayout_header_right {
      flex: 1;
      justify-content: flex-end;
    }
  }
  .kopd-kayout_header_maxwidth {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>