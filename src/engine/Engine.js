import upgradeList from "@/engine/Upgrades";

class Engine {
  spPerMillis = 0.0
  sp = 0.0
  upgrades = upgradeList
  lastTimeSpPerSecondsChecked = performance.now()
  bought = false

  buyUpgrade(id) {
    let upgrade = this.#findUpgrade(id)
    if (upgrade && !upgrade.bought && upgrade.cost <= this.sp) {
      this.sp -= upgrade.cost
      this.spPerMillis += upgrade.spPerSecond / 1000
      this.bought = true
    }
    return this.bought;
  }

  updateSp() {
    let currentTime = performance.now()
    this.sp = (currentTime - this.lastTimeSpPerSecondsChecked) * this.spPerMillis + this.sp
    this.lastTimeSpPerSecondsChecked = currentTime
  }

  addSp(noOfSp) {
    this.sp += noOfSp
    return this.sp;
  }

  #findUpgrade(id) {
    return this.upgrades.find(it => it.id === id)
  }

  #removeUpgrade(upgrade) {
    let index = this.upgrades.indexOf(upgrade);
    this.upgrades.splice(index, 1)
  }
}

let engine = new Engine();
setInterval(function () {engine.updateSp()}, 1000)
export default engine;


