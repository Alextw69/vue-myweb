import Vue from 'vue'
import Router from 'vue-router'
import m_hello from '@/components/m_hello'
import m_about from '@/components/m_about'
import m_news from '@/components/m_news'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/m_hello',
      name: 'm_hello',
      component: m_hello
    },
    {
      path: '/m_about',
      name: 'm_about',
      component: m_about
    },
    {
      path: '/m_news',
      name: 'm_news',
      component: m_news
    }
  ]
})
