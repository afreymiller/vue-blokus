<template>
  <div>
    <board/>
    <bag
      :selection=tileId
    />
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
    <p>Score: {{score}}</p>
    {{top}} {{left}}
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
      selected: 3
    }
	},
  computed: {
    ...mapState({
      count: state => state.game.count,
      boardConfig: state => state.game.boardConfig,
      tileConfig: state => state.playerOne.tiles.filter(e => e.selected === true)[0].config,
      tileId: state => state.playerOne.tiles.filter(e => e.selected === true)[0].id,
      score: state => state.playerOne.score
    })
  },
  methods:{
    ...mapMutations({
      inc: 'game/increment',
      dec: 'game/decrement',
      update: 'game/updateBoardConfig',
      rotate: 'playerOne/updateRotation',
      placeTile: 'playerOne/placeTile',
      setSelected: 'playerOne/setSelected',
      updateScore: 'playerOne/updateScore'
    }),
    rotateClockwise: function() {
      let tmp = matrixTransformApi.rotateCounterclockwise(this.tileConfig);
      this.rotate({i: 0, newConfig: tmp});
    },
    rotateCounterclockwise: function() {
      let tmp = matrixTransformApi.rotateClockwise(this.tileConfig);
      this.rotate({i: 0, newConfig: tmp});
    },
    calculatePosition: function(e) {
      let offset = $("canvas").offset();
      this.left = e.pageX - offset.left;
      this.top = e.pageY - offset.top;

      canvasApi.updateCanvas(this.tileConfig, this.boardConfig, this.left, this.top);
    },
    onClick: function() {
      if (this.left >= 0 && this.left <= 400 && this.top >= 0 && this.top <= 400) {
        /* TODO: This should take place entirely in apiCanvas and return a game state */
        let tmpConfig = canvasApi.updateGameState(this.boardConfig, this.tileConfig, canvasApi.getCoords(this.left), canvasApi.getCoords(this.top));
        this.update(tmpConfig);
        this.placeTile({i: this.tileId});
        this.setSelected({i: null});
        this.updateScore({config: this.tileConfig});
      }
      
    }
  },
  created() {
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
