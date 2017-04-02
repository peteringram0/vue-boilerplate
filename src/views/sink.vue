<template lang="pug">
.uk-container.uk-light
	button.uk-button.uk-button-secondary(@click="clickEvent") Toast !!
	modal(title="Testing One")
	modal(title="Testing Two")
</template>

<script>
import UIkit from 'uikit';

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
