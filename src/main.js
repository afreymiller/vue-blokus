import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import VueLodash from 'vue-lodash'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

/* Integrating Bootstrap: https://www.sitepoint.com/bootstrap-vue-js-bootstrap-vue/ */

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueLodash);

const gameModule = {
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  namespaced: true
}

const store = new Vuex.Store({
  modules: {
    game: gameModule
  }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
