/* eslint-disable no-console */
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
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    score: 1,
    tiles: [
      {
        id: 0,
        selected: true,
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
        selected: false,
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
        config: [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0]
        ]
      }
    ]
  },
  mutations: {
    updateRotation: (state, {i, newConfig}) => {
      console.log("updating rotation: ");
      console.log("newConfig: ", newConfig);
      state.tiles[i].config = newConfig;
    },
    placeTile: (state, {i}) => {
      let index = state.tiles.findIndex(e => e.id === i)
      state.tiles.splice(index, 1);
    },
    updateScore: (state, {config}) => {
      let total = 0;
      let i, j = 0;

      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
          if (config[i][j] !== 0) {
            total += 1;
          }
        }
      }

      state.score += total;
    },
    setSelected: (state, {i}) => {
      if (i !==  null) {
        let index = 0;

        for (index = 0; index < state.tiles.length; index++) {
          if (state.tiles[index].id === i) {
            state.tiles[index].selected = true;
          } else {
            state.tiles[index].selected = false;
          }
        }
      } else {
        state.tiles[0].selected = true;
      }
      
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
