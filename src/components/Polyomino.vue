<template>
  <div class="polyomino-grid">
    <div class="row"
      v-for="row in config.rows"
      v-bind:key="row.id"
    >
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Polyomino',
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

  .polyomino-tile {
    border: 2px solid black;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>