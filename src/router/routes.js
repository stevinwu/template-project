/**
 * 统一入口：
 *  1、提供路由管理数据
 *  2、导航条路由数据
 */
export default function getRoutes() {
  return [
    {
      path: "/",
      name: "Index",
      redirect: '/home',
    },
    {
      path: "/home",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      meta: {
        title: "home", // 显示在document.title上面的值
        menu: "首页-page", //显示在顶部导航条的名称
      },
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta: {
        title: "about",
        menu: "管理-page", //显示在顶部导航条的名称
      },
      children: [
        {
          path: "/profile",
          name: "Profile",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
          meta: {
            title: "about not Nest child",
            menu: "账号管理-page",
            isNest: false,
          },
        },
        {
          path: "/profile_nest",
          name: "Profile_nest",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
          meta: {
            title: "about Nest child",
            menu: "账号管理(嵌套父级)-page",
            isNest: true, //这里设置为嵌套， 需要在父级路由组件， 加上<router-view /> 挂载当前子路由内容
          },
        },
      ],
    },
    {
      path: "*",
      name: "page_404",
      component: () =>
        import(/* webpackChunkName: "page_404" */ "../views/Page_404.vue"),
      meta: {
        title: "404页",
      },
    },
  ];
}
