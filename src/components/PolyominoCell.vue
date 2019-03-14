<template>
  <div 
    class="polyomino-tile"
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
    background-color: #D3D3D3;
    color: #fff;
    border: 1px solid black;
    padding: 0px;
    min-height: 10px;
    max-height: 10px;
    max-width: 10px;
    font-size: 20%;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>