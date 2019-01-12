<template>
  <div class="hello">
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
    {{count}}
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
export default {
  name: 'Board',
  components: {
    draggable
  },
  data () {
    return {
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
    count: state => state.count
  }),
  methods:{
    add: function(){
      this.list.push({name:'Juan'});
    },
    replace: function(){
      this.list=[{name:'Edgard'}]
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
