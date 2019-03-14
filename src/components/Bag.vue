<template>
  <div>
    <polyomino
      :config="rowConfig" 
    />
    <polyomino
      :config="rowConfig" 
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
      rowConfig: [
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 1, 0, 0
      ]
    }
  }
}
</script>