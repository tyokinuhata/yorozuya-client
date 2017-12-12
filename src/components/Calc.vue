<template>
  <div class="game-wrapper">
    <!--<img src="../assets/materials/items/cards/credit_card.png" alt="">-->
    <img :src="path" alt="">
    <div class="message">
      {{ name }}が{{ amount }}個売れて{{ price }}Gになりました。
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import util from '../util/Util.js'

  export default {
    data() {
      return {
        message: '',
        name: '',
        amount: 0,
        price: 0,
        path: ''
      }
    },
    methods: {
      sliceBtc(data) {
        let str = String(data)
        let arr = []
        arr.push(str.slice(0, 3))
        for (let i = 3; i < 7; i++) {
          arr.push(str.slice(i, i + 1))
        }
        return arr
      }
    },
    created() {
      let data

      let product = Math.floor(Math.random() * 45)
      this.imgPath = util.image.items[product].path
      this.name = util.image.items[product].name
      this.price = this.price * util.image.items[product].price
      this.path = util.image.items[product].path
      console.log(this.path)

      axios.get('/api/price')
        .then(response => {
          data = this.sliceBtc(response.data.price)

          data = data.map(function (element) {
            return Number(element)
          })

          let price = data[0]
          for (let i = 0; i < 5; i++) {
            price += data[i]
          }

          this.amount = Math.floor(Math.random() * (10 - 5) + 5)
          this.price = this.price * this.amount
        })
        .catch(error => {
          console.log(error)
        })
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

  .image img {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: block;
  }

</style>
