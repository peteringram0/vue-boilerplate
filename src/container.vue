<template lang="pug">
	section
		.hero.is-info
			.hero-head
				nav-bar(:items="navItems")
		router-view
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
				}
			]
		}
	}
}
</script>
