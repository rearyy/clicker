<script setup>
import Micromanagement from "@/components/Micromanagement.vue";
import Upgrades from "@/components/Upgrades.vue";
</script>

<template>
  <header>
    <h1>Personal growth delegated to javascript</h1>
    <h2>Because there is no need for self development when clicking in app can give more dopamine in less time</h2>
  </header>
  <main>
    <div class="gridded">
      <Micromanagement/>
      <Upgrades/>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
  font-family: "Comic Sans MS";
}
main {
  min-height: 0;
}

.gridded {
  display: grid;
  height: 80vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

</style>
