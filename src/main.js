import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import New from './components/New.vue'
import Continue from './components/Continue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/new',
    component: New
  },
  {
    path: '/continue',
    component: Continue
  },
  {
    path: '/day',
    component: Day
  },
  {
    path: '/day/morning',
    component: Morning
  },
  {
    path: '/day/afternoon',
    component: Afternoon
  },
  {
    path: '/day/evening',
    component: Evening
  },
  {
    path: '/stocking',
    component: Stocking
  },
  {
    path: '/making',
    component: Making
  },
  {
    path: '/adventure',
    component: Adventure
  },
  {
    path: '/opening',
    component: Opening
  },
  {
    path: '/drop',
    component: Drop
  },
  {
    path: '/calc',
    component: Calc
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
