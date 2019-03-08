<template>
  <div 
    class="col-sm-3 polyomino-tile"
    v-bind:class="{ 'polyomino-tile--filled': filled }"
  >
  </div>
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
    min-width: 30px;
    min-height: 30px;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>