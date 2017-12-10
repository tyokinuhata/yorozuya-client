<template>
  <div class="game-wrapper">
    <ul class="menu">
      <router-link to="continue">続きから</router-link>
      <router-link to="new">初めから</router-link>
    </ul>
    <div class="message">
      {{message}}
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        message: "「YOROZUYA for ITC」お店経営シュミレーション",
      }
    }
  }
</script>

<style lang="scss" scoped>
.game-wrapper {
  height: 100%;
  position: relative;
}

.menu {
  color: #fff;
  position: absolute;
  bottom: 10rem;
  & a {
    display: block;
    width: 5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    &:hover {
      background-color:#aaa;
    }
  }
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
