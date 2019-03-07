<template>
  <div class="polyomino-grid">
    <div class="row">
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
    </div>
    <div class="row">
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
    </div>
    <div class="row">
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
    </div>
    <div class="row">
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile polyomino-tile--filled">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
      <div class="col-sm-3 polyomino-tile">.col-sm-3</div>
    </div>
  </div>
</template>

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