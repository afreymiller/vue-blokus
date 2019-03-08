
<template>
  <canvas id="board"></canvas>
</template>

<script>
var $ = require('jquery')
window.jQuery = $

export default {
  name: 'Board',
  props: {
    filled: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
}
</script>

<style scoped>
canvas {
    background: #fff;
    margin: 20px;
}
</style>