<template lang="pug">
div.uk-height-medium.uk-background-1
	div.uk-container
		nav-bar(:items="navItems")
		button.uk-button.uk-button-secondary(@click="clickEvent") Click Me !
		router-view.uk-margin-top
</template>

<style lang="stylus">
	@import "./styles/styles"
</style>

<script>

import UIkit from 'uikit';

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
	},
	methods: {
		clickEvent() {
			UIkit.notification('You clicked me!!', {pos: 'top-right'});
		}
	}
}
</script>
