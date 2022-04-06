<script setup lang="ts">
import TileFront from "./TileFront.vue";
import CircleSymbol from "./CircleSymbol.vue";
</script>

<template>
  <svg viewBox="0 0 290 385" :width="width" xmlns="http://www.w3.org/2000/svg">
    <CircleSymbol />
    <TileFront />
    <use
      href="#CircleSymbol"
      :x="145 - R"
      :y="yoff"
      :height="R"
      :width="R"
      stroke="darkgreen"
    />
    <use
      href="#CircleSymbol"
      :x="145 - R"
      :y="385 - yoff - R"
      :height="R"
      :width="R"
      stroke="darkred"
    />
    <use
      href="#CircleSymbol"
      :x="145 - R"
      :y="385 - yoff - R - R"
      :height="R"
      :width="R"
      stroke="darkred"
    />
    <use
      href="#CircleSymbol"
      :x="145"
      :y="385 - yoff - R - R"
      :height="R"
      :width="R"
      stroke="darkred"
    />
    <use
      href="#CircleSymbol"
      :x="145"
      :y="yoff"
      :height="R"
      :width="R"
      stroke="darkgreen"
    />
    <use
      href="#CircleSymbol"
      :x="145"
      :y="385 - yoff - R"
      :height="R"
      :width="R"
      stroke="darkred"
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
      r: 40,
      yoff: 55,
    };
  },
  computed: {
    R: function () {
      return this.r + this.r;
    },
  },
};
</script>
