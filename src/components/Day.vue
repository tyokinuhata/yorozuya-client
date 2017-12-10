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
        dayOfWeek: localStorage.getItem('dayOfWeek'),
        dayOfStage: localStorage.getItem('dayOfStage'),
        population: localStorage.getItem('population'),
        weather: localStorage.getItem('weather'),
        money: localStorage.getItem('money'),
        itemCount: localStorage.getItem('itemCount'),
        sellRecord: localStorage.getItem('sellRecord'),
        moneyRecord: localStorage.getItem('moneyRecord'),
        items: [
          {
            path:"stocking",
            name:"仕入れ"
          },
          {
            path:"opening",
            name:"開店"
          },
          {
            path: "end",
            name: "終了"
          }
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

.menu {
  position: absolute;
  bottom: 230px;
  list-style: none;
  font-weight: bold;
  font-size: 16px;
  & > a {
    display: block;
    width: 5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    &:hover {
      background: #aaa;
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
