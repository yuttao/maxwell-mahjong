<script setup lang="ts">
import TileFront from "./TileFront.vue";
import CircleSymbol from "./CircleSymbol.vue";
</script>

<template>
  <svg viewBox="0 0 290 395" :width="width" xmlns="http://www.w3.org/2000/svg">
    <CircleSymbol />
    <TileFront />
    <use
      href="#CircleSymbol"
      :x="145 - r"
      :y="off"
      :width="R"
      :height="R"
      stroke="darkblue"
    />
    <use
      href="#CircleSymbol"
      :x="145 - r"
      :y="395 - R - off"
      :width="R"
      :height="R"
      stroke="darkgreen"
    />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    width: Number,
  },
  data: function () {
    return {
      r: 60,
      off: 60,
    };
  },
  computed: {
    R: function () {
      return this.r + this.r;
    },
    x: function () {
      return 145 - this.r;
    },
  },
};
</script>
