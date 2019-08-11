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
    boardConfig: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  },
  mutations: {
    updateBoardConfig: (state, payload) => state.boardConfig = payload
  },
  namespaced: true
}

const playerOneModule = {
  state: {
    score: 0,
    tiles: [
      {
        id: 0,
        selected: false,
        used: false,
        config: [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0]
        ]
      },
      {
        id: 1,
        selected: true,
        used: false,
        config: [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
      },
      {
        id: 2,
        selected: false,
        used: false,
        config: [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0]
        ]
      }
    ],
    message: "Hello",
    subsets: [
      {id: 1, val: 1},
      {id: 2, val: 2},
      {id: 3, val: 3},
      {id: 4, val: 4}
    ]
  },
  mutations: {
    updateRotation: (state, {i, newConfig}) => state.tiles[i].config = newConfig,
    placeTile: (state, {i}) => {
      state.tiles[i].selected = false;
      state.tiles[i].used = true;
      /* There should be a separate mutation for designating the 
      next selected piece */
      //state.tiles[1].selected = true;
    },
    setSelected: (state) => {
      let i = 0;
      while(i < 20) {
        if (state.tiles[i].selected === false && state.tiles[i].used === false) {
          state.tiles[i].selected = true;
          break;
        }

        i++;
      }
    },
    updateMessage: (state, message) => {
      state.message = message
    },
    setSubset: (state, obj) => {
      
    }
  },
  namespaced: true
}

const store = new Vuex.Store({
  modules: {
    game: gameModule,
    playerOne: playerOneModule
  }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
