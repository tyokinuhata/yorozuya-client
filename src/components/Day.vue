<template>
<div class="game-wrapper">
    <ul class="menu">
      <router-link :to="item.path" v-for="item in items">
        <li>
          {{item.name}}
        </li>
      </router-link>
    </ul>
    <div class="message">
      店名「{{shopName}}」<br>
      {{dayCount}}日目　{{dayOfWeek}}曜日　{{dayOfStage}}　{{weather}}<br>
      資金： {{money}}G　店の人気度： {{population}}<br>
      見つけたアイテム： {{itemCount}}種類<br>
      売上記録：{{sellRecord}}G　最高資金：{{moneyRecord}}G
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        shopName: localStorage.getItem('shopName'),
        dayCount: localStorage.getItem('dayCount'),
        dayOfWeek: localStorage.getItem('dayOfStage'),
        population: localStorage.getItem('population'),
        weather: localStorage.getItem('weather'),
        money: localStorage.getItem('money'),
        itemCount: localStorage.getItem('itemCount'),
        sellRecord: localStorage.getItem('sellRecord'),
        moneyRecord: localStorage.getItem('moneyRecord'),
        items: [
          {path:"stocking", name:"仕入れ"}, 
          {path:"opening", name:"開店"}, 
          {path: "end", name: "終了"}
        ],
        message: ""
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
  width: 100%;
  bottom: 1rem;
  padding: 2rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 4px;
  color: #fff;
}
</style>
