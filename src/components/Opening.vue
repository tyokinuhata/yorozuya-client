<template>
  <div class="game-wrapper">
    <div class="message">
      <div>お客さんが全部で{{ customer }}人やってきました</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: Math.floor((Math.floor(Math.random() * (20 - 10) + 10) * (1 + localStorage.getItem('population') / 10)))
    }
  }
}
</script>

<style lang="scss" scoped>
.game-wrapper {
  height: 100%;
  position: relative;
}

.message {
  position: absolute;
  bottom: 1rem;
  width: 90%;
  margin: 0 2%;
  padding: 2rem 1rem;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}
</style>
