<template>
  <div class="wrapper">
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
  .wrapper {
    max-height: 30px;
        display: grid;
        grid-template-columns: 10px 10px 10px 10px 10px;
        grid-gap: 0px;
        background-color: #fff;
        color: #444;
        margin-bottom: 60px;
  }
</style>