<template>
  <div class="row">
    <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
    <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
    <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
    <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
  </div>
</template>

<style scoped>
  .polyomino-tile {
    border: 2px solid black;
  }

  .polyomino-tile--filled {
    background-color: blue;
  }
</style>