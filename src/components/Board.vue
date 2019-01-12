<template>
  <div class="hello">
    <draggable 
      :list="list">
      <div 
        v-for="element in list"
        :key="element.name"
      >
        {{element.name}}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Board',
  components: {
    draggable
  },
  data () {
    return {
      list: [
        {name:"John"}, 
        {name:"Joao"}, 
        {name:"Jean"} 
      ]
    }
	},
  props: {
    msg: String
  },
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
