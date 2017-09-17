<template>
	<div id="Home">
		<itemcontainer :component-father="componentFather"></itemcontainer>
	</div>
</template>

<script>
	import itemcontainer from '../../components/ItemContainer'
	export default{
		name:"Home",
		components:{
			itemcontainer
		},
		data(){
			return {
				componentFather:"home"
			}
		}
	}
</script>

<style>
</style>