<template>
  <div>
    <polyomino
      :config="rowConfig1" 
    />
    <polyomino
      :config="rowConfig2" 
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
  data () {
    return {
      rowConfig1: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      rowConfig2: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0]
      ]
    }
  }
}
</script>