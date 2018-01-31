<template>
  <div class="game-wrapper">
    <ul class="menu">
      <router-link :to="item.path" v-for="item in items">
        <li>
          {{ item.name }}
        </li>
      </router-link>
    </ul>
    <div class="message">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            path: 'drug',
            name: 'ドラッグストア'
          },
          {
            path: 'informations',
            name: '情報屋'
          },
          {
            path: 'weapons',
            name: '武器屋'
          }
        ]
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
      width: 7rem;
      padding: 0.5rem 1rem;
      border: 1px solid #fff;
      text-decoration: none;
      color: #fff;
      &:hover {
        background: #aaa;
      }
    }
  }
</style>
