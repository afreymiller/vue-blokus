<template>
  <div class="polyomino-grid">
    <polyomino-row
      v-for="(row, index) in config.rows"
      v-bind:key="index"
      :row="row"
    >
      {{config.rows}}
    </polyomino-row>
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
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .polyomino-grid {
    background-color: lightgray;
    width: 20%;
    height: 50px;
  }
</style>