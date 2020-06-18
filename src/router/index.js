import Vue from "vue";
import VueRouter from "vue-router";
import getRoutes from "./routes"
import { filterRoutes } from '../utils/filerRoutes'

Vue.use(VueRouter);

const routes = filterRoutes(getRoutes())

const router = new VueRouter({
  // mode: "history", //设置为history模式
  // base: '', //如果您的项目部署不是在站点的根目录下， 这里为必填项
  routes
});

export default router;
