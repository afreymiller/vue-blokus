<template>
  <div>
    <!-- <img 
      height="95px"
      width="60px"
      alt="block1" 
      src="../assets/logo.png"
    > -->
    <canvas id="myCanvas"></canvas>
    <!-- <draggable
      :list="player1" 
      class="dragArea" 
      :options="{group:'people'}"
    >
      <div
        v-for="element in player1"
        :key="element.name"
      >
        {{element.name}}
      </div>
    </draggable>
    <br>
    <draggable 
      :list="player2"
      class="dragArea"
      :options="{group:'people'}"
    >
      <div
        v-for="element in player2"
        :key="element.name"
      >
        {{element.name}}
      </div>
    </draggable> -->
    <polyomino
      :config="rowConfig" 
    />
    <!-- <h2>Count</h2> -->
    <!-- <p>
      <button @click="inc">+</button>
      <button @click="dec">-</button>
    </p> -->
    <!-- {{count}} -->
    {{left}}
    {{top}}
  </div>
</template>

<script>
var $ = require('jquery')
window.jQuery = $
// import draggable from 'vuedraggable'
import { mapState, mapMutations } from 'vuex'
import Polyomino from './Polyomino.vue'

export default {
  name: 'Board',
  components: {
    Polyomino
  },
  data () {
    return {
      left: 0,
      top: 0,
      player1: [
        {name:"5-gram"}, 
        {name:"4-gram"}, 
        {name:"3-gram"} 
      ],
      player2: [
        {name: "5-gram"}, 
        {name: "4-gram"}, 
        {name: "3-gram"}
      ],
      rowConfig: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
      ]
    }
	},
  props: {
    msg: {
      type: String,
      default: ''
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
    },
    updateCanvas: function() {
      //let canvas = document.getElementById('grid')
      var bw = 400;
      var bh = 400;
      //padding around grid
      let x;

      $("#myCanvas").attr({width: bw + 1, height: bh + 1});

      let canvas = document.getElementById("myCanvas");

      // let canvas = $('<canvas/>').attr({width: bw + 1, height: bh + 1}).prependTo('body');

      let ctx = canvas.getContext("2d");
      for (x = 0; x <= bw; x += 20) {
        ctx.moveTo(0.5 + x, 0);
        ctx.lineTo(0.5 + x, bh);
      }

      for (x = 0; x <= bh; x += 20) {
          ctx.moveTo(0, 0.5 + x);
          ctx.lineTo(bw, 0.5 + x);
      }

      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.fillStyle = '#DCDCDC';
      ctx.fillRect(1, 1, 19, 19);
      ctx.fillRect(21, 1, 19, 19);
      ctx.fillRect(1, 21, 19, 19);
      ctx.fillRect(1, 41, 19, 19);
      ctx.fillRect(1, 61, 19, 19);
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.calculatePosition);
    window.addEventListener('mouseup', this.calculatePosition);
    this.updateCanvas();
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
