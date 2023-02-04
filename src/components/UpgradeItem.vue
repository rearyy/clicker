<template>
  <div :key="upgrade.id" class="upgrade-item">
    <img class="upgrade-image" :src="upgrade.image" width="75" height="75"/>
    <div class="upgrade-cost">{{ upgrade.cost }} SP</div>
    <div class="upgrade-title">{{ upgrade.title }}</div>
    <div class="upgrade-description">{{ upgrade.description }}</div>
    <div v-if="upgrade.more" class="more-text">More:</div>
    <div v-for="more in upgrade.more" class="more-links">
      <a :href="more.url" target="_blank">{{ more.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpgradeItem",
  props: {
    upgrade: Object
  }
}
</script>

<style scoped>
.upgrade-item {
  width: 100%;
  height: fit-content;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 80px 100px auto auto;
  grid-template-areas:
    'image cost title title'
    'image description description description'
    'image more-text more more';
  row-gap: 10px;
}
.upgrade-image {
  grid-area: image;
}

.upgrade-cost {
  grid-area: cost;
  text-align: left;
  color: #38343c;
}

.upgrade-title {
  grid-area: title;
  text-align: left;
  font-weight: bold;
  color: #38343c;
}

.upgrade-description {
  text-align: left;
  font-style: italic;
  grid-area: description;
  color: #38343c;
}

.more-text {
  grid-area: more-text;
  color: #38343c;
}

.more a {
  grid-area: more;
  color: #38343c;
}
</style>
