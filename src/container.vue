<template lang="pug">
div.uk-background-1
	nav-bar(:items="navItems")
	router-view.uk-margin-top
</template>

<style lang="stylus">
	@import "./styles/styles"
</style>

<script>
import NavBar from './components/nav.vue';

export default {
	components: {
		NavBar
	},
	data() {
		return {
			navItems: [{
					name: 'Home',
					url: '/home'
				}, {
					name: 'About',
					url: '/about'
				},
				{
					name: 'Sink',
					url: '/sink'
				},
				{
					name: 'Parent',
					children: [{
						name: 'Child 1',
						url: '#'
					}, {
						name: 'Child 2',
						url: '#'
					}]
				}
			]
		}
	}
}
</script>
