<template>
  <div class="row">
    <polyomino
      v-for="(polyomino, index) in tiles"
      v-bind:key="index"
      :config="polyomino.config"
      :isSelected="polyomino.id == selection"
      :tileId="polyomino.id"
      class="col-md-1"
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