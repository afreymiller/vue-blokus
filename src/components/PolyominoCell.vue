<template>
  <div class="col-sm-3 polyomino-tile polyomino-tile--filled">{{filled}}</div>
</template>

<script>
export default {
  name: 'Polyomino',
  props: {
    filled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .polyomino-tile {
    border: 2px solid black;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>