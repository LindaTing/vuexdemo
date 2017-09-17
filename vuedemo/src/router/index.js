import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
//import Home frome '../page/Home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[{
      	path:'',
      	component: r => require.ensure([], () => r(require('../page/Home')), 'Home')
      },
      {
      	path:'/item',
      	component: r => require.ensure([], () => r(require('../page/Item')), 'Item')
      },
      {
      	path:'/score',
      	component: r => require.ensure([], () => r(require('../page/Score')), 'Score')
      }]
    }
  ],
  mode:"history"
})
