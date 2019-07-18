<template>
  <div class="polyomino">
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
  .polyomino {
    text-align: center;
  }
  .polyomino-tile {
    border: 1px solid black;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>