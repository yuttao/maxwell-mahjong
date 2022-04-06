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
      r: 40,
    };
  },
  computed: {
    R: function () {
      return this.r + this.r;
    },
    list: function () {
      let ret: def[] = [];
      let top = (385 - 4 * this.R) / 2;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
          let a: def = {
            x: 145 - j * this.R,
            y: top + this.R * i,
            color: "black",
          };
          ret.push(a);
        }
      }
      return ret;
    },
  },
};
</script>
