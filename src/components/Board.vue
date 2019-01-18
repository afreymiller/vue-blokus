<template>
  <div class="hello">
    <img 
      height="95px"
      width="60px"
      alt="block1" 
      src="../assets/block1.png"
    >
    <p>Block</p>
    <draggable
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
    </draggable>
    <h2>Count</h2>
    <p>
      <button @click="inc">+</button>
      <button @click="dec">-</button>
    </p>
    {{count}}
    {{left}}
    {{top}}
  </div>
</template>

<script>
var $ = require('jquery')
window.jQuery = $
import draggable from 'vuedraggable'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Board',
  components: {
    draggable
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
      ]
    }
	},
  props: {
    msg: String
  },
  computed: mapState({
    count: state => state.game.count
  }),
  methods:{
    ...mapMutations({
      inc: 'game/increment', // map `this.add()` to `this.$store.commit('increment')`
      dec: 'game/decrement'
    }),
    startDrag() {

    },
    stopDrag() {
      // this.dragging = false;
      // this.x = this.y = 'no';
    },
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

      var cw = bw + 1;
      var ch = bh + 1;

      let canvas = $('<canvas/>').attr({width: cw, height: ch}).prependTo('body');

      
      
      let ctx = canvas.get(0).getContext("2d");
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

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 20, 20);
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.calculatePosition);
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
