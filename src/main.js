import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

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
