import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/player/:uid',
      name: 'Player',
      component: Player, // Player組件的子組件
      children:[
        {
            path:'profile',
            component:PlayerProfile
        },
        {
            path:'stats',
            component:PlayerStats
        }
      ]
    },
    
  ]
})
