<template lang="html">
	<section class="hero is-info">
	  <div class="hero-body">
	    <div class="container">
	      <h1 class="title">
	        Primary bold title
	      </h1>
	      <h2 class="subtitle">
	        Primary bold subtitle
	      </h2>
		  <a class="button is-dark" @click="notifyparent">Notify parent</a>
		  <a class="button is-success" @click="runFromChild">Run parent function from child</a>
	    </div>
	  </div>
	</section>
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
