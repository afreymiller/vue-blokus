<template>
  <div class="polyomino-grid">
    <polyomino-row
      v-for="(row, index) in config"
      v-bind:key="index"
      :row="row"
    />
  </div>
</template>

<script>
import PolyominoRow from './PolyominoRow.vue'

export default {
  name: 'Polyomino',
  components: {
    PolyominoRow
  },
  props: {
    config: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .polyomino-grid {
    width: 20%;
    height: 50px;
  }
</style>