<template>
  <div class="game-wrapper">
    <div class="message">
      <label for="shop-name">店名：</label>
      <input name="shop-name" type="text" v-model="shopName">
      <button @click="submit">OK</button>
      <button @click="submit">キャンセル</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
      return {
        shopName: ''
      }
    },
    methods: {
      submit: function() {
        if (this.shopName === '') {
          localStorage.setItem('shopName', 'よろずや')
          window.location = '/#/day'
        } else {
          localStorage.setItem('shopName', this.shopName)
        }
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
