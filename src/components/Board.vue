
<template>
  <div>
  <canvas id="board"></canvas>
  {{count}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Board',
 
  computed: mapState({
    count: state => state.game.count
  })
}
</script>

<style scoped>
canvas {
    background: #fff;
    margin: 20px;
}
</style>