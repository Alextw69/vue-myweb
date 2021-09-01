<template>
	<div id="app">
		<img src="./assets/logo.png">
		<p>
			<router-link to="/">home</router-link>
			<router-link to="/player/1">公牛</router-link>
			<router-link to="/player/2">湖人</router-link>
		</p>
		<router-view></router-view>
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

