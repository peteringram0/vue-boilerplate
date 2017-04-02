<template lang="pug">
.uk-container.uk-light
	button.uk-button.uk-button-secondary(@click="clickEvent") Toast !!
	modal(title="Testing One", button-text="Modal One")
		p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed.
	modal(title="Testing Two", button-text="Modal Two")
		p Testing
</template>

<script>
import Modal from './../components/modal.vue';

export default {
	components: {
		Modal
	},
	data() {
		return {
			text: 'hi'
		}
	},
	methods: {
		clickEvent() {
			UIkit.notification('You clicked me!!', {pos: 'top-right'});
		}
	}
}
</script>
