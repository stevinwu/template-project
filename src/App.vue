<template>
  <div class="app-container">
    <kopd-layout
      :iskSearch="iskSearch"
      :iskMaxWith="iskMaxWith"
      :iskFooterShow="iskFooterShow"
    >
      <template v-slot:k-logo>
        <div class="k-logo_img" v-if="!iskPName"><img src="./assets/logo.svg" /></div>
        <div class="k-logo_name" v-else>{{ kPName }}</div>
      </template>
      <template v-slot:k-menu="slotProps">
        <kopd-menu kMode="horizontal" kTheme="light" :activeName="activeName" className="k-toggler_menu" :slotRoutes="slotProps.routes"></kopd-menu>
      </template>
      <template v-slot:k-nav="slotProps">
        <div class="k-toggler_nav">
          <Icon type="md-menu" @click="drawerToggle = true" />
          <Drawer placement="left" :closable="false" v-model="drawerToggle" class="k-toggler_nav_drawer">
            <kopd-menu kMode="vertical" kTheme="dark" :activeName="activeName" :slotRoutes="slotProps.routes"></kopd-menu>
          </Drawer>
        </div>
      </template>
      <template v-slot:k-search>
        <div class="k-search_input">
          <Input
            v-model="kSearchValue"
            :placeholder="kSearchPlaceholder"
            :clearable="true"
            style="width: auto"
            @on-enter="onKSearch"
          >
            <Icon type="ios-search" slot="suffix" />
          </Input>
        </div>
      </template>
      <template v-slot:k-avatar>
        <div class="k-avatar_userInfo">
          <span class="k-avatar_userInfo_detail">{{ fullUser }}</span>
          <Dropdown placement="bottom-end">
            <a href="javascript:;" class="k-avatar_userInfo_avatar">
              <Avatar :src="avatar" />
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>
                <a :href="userInfoUrl" target="_blank">个人信息</a>
              </DropdownItem>
              <DropdownItem divided>
                <a :href="signOutUrl">退出登录</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </template>
      <template v-slot:k-content>
        <router-view />
      </template>
      <template v-slot:k-footer>
        @运维部-运营开发组
      </template>
    </kopd-layout>
  </div>
</template>

<script>
import KopdLayout from "./layouts/KopdLayout.vue";
import KopdMenu from "./layouts/KopdMenu.vue"
import { extendsConfig } from "./layouts/global";
import request from "@/utils/request";
import { TOKENURL } from "@/config";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("User");
export default {
  components: {
    KopdLayout,
    KopdMenu
  },
  data() {
    return {
      activeName: "",
      kSearchValue: "",
      drawerToggle: false,
    };
  },
  created() {
    this.$Spin.show();
  },
  mounted() {
    this._getToken();
  },
  computed: {
    fullUser() {
      return `${this.userName}(${this.chinese})`;
    },
    ...mapState({
      userName: (state) => state.userName,
      chinese: (state) => state.chinese,
      avatar: (state) => state.avatar,
    }),
    ...mapGetters(["getToken"]),
  },
  methods: {
    ...mapMutations(["updateUserInfo"]),
    _getToken() {
      if (!this.getToken) {
        request({
          url: TOKENURL,
        }).then((ret) => {
          const data = ret.data;
          if (data.errcode !== 0) {
            const fullPath = this.$route.fullPath;
            const { href } = window.location;
            this.$Message.loading({
              content: "请先登录opd， 页面跳转中..",
              onClose: () =>
                (window.location.href = this.signInUrl + "?url=" + href),
            });
          } else {
            this.updateUserInfo(data.data);
            this.$Spin.hide();
          }
        });
      } else {
        this.$Spin.hide();
      }
    },
    onKSearch(event) {
      console.log(event.target.value);
      console.log("kSearchValue", this.kSearchValue);
      this.kSearchValue = "";
    },
  },
  extends: extendsConfig,
  watch: {
    $route(newValue, oldValue) {
      this.activeName = newValue.fullPath;
    },
  },
};
</script>

<style lang="less">
html,
body,
.app-container {
  height: 100%;
}
.app-container {
  .k-logo_name {
    font-size: 24px;
    color: #fff;
    font-weight: bolder;
    margin-right: 10px;
  }
  .k-logo_img {
    display: flex;
    width: 120px;
    margin-right: 10px;
    img {
      max-width: 100%;
    }
  }
  .menu-box {
    display: inline-block;
  }
  .k-search_input {
    flex: 1;
    text-align: right;
    input {
      border-radius: 20px;
    }
  }
  .k-avatar_userInfo {
    .k-avatar_userInfo_detail {
      display: inline-block;
      color: #fff;
      padding: 0 10px;
    }
    .k-avatar_userInfo_avatar {
      color: #fff;
      .ivu-icon {
        padding-left: 5px;
      }
    }
  }
  .ivu-menu-item {
    display: flex;
    .menu-level1 {
      color: #fff;
    }
    .menu-level2 {
      color: #515a6e;
    }
  }
  .ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-horizontal .ivu-menu-submenu:hover {
    border-bottom: 2px solid #fff !important;
  }
  .ivu-menu-submenu-title {
    color: #fff;
  }
  .ivu-menu-submenu-title > i {
    margin-right: 0px;
    margin-left: 6px;
  }
  .ivu-menu-light {
    background: rgba(42, 130, 228, 1);
  }
  .ivu-menu-horizontal.ivu-menu-light:after {
    background: rgba(42, 130, 228, 1);
  }
}
.ivu-message {
  z-index: 4068 !important;
}
.k-toggler_nav_drawer {
  .ivu-drawer-content {
    background-color: #515a6e;
    .ivu-drawer-body {
      padding: 16px 16px 16px 0;
      .ivu-menu {
        width: 256px !important;
      }
      .ivu-menu-item-selected {
        background-color: #2d8cf0!important;
      }
    }
  }
  a, a:hover, a:focus, a:active{
    display: inline-block;
    width: 100%;
    color: #fff;
  }
}
.k-toggler_nav {
  color: #fff;
  font-size: 30px;
  display: none;
}
.k-toggler_nav:hover {
  cursor: pointer;
}
@media screen and (max-width: 1000px) {
  .k-toggler_nav {
    display: flex;
  }
  .k-toggler_menu {
    display: none !important;
  }
  .k-search_input {
    display: none !important;
  }
  .k-avatar_userInfo {
    text-align: right;
  }
}
@media screen and (max-width: 400px) {
  .k-avatar_userInfo_detail {
    display: none !important;
  }
}
</style>
