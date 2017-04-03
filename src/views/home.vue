<template>
	<section>
		<jumbotron></jumbotron>
		<jumbotron></jumbotron>
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
