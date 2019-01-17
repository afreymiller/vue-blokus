<template>
  <div class="hello">
    <div
      class="grid"
      @mouseover="hoverMe"
    >
      <p>20x20 grid</p>
    </div>
    <img 
      height="30px"
      width="20px"
      alt="block1" 
      src="../assets/block1.png"
      @mousedown="startDrag"
      @mousemove="doDrag"
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
    {{dragging}}
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
      dragging: false,
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
      this.dragging = true;
      this.x = this.y = 0;
    },
    hoverMe() {
      alert('on the grid');
    },
    stopDrag() {
      // this.dragging = false;
      // this.x = this.y = 'no';
    },
    doDrag(event) {
      if (this.dragging) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    },
    calculatePosition: function(e) {
      
      let offset = $(".grid").offset();
      this.left = e.pageX - offset.left;
      this.top = e.pageY - offset.top;
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.calculatePosition);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  background-color: lightgray;
  height: 300px;
  width: 300px;
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
