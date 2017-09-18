<template>
	<div class="container">
		<header class="tip-title">
			<span class="tip-num" v-if="componentFather == 'home'">{{level}}</span>
			<span class="tip-num" v-if="componentFather == 'item'">第{{}}题</span>
		</header>
		<section>
			<div class="tip-content" v-if="componentFather == 'home'">
				<img class="home-logo" src="../assets/img/1-2.png"/>
			</div>
		</section>
		<footer class="tip-footer">
			<router-link class="btn btn-start margin" to="item" v-if="componentFather == 'home'"></router-link>
		</footer>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default {
		name: 'ItemContainer',
		data() {
			return {}
		},
		computed:mapState(['level','itemNum','itemDetail']),
		props:["componentFather"],
		methods:{
			...mapActions(['getItemData'])
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.tip-title {
		position: absolute;
		top: -1.35rem;
		right: 1.6rem;
		width: 4.25rem;
		height: 7.35rem;
		background-image: url(../assets/img/WechatIMG2.png);
		z-index: 1000;
		background-size: 100%;
		background-position: center;
		.tip-num {
			position: absolute;
			bottom: 0.5rem;
			left: 0;
			display: block;
			width: 4.25rem;
			height: 1rem;
			color: #a57c50;
			font-size: 0.6rem;
			text-align: center;
		}
	}
.tip-content{
	position: absolute;
	top: 4.5rem;
	left: 0;
	text-align: center;
	.home-logo{
		width:85%;
	}
}
.tip-footer{
	position: absolute;
	top: 7rem;
	left: 0;
	width: 100%;
	height: 3rem;
	.btn-start{
		display: block;
		width: 5rem;
		height: 2rem;
		background-image: url(../assets/img/1-4.png)l;
	}
	/*.btn{
		display: block;
		width: 5rem;
		height: 2rem;
	}*/
}
</style>