import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)


new Vue({
  render: h => h(App),
}).$mount('#app')
