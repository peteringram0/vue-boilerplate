<template lang="pug">
section.hero.is-info
	.hero-body
		.container
			h1.title
				| Primary bold title
			h2.subtitle
				| Primary bold subtitle
			a.button.is-dark(@click='notifyparent') Notify parent
			a.button.is-success(@click='runFromChild') Run parent function from child
</template>

<script>
export default {
	props: ['function-for-child'],

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
