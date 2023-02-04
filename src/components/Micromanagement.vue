<template>
  <div class="management">
    <div class="text">Story points: {{storyPoints}}</div>
    <div class="text">Story points per second: {{spPerSecond}}</div>
    <button @click="micromanagementClicked()">MICROMANAGE</button>
    <img alt="Vue logo" class="poor_dev_image " :class="{suffer: devSuffer}" src="../assets/poor_developer.png"/>
  </div>
</template>

<script>
import engine from "@/engine/Engine";

export default {
  name: "Micromanagement",
  methods: {
    micromanagementClicked() {
      engine.addSp(10)
      this.devSuffering()
    },
    refreshSp() {
      this.storyPoints = engine.sp
      this.spPerSecond = engine.spPerMillis * 1000
    },
    devSuffering() {
      this.devSuffer = true
      setTimeout((function () { this.devSuffer = false}).bind(this), 250)
    }
  },
  created() {
    setInterval(this.refreshSp, 500)
  },
  data() {
    return {
      storyPoints: engine.sp,
      spPerSecond: engine.spPerMillis * 1000,
      devSuffer: false
    }
  }
}
</script>

<style scoped>
.management {
  display: grid;
  grid-template-rows:  1fr 1fr;
  justify-content: center;
  padding: 2rem 2rem;
  text-align: center;
}

.management button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 30px 75px;
  width: 70%;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 25px auto 25px;
}

.management .text {
  font-size: 30px;
}

.poor_dev_image {
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}

.suffer {
  filter: invert(1);
}


</style>
