<template lang="html">
	<div class="uk-container" uk-height-viewport>
		<div class="uk-child-width-1-2@m uk-child-width-1@s uk-grid" uk-grid>
			<div>
				<card>
					<template slot="title">Card Title</template>
					Card body
				</card>
			</div>
			<div><card></card></div>
		</div>
	</div>
</template>

<script>
import Card from './../components/card.vue';

export default {
	components: {
		Card
	},
	data() {
		return {
			text: 'hi'
		}
	}
}
</script>
