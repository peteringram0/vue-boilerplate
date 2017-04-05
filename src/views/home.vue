<template>
<section>
	<jumbotron></jumbotron>
	<jumbotron @notifyparent="notify" :function-for-child="runInsideChild"></jumbotron>
	<input type="text" v-model="text"> text: {{ text }}
</section>
</template>

<script>
import Jumbotron from './../components/jumbotron.vue';

export default {
	components: {
		Jumbotron
	},
	watch: {
		text: function(val) {
			console.log('Testing watchers. New val: ' + val);
		}
	},
	methods: {

		// Notify from child to trigger this
		notify() {
			alert('PING FROM PARENT');
		},

		// Check a child can run this
		runInsideChild() {
			alert('This function is in home.vue but ran in a child component');
		},

	},
	data() {
		return {
			text: 'hi'
		}
	}
}
</script>
