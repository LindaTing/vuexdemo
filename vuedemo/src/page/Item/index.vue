<template>
	<div id="Item">
		<itemcontainer :component-father="componentFather"></itemcontainer>
	</div>
</template>

<script>
	import itemcontainer from '../../components/ItemContainer'
	export default{
		name:"Item",
		components:{
			itemcontainer
		},
		data(){
			return {
				componentFather:"item"
			}
		}
	}
</script>

<style>
</style>