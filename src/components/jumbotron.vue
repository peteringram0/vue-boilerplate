<template lang="html">
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
	    	<h1 class="display-3">Fluid jumbotron</h1>
	    	<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			<button class="btn btn-primary" @click="notifyparent">Notify parent</button>
			<button class="btn btn-primary" @click="runFromChild">Run parent function from child</button>
	  	</div>
	</div>
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
