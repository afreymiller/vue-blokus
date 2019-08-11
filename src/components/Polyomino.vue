<template>
  <div 
    class="wrapper"
    v-bind:class="{ selected: isSelected }"
  >
    <polyomino-row
      class="inner"
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
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .wrapper {
    max-height: 50px;
    display: grid;
    grid-template-columns: 10px 10px 10px 10px 10px;
    grid-gap: 0px;
    background-color: #fff;
    color: #444;
    margin-bottom: 60px;
  }

  .selected {
    border: 1px solid orange;
  }
</style>