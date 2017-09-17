<template>
	<div id="Score">
		<itemcontainer :component-father="componentFather"></itemcontainer>
	</div>
</template>

<script>
	import itemcontainer from '../../components/ItemContainer'
	export default{
		name:"Score",
		components:{
			itemcontainer
		},
		data(){
			return {
				componentFather:"score"
			}
		}
	}
</script>

<style>
</style>