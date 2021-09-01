<template>
	<div id="app">
		<table width="100%">
			<tr>
				<td colspan="2" style="background-color:yellow">
					<router-view name="myHeader"></router-view>
				</td>
			</tr>
			<tr>
				<td width="20%" style="background-color:red">
					<router-view name="mySiderbar"></router-view>
				</td>
				
				<td width="80%" style="background-color:green">
					<router-view name="myDetail"></router-view>
				</td>
			</tr>
		</table>
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
	
</style>

