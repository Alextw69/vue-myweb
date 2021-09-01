<template>
	<div>
		<h1>球員頁面</h1>
		<ul>
			<li>編號 : {{detail.uid}}</li>
			<li>名字 : {{detail.name}}</li>
			<li>得分 : {{detail.point}}</li>
		</ul>
		<router-link :to="profile">個人簡介</router-link>
		<router-link :to="stats">個人數據</router-link>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
		name : "Player",
		data(){
			return {
				detail:{},
				profile: '',
				stats: '',
			}
		},
		mounted(){
			this.detail  = this.getPlayer(this.$route.params.uid);
			this.profile =  '/player/' + this.$route.params.uid + '/profile' ;
			this.stats   =  '/player/' + this.$route.params.uid + '/stats' ;
		},
		beforeRouteUpdate(to, from, next){
			this.detail  = this.getPlayer(to.params.uid);
			this.profile =  '/player/' + to.params.uid + '/profile' ;
			this.stats   =  '/player/' + to.params.uid + '/stats' ;
			next();
		},
		methods:{
			getPlayer(uid){
				switch(uid){
					case '1':
						return {uid:1, name:'喬丹', point:53};
					case '2':
						return {uid:2, name:'馬龍', point:25};
					default:
						 return {uid:-1};
				}
			}
		}
	}
</script>
