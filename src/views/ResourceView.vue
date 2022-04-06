<script setup lang="ts">
import TwoCircles from "../components/Tiles/TwoCircles.vue";
import ThreeCircles from "../components/Tiles/ThreeCircles.vue";
import FourCircles from "../components/Tiles/FourCircles.vue";
import FiveCircles from "../components/Tiles/FiveCircles.vue";
import SixCircles from "../components/Tiles/SixCircles.vue";
import SevenCircles from "../components/Tiles/SevenCircles.vue";
import EightCircles from "../components/Tiles/EightCircles.vue";
import NineCircles from "../components/Tiles/NineCircles.vue";
</script>

<template>
  <main>
    <div>
      <TwoCircles :width="70" />
      <ThreeCircles :width="70" />
      <FourCircles :width="70" />
      <FiveCircles :width="70" />
      <SixCircles :width="70" />
      <SevenCircles :width="70" />
      <EightCircles :width="70" />
      <NineCircles :width="70" />
    </div>
  </main>
</template>

<style>
div {
  display: inline-block;
}
</style>
