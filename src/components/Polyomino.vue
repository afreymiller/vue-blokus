<template>
  <div class="polyomino-grid">
    <polyomino-row
      v-for="row in config.rows"
      v-bind:key="row.id"
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