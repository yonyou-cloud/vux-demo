import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
// import user from './userinfo/';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // user: user,
    i18n: vuexI18n.store
  }
})
