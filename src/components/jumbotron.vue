<template lang="html">
	<div :class="containerClass" uk-height-viewport>
		<div class="uk-section uk-section-xlarge">
			<div uk-grid>
				<div class="uk-width-1-1@m uk-first-column" :uk-scrollspy="animation">
					<h1 class="uk-margin-medium uk-width-xlarge">
						{{ title }}
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			required: true
		},
		containerClass: {
			default: 'uk-container uk-light'
		},
		animation: {
			default: 'cls: uk-animation-slide-left'
		}
	},

	data() {
		return {
			// containerClass: 'uk-container uk-light'
		}
	},
	mounted() {
		console.log(this.containerClass);
	}
}
</script>
