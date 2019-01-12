<template>
  <div id="app">
    <!--Leave as example for tying in images-->
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p> -->
    <board msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Board from './components/Board.vue'
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)



export default {
  name: 'app',
  // computed: {
  //   count () {
  //     return store.state.count
  //   }
  // },
  // methods: {
  //   increment () {
  //     store.commit('increment')
  //   },
  //   decrement () {
  //     store.commit('decrement')
  //   }
  // },
  components: {
    Board
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
