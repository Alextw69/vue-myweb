
import Vue from 'vue'
import App from './App.vue'

// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// 以上 兩行 以被引用在 App.vue , 所以此處不須引用

new Vue({
  el: '#app',
  render: h => h(App)
})
