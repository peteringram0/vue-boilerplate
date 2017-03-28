<template lang="pug">
div.uk-background-primary
	div.uk-container
		navbar(:items="navItems")
		button.uk-button.uk-button-secondary(@click="clickEvent") Click Me !
		h1 {{ message }}
		ul
			li
				router-link(to='/home') Home
			li
				router-link(to='/about') About
		router-view
</template>

<style lang="stylus">

	@import "./styles/styles"

	h1
		color red

</style>

<script>

import UIkit from 'uikit';

import navbar from './components/nav.vue'

export default {
	components: {
		navbar
	},
	data() {
		return {
			message: 'Hello World 2',
			navItems: [{
					name: 'Home',
					url: '/home'
				}, {
					name: 'About',
					url: '/about'
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
