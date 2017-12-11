<template>
  <div class="game-wrapper">
    <div class="message" @click="next">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      customer: Math.floor((Math.floor(Math.random() * (20 - 10) + 10) * (1 + localStorage.getItem('population') / 10)))
    }
  },
  created: function() {
    this.message = `お客さんが全部で${ this.customer }人やってきました`
  },
  methods: {
    next: function() {
      let now = localStorage.getItem('dayOfStage')
      switch(now) {
        case '朝': 
          localStorage.setItem('dayOfStage', '昼')
          this.message = '昼になりました'
          window.location = '/#/calc'
          break
        case '昼':
          localStorage.setItem('dayOfStage', '夜')
          this.message = '夜になりました'
          window.location = '/#/calc'        
          break
        case '夜':
          localStorage.setItem('dayOfStage', '朝');
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
