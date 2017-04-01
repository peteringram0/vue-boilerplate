<template lang="pug">
.uk-container.uk-light
	button.uk-button.uk-button-secondary(@click="clickEvent") Click Me !
</template>

<script>
import UIkit from 'uikit';
export default {
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
