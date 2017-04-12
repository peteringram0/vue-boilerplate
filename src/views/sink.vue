<template>
<div>
	<b-card overlay img="http://placeskull.com/200/200/E8117F/-1/0" class="mb-2">
        Overlay cards are cute!
    </b-card>

	<b-form-checkbox v-model="state" value="accepted" unchecked-value="not_accepted">
		I accept terms and use
 	</b-form-checkbox>

	<div>State: <strong>{{state}}</strong></div>
</div>
</template>

<script>

export default {
	data() {
		return {
			text: 'hi',
			state: 'please_accept'
		}
	},
	methods: {
		clickEvent() {
			UIkit.notification('You clicked me!!', {pos: 'top-right'});
		}
	}
}
</script>
