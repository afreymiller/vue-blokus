<template>
  <div class="row">
    <h1 class="col-md-2">{{ selection }}</h1>
    <polyomino
      :config="tile1"
      :isSelected=false
      class="col-md-2"
    />
    <polyomino
      :config="tile2"
      :isSelected=true
      class="col-md-2" 
    />
    <polyomino
      :config="tile3"
      :isSelected=false
      class="col-md-2"
    />
  </div>
</template>

<script>
import Polyomino from './Polyomino.vue'

export default {
  name: 'Bag',
  components: {
    Polyomino
  },
  props: {
    selection: Number
  },
  data () {
    return {
      tile1: [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      tile2: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
      ],
      tile3: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    }
  }
}
</script>