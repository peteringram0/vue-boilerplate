<template lang="pug">
section
	jumbotron(@notifyparent='notify', :function-for-child='runInsideChild')
	level
</template>

<script>
import Jumbotron from './../components/jumbotron.vue';
import Level from './../components/level.vue';

export default {
	components: {
		Jumbotron,
		Level
	},
	watch: {
		text: function(val) {
			console.log('Testing watchers. New val: ' + val);
		}
	},
	methods: {

		// Notify from child to trigger this
		notify() {
			this.$toast.open('PING FROM PARENT')
		},

		// Check a child can run this
		runInsideChild() {
			this.$toast.open({
				message: 'This function is in home.vue but ran in a child component',
				type: 'is-success'
			})
		},

	},
	data() {
		return {
			text: 'hi'
		}
	}
}
</script>
