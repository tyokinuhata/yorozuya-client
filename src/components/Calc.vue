<template>
  <div>calc</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      price: 0,
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
    axios.get('/api/price')
      .then(response => {
        data = this.sliceBtc(response.data.price)
        data = data.map(function(element) {
          return Number(element)
        })
        let price = data[0]
        for (let i = 0; i < 5; i++) {
          price += data[i]
        }
        console.log(price)
        this.price = price
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
