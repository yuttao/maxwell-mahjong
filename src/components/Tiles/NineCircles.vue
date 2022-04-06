<script setup lang="ts">
import TileFront from "./TileFront.vue";
import CircleSymbol from "./CircleSymbol.vue";
</script>

<template>
  <svg viewBox="0 0 290 385" :width="width" xmlns="http://www.w3.org/2000/svg">
    <CircleSymbol />
    <TileFront />
    <use
      v-for="l in list"
      href="#CircleSymbol"
      :x="l.x"
      :y="l.y"
      :height="R"
      :width="R"
      :stroke="l.color"
    />
  </svg>
</template>

<script lang="ts">
type def = {
  x: number;
  y: number;
  color: string;
};
export default {
  props: {
    width: Number,
  },
  data: function () {
    return {
      r: 36,
      d: 30,
    };
  },
  computed: {
    R: function () {
      return this.r + this.r;
    },
    list: function () {
      let ret: def[] = [];
      let left = 145 - 3 * this.r;
      let top = (385 - 3 * this.R - 2 * this.d) / 2;
      for (let i = 0; i < 3; i++) {
        ret.push({
          x: left + this.R * i,
          y: top,
          color: "darkblue",
        });
        ret.push({
          x: left + this.R * i,
          y: top + this.d + this.R,
          color: "darkred",
        });
        ret.push({
          x: left + this.R * i,
          y: top + (this.d + this.R) * 2,
          color: "darkgreen",
        });
      }
      return ret;
    },
  },
};
</script>
