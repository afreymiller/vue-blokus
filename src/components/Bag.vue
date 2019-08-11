<template>
  <div class="row">
    <h1 class="col-md-2">{{ selection }}</h1>
    <polyomino
      v-for="(polyomino, index) in tiles"
      v-bind:key="index"
      :config="polyomino.config"
      :isSelected="polyomino.id == selection"
      class="col-md-2"
    />
  </div>
</template>

<script>
import Polyomino from './Polyomino.vue'
import { mapState } from 'vuex'

export default {
  name: 'Bag',
  components: {
    Polyomino
  },
  props: {
    selection: Number
  },
  computed: {
    ...mapState({
      tiles: state => state.playerOne.tiles
    })
  }
}
</script>