<script setup lang="ts">
import TwoCircles from "../components/Tiles/TwoCircles.vue";
import ThreeCircles from "../components/Tiles/ThreeCircles.vue";
import FourCircles from "../components/Tiles/FourCircles.vue";
import FiveCircles from "../components/Tiles/FiveCircles.vue";
</script>

<template>
  <main>
    <div>
      <TwoCircles :width="70" />
      <ThreeCircles :width="70" />
      <FourCircles :width="70" />
      <FiveCircles :width="70" />
    </div>
  </main>
</template>

<style>
div {
  display: inline-block;
}
</style>
