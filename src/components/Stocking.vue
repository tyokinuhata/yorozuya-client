<template>
  <div class="game-wrapper">
    <ul class="menu" v-if="menuFlag == 'item'">
      <li v-for="(menuItem, index) in menuItems" @click="selectItem(menuItem)">
        {{menuItem.name}} <span class="menu-price">G {{menuItem.price}}</span>
      </li>
    </ul>
    <ul class="menu" v-else-if="menuFlag == 'count'">
      <li v-for="(menuItem, index) in menuCounter" @click="selectCount(menuItem)">
        {{menuItem}}
      </li>
    </ul>
    <ul class="menu" v-else>
      <li @click="yes">はい</li>
      <li @click="no">いいえ</li>
    </ul>
    <div class="message">
      {{message}}
    </div>
  </div>
</template>

<script>
import Util from '../util/Util'

  export default {
    created: function() {
      this.money = localStorage.getItem('money')
    },
    data: function() {
      return {
        menuItems: Util.image.items,
        menuCounter: [1, 2, 3, 5, 10, 20, 30, 50, 100, "戻る"],
        menuFlag: 'item',
        selectedItem: {},
        message: "いらっしゃいませ。",
      }
    },
    methods: {
      selectItem: function(element) {
        if (element.name === '戻る') {
          window.location = '/#/day'
        }
        this.selectedItem = element
        this.menuFlag = 'count';
      },
      selectCount: function(element) {
        if (element === "戻る") {
          this.menuFlag = 'item';
          this.message = "何を買いますか？"
          return
        }

        this.selectedCount = element / 1
        this.message = `${this.selectedItem.name}を${this.selectedCount}個で${(this.selectedItem.price / 1) * this.selectedCount}Gです。購入しますか？`
        this.menuFlag = 'yes'
      },
      yes: function() {
        let userItem = localStorage.getItem('havingItems') === null ? [] : JSON.parse(localStorage.getItem('havingItems')) 

        userItem.push({item: this.selectedItem, count: this.selectCount})

        localStorage.setItem('havingItems', JSON.stringify(userItem))
        this.message = '購入しました'
        this.menuFlag = 'item'
      },
      no: function() {
        this.menuFlag = 'item'
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
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  height: 60%;
  width: 50%;
  border: 3px white solid;
  list-style-type: none;
  color: white;
  & li {
    position: relative;
    border: 2px white solid;
    margin: 0;
    padding: 0.2rem 1rem;
    &:hover {
      background-color: #aaa;
    }
  }
  & .menu-price {
    position: absolute;
    right: 1rem;
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
