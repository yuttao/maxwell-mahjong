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
      :x="xoff"
      :y="yoff"
      :height="R"
      :width="R"
      stroke="darkgreen"
    />
    <use
      href="#CircleSymbol"
      :x="xoff"
      :y="395 - yoff - R"
      :height="R"
      :width="R"
      stroke="darkblue"
    />
    <use
      href="#CircleSymbol"
      :x="290 - xoff - R"
      :y="yoff"
      :height="R"
      :width="R"
      stroke="darkblue"
    />
    <use
      href="#CircleSymbol"
      :x="290 - xoff - R"
      :y="395 - yoff - R"
      :height="R"
      :width="R"
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
      r: 45,
      yoff: 55,
      xoff: 45,
    };
  },
  computed: {
    R: function () {
      return this.r + this.r;
    },
  },
};
</script>