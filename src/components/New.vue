<template>
  <div class="game-wrapper">
    <div class="message">
      <label for="shop-name">店名: </label>
      <input name="shop-name" type="text" v-model="shopName" id="shop-name" class="textBox" placeholder="よろずや">
      <button @click="submit" class="button">OK</button>
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
      if (this.shopName !== '') {
        localStorage.setItem('shopName', this.shopName)
      } else {
        localStorage.setItem('shopName', 'よろずや')
      }
      localStorage.setItem('dayCount', 1)
      localStorage.setItem('dayOfWeek', '月')
      localStorage.setItem('dayOfStage', '朝')
      localStorage.setItem('weather', '晴れ')
      localStorage.setItem('money', 1000)
      localStorage.setItem('population', 1)
      localStorage.setItem('itemCount', 1)
      localStorage.setItem('sellRecord', 0)
      localStorage.setItem('moneyRecord', 1000)
      window.location = '/#/day'
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

.textBox {
  width: 250px;
  height: 20px;
  font-size: 16px;
}

.button {
  height: 30px;
  width: 130px;
  border: 1px solid #fff;
  border-radius: 0;
  background: #000;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #aaa;
  }
}
</style>
