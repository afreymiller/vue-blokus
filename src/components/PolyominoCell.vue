<template>
  <div 
    class="col-2 polyomino-tile"
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
    /* min-width: 5px;
    max-width: 5px; */
    min-height: 15px;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>