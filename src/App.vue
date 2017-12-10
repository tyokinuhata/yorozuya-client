<template>
  <div id="app">
    <div class="container">
      <h1 class="title">経営シミュレーションゲーム<span>「YOROZUYA for ITC」</span></h1>
      <div class="main">
        <div class="game">
          <router-link to="/foo">Foo</router-link>
          <router-link to="/bar">Bar</router-link>
          <router-view></router-view>
        </div>
        <a href="#" class="ranking link" target="_blank">ランキング ページ</a>
      </div>
      <hr class="hr">
      <div class="sub">
        <h2 class="subTitle">■スペシャルサンクス</h2>
        <ul class="list">
          <li><a href="http://www.shiftup.net/flash/game/scrYorozu.html" target="_blank" class="link">YOROZUYA</a> - リスペクト</li>
          <li><a href="http://www.irasutoya.com/" target="_blank" class="link">いらすとや</a> - hogehoge</li>
        </ul>
      </div>
      <footer class="footer">Copyright 2017 <a href="https://itc.moe/" target="_blank" class="link">ITC</a>.</footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
//    axios.get('url')
//    .then(response => {
//      console.log(response);
//    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  background: #ede8de;
}

.container {
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 700px;
  background: #55864b;
}

.title {
  margin: 0;
  height: 60px;
  line-height: 50px;
  background: #36652c;
  text-align: center;
  color: #e4feef;
  font-size: 16px;
  & > span {
    font-size: 18px;
  }
}

.game {
  margin: 0 auto;
  margin-top: 5px;
  width: 80%;
  height: 400px;
  background: #000;
}

.ranking {
  margin: 5px;
  display: block;
  text-align: center;
}

.subTitle {
  margin-left: 5px;
  color: #e4feef;
  font-size: 16px;
}

.footer {
  position: absolute;
  bottom: 0;
  left:5px;
  color: #e4feef;
  font-style: italic;
}

.link {
  color: #d2c7f0;
  &:visited {
    color: #f2cad9;
  }
  &:active {
    color: #eb48f7
  }
}

.list {
  color: #e4feef;
}

.hr {
  margin: 0 5px;
}
</style>
