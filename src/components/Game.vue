<template>
  <div>
    <board/>
    <bag
      :selection=selected
    />
    <select v-model="selected">
      <option disabled value="">Please select one:</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button type="button"
      v-on:click="rotateClockwise()"
    >
      Rotate clockwise
    </button>
    <button type="button"
      v-on:click="rotateCounterclockwise()"
    >
      Rotate counterclockwise
    </button>
    <button 
      v-on:click="inc()"
    >Inc</button>
    <button
      v-on:click="dec()"
    >Dec</button>
    {{count}}
  </div>
</template>

<script>
/* eslint-disable no-console */
var $ = require('jquery')
window.jQuery = $
import { mapState, mapMutations } from 'vuex'
import canvasApi from '../helpers/canvasApi.js'
import matrixTransformApi from '../helpers/matrixTransformApi.js'
import Board from './Board.vue'
import Bag from './Bag.vue'

export default {
  name: 'Game',
  components: {
    Board,
    Bag
  },
  data () {
    return {
      left: 0,
      top: 0,
      selected: 0,
      tileConfig: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    }
	},
  computed: mapState({
    count: state => state.game.count,
    boardConfig: state => state.game.boardConfig
  }),
  methods:{
    ...mapMutations({
      inc: 'game/increment', // map `this.add()` to `this.$store.commit('increment')`
      dec: 'game/decrement',
      addTile: 'game/addTile'
    }),
    rotateClockwise: function() {
      this.tileConfig = matrixTransformApi.rotateCounterclockwise(this.tileConfig);
    },
    rotateCounterclockwise: function() {
      this.tileConfig = matrixTransformApi.rotateClockwise(this.tileConfig);
    },
    calculatePosition: function(e) {
      let offset = $("canvas").offset();
      this.left = e.pageX - offset.left;
      this.top = e.pageY - offset.top;

      canvasApi.updateCanvas(this.tileConfig, this.boardConfig, this.left, this.top);
    },
    onClick: function() {
      /* TODO: This should take place entirely in apiCanvas and return a game state */
      this.boardConfig = canvasApi.updateGameState(this.boardConfig, this.tileConfig, canvasApi.getCoords(this.left), canvasApi.getCoords(this.top));
      // eslint-disable-next-line no-console
    }
  },
  created() {
    console.log(this.count);
    console.log(this.boardConfig);
    // eslint-disable-next-line no-console
    window.addEventListener('mousemove', this.calculatePosition);
    window.addEventListener('mouseup', this.calculatePosition);
    window.addEventListener('click', this.onClick);
    canvasApi.updateCanvas(this.tileConfig, this.boardConfig, 0, 0);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#grid {
  background-color: lightgray;
  height: 300px;
  width: 300px;
}
canvas {
    background: #fff;
    margin: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
