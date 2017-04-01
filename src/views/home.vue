<template>
	<section>
		<jumbotron>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</jumbotron>
		<jumbotron container-class="uk-section-secondary" animation="uk-animation-slide-right" direction="uk-text-right">Testing Stuff</jumbotron>
	</section>
</template>

<script>

import Jumbotron from './../components/jumbotron.vue';

export default {
	components: {
		Jumbotron
	},
	data() {
		return {
			text: 'hi'
		}
	}
}
</script>
