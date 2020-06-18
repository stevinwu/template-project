<template>
  <Menu
    :mode="kMode"
    :theme="kTheme"
    :active-name="activeName"
    :class="className"
  >
    <div
      v-for="(route, index) in slotRoutes"
      :key="route.path"
      class="menu-box"
    >
      <MenuItem
        :name="route.path"
        v-if="
          !route.redirect &&
            !route.children &&
            route.path !== '*' &&
            route.path !== '/'
        "
      >
        <router-link :to="route.path" class="menu-level1">{{
          route.meta.menu
        }}</router-link>
      </MenuItem>
      <Submenu
        :name="route.path"
        v-if="
          !route.redirect &&
            route.children &&
            route.path !== '*' &&
            route.path !== '/'
        "
      >
        <template slot="title">{{ route.meta.menu }}</template>
        <MenuItem
          v-for="child in route.children"
          :key="child.path"
          :name="child.path"
        >
          <router-link :to="child.path" class="menu-level2">{{
            child.meta.menu
          }}</router-link>
        </MenuItem>
      </Submenu>
    </div>
  </Menu>
</template>

<script>
export default {
  name: "kopd-menu",
  props: {
    kMode: {
      type: String,
      default: "vertical",
    },
    kTheme: {
      type: String,
      default: "light",
    },
    activeName: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    slotRoutes: {
      tyep: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
