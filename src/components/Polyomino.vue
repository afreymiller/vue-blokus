<template>
  <div 
    class="wrapper"
    v-bind:class="getClass()"
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
import { mapMutations } from 'vuex'

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
    },
    tileId: {
      type: Number,
      default: -1
    }
  },
  methods: {
    ...mapMutations({
      setSelected: 'playerOne/setSelected'
    }),
    onClick: function() {
      // eslint-disable-next-line no-console
      console.log("on click called in " + this.tileId);
      //this.setSelected();
        // eslint-disable-next-line no-console
    },
    getClass: function() {
      let classString = '';

      if (this.isSelected) {
        classString += 'selected';
      }

      classString += ' polyomino-' + this.tileId.toString();

      return classString;
    }
  },
  created() {
    window.addEventListener('click', this.onClick);
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