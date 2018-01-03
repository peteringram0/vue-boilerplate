<template lang="pug">
header.nav
	.container
		.nav-left
			a.nav-item.is-brand
				img(alt='logo')
		span.nav-toggle(@click="toggleNav", :class="navExpanded")
			span
			span
			span
		.nav-right.nav-menu(:class="navExpanded")
			router-link.nav-item.is-tab(v-for='item in items', :key="item.url", :to='item.url', v-if='!item.children') {{ item.name }}
			a.nav-item.is-tab Log out
</template>

<style lang="stylus" scoped>
.nav-item
	&.is-active, &:hover
		border-bottom-color white !important
</style>

<script>
export default {
	props: ['items'],
	data() {
		return {
			navExpanded: false
		}
	},
	methods: {

		/**
		 * Toggle the active state on the navigation
		 */
		toggleNav() {
			this.navExpanded = ((!this.navExpanded) ? 'is-active' : false)
		}

	},
	watch: {

		/**
		 * On route changes collapse the nav
		 */
		$route() {
			this.navExpanded = false;
		}

	}
}
</script>
