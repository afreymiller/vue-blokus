<template>
  <div class="row">
    <polyomino-cell
      v-for="(cell, index) in row"
      v-bind:key="index"
      :filled="cell === 1"
    />
  </div>
</template>

<script>
import PolyominoCell from './PolyominoCell.vue'

export default {
  name: 'Polyomino',
  components: {
    PolyominoCell
  },
  props: {
    row: {
      type: Array,
      default: () => []
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