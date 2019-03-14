<template>
  <div class="wrapper">
    <polyomino-cell
      v-for="row in config"
      v-bind:key="row"
      :filled="row === 1"
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