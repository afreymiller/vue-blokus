<template>
  <div>
    <board/>
    <bag/>
  </div>
</template>

<script>
var $ = require('jquery')
window.jQuery = $
import { mapState, mapMutations } from 'vuex'
import canvasApi from '../helpers/canvasApi.js'
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
      config: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    }
	},
  computed: mapState({
    count: state => state.game.count
  }),
  methods:{
    ...mapMutations({
      inc: 'game/increment', // map `this.add()` to `this.$store.commit('increment')`
      dec: 'game/decrement'
    }),
    calculatePosition: function(e) {
      let offset = $("canvas").offset();
      this.left = e.pageX - offset.left;
      this.top = e.pageY - offset.top;

      canvasApi.updateCanvas(this.config, this.left, this.top);
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.calculatePosition);
    window.addEventListener('mouseup', this.calculatePosition);
    canvasApi.updateCanvas(this.config, 0, 0);
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
