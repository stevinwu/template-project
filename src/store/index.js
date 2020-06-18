import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const User = {
  namespaced: true,
  state: {
    userName: sessionStorage.getItem("userName") || "",
    chinese: sessionStorage.getItem("chinese") || "",
    avatar: sessionStorage.getItem("avatar") || "",
    token: sessionStorage.getItem("token") || "",
    loginTimer: sessionStorage.getItem('loginTimer') || ""
  },
  mutations: {
    updateUserInfo(state, payload) {
      console.log(payload);
      sessionStorage.setItem('userName', payload.userName);
      sessionStorage.setItem('chinese', payload.chinese);
      sessionStorage.setItem('avatar', payload.avatar);
      sessionStorage.setItem('token', payload.token);
      sessionStorage.setItem('loginTimer', new Date().getTime());
      Object.assign(state,payload);
    }
  },
  // actions: {},
  getters: {
    getToken(state) {
      const { token, loginTimer } = state;
      let exp = 60 * 1000 * 60 * 11;
      let isTimed = (new Date().getTime() - loginTimer) > exp;
      if (!token || isTimed) {
        return ''
      }
      return sessionStorage.getItem('token')
    }
  }
}

export default new Vuex.Store({
  state: {
    //如果你希望使用全局 state 和 getter，
    //rootState 和 rootGetters 会作为第三和第四参数传入 getter，
    //也会通过 context 对象的属性传入 action
    name: 'root state name' 
  },
  modules: {
    User
  }
});
