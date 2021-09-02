<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <button class="btn btn-primary">確定</button>
    <button class="btn btn-success">使用-bootstrap</button>
    <button class="btn btn-danger">注意</button>
    <div>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">使用-bootstrap-vue</b-button>
        <b-button variant="outline-primary">Button</b-button>
    </div>
    <hr>
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
