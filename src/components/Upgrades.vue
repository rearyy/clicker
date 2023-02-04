<template>
  <div class="upgrades">
    <div class="buttons">
      <a href="#/toBuy" :class="{ selected:  visibility === 'toBuy'}">To buy</a>
      <a href="#/bought" :class="{ selected:  visibility === 'bought'}">Bought</a>
    </div>
    <TransitionGroup name="fade">
      <div v-for="upgrade in filteredUpgrades" class="upgrade" :key="upgrade.id">
        <upgrade-item :upgrade=upgrade @click="buyUpgrade(upgrade)"/>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import UpgradeItem from "@/components/UpgradeItem.vue";
import engine from "@/engine/Engine";

const filters = {
  toBuy: (upgrades) => upgrades.filter((upgrade) => !upgrade.bought),
  bought: (upgrades) => upgrades.filter((upgrade) => upgrade.bought)
}

export default {
  name: "Upgrades",
  components: {UpgradeItem},
  data() {
    return {
      upgrades: engine.upgrades,
      visibility: 'toBuy'
    }
  },
  watch: {
    upgrades: {
      handler(upgrades) {

      }, deep: true
    }
  },
  mounted() {
    window.addEventListener('hashchange', this.onHashChange)
    this.onHashChange()
  },
  computed: {
    filteredUpgrades() {
      return filters[this.visibility](this.upgrades)
    },
  },
  methods: {
    buyUpgrade(upgrade) {
      this.upgrades[this.upgrades.findIndex(it => it.id === upgrade.id)].bought = engine.buyUpgrade(upgrade.id);
    },
    onHashChange() {
      var visibility = window.location.hash.replace(/#\/?/, '')
      if (filters[visibility]) {
        this.visibility = visibility
      } else {
        window.location.hash = ''
        this.visibility = 'toBuy'
      }
    }
  }
}
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.upgrades {
  overflow-y: scroll;
  overflow-x: hidden;
}

.upgrade {
  width: 100%;
}
.buttons {
  margin: 3px;
}
.buttons a {
  height: fit-content;
  box-sizing: border-box;
  color: inherit;
  padding: 1px 10px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.buttons a.selected {
  border-color: #CE4646;
}

</style>
