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
        message: "「YOROZUYA with Bitcoin」お店経営シュミレーションVer.0.1",
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
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    display: block;
    width: 5rem;
    padding: 0.5rem 1rem;
    border: white solid 2px;
    &:hover {
      background-color:#aaa;
    }
  }
}

.message {
  position: absolute;
  bottom: 1rem;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 4px;
  color: #fff;
}
</style>
