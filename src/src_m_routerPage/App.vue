<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/m_hello">Home</router-link>
      <router-link to="/m_news">新聞</router-link>
      <router-link to="/m_about">關於我們</router-link>
    </p>
    <!-- <router-view></router-view> -->
    <router-view/>
  </div>
</template>

<script>
    import './assets/my.css'
    export default {
      name: 'App'
    }
</script>

<style>
      #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    .btn{
      margin: 10px;
    }
</style>
