<template lang="html">
	<div :class="containerClassComputed" uk-height-viewport>
		<div class="uk-container uk-section uk-section-xlarge">
			<div uk-grid>
				<div class="uk-width-1-1@m uk-first-column" :uk-scrollspy="animation">
					<h2 :class="'uk-margin-medium ' + direction">
						<slot></slot>
					</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		containerClass: {
			default: ''
		},
		animation: {
			default: 'uk-animation-slide-left'
		},
		direction: {
			default: ''
		}
	},

	data() {
		return {
			// containerClass: 'uk-container uk-light'
		}
	},
	computed: {
		containerClassComputed() {
			return 'uk-light ' + this.containerClass
		},
		animationComputed() {
			return 'cls: ' + this.animation
		}
	},
	mounted() {
		// console.log(this.containerClass);
	}
}
</script>
