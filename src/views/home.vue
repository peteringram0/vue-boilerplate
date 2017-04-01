<template>
	<section>
		<jumbotron title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."></jumbotron>
		<jumbotron title="Testing" container-class="uk-container uk-light uk-section-secondary"></jumbotron>
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
