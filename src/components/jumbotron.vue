<template lang="pug">
section.hero.is-info
	.hero-body
		.container
			h1.title {{ title }}
			h2.subtitle(v-if="subtitle") {{ subtitle }}
			div.field.is-grouped(v-if="buttons")
				p.control
					a.button.is-dark(@click='notifyparent') Notify parent
				p.control
					a.button.is-dark.is-outlined(@click='runFromChild') Run parent function from child
</template>

<script>
export default {
	props: {
		'function-for-child': {
		},
		'buttons': {
			default: true
		},
		'title': {
			default: 'Title'
		},
		'subtitle': {
			default: 'Subtitle'
		}
	},
	data() {
		return {

		}
	},
	computed: {

	},
	methods: {

		// Methods should be functions like this <- ES6 methods wont pass through the correct .this context
		notifyparent() {
			this.$emit('notifyparent');
		},

		// Run parent method from the child
		runFromChild() {
			this.functionForChild();
		}
	},
	mounted() {
		// console.log(this.containerClass);
	}
}
</script>
