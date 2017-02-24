import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: require('../views/index'),
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          component: require('../views/home')
        }, {
          path: 'collect',
          component: require('../views/collect')
        }, {
          path: 'rank',
          component: require('../views/rank')
        }, {
          path: 'radio',
          component: require('../views/radio')
        }, {
          path: 'mv',
          component: require('../views/mv')
        }
      ]
    },
    {
      path: '/search',
      component: require('../views/search')
    }
  ]
})
