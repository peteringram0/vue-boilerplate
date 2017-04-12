<template lang="pug">
.uk-background-1.pb-3
	.container
		nav-bar(:items="navItems")
		router-view.uk-margin-top
</template>

<style lang="stylus">
	@import "./styles/styles"
</style>

<script>
import NavBar from './components/nav.vue';

export default {
	mounted() {
		this.$snackbar.open(`Default, positioned bottom-right with a green 'OK' button`);
	},
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
