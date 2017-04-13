<template lang="pug">
.section
	.container
		form.mt-2.mb-2(@submit.prevent="onSubmit", name="form")
			.field
				label.label(for='email') Email
				p.control.has-icon.has-icon-right(:class="{ 'control': true }")
					input(v-model="name" v-validate="'required|email'", :class="{'input': true, 'is-danger': errors.has('email') }", name='email', type='text', placeholder='Email')
					span.help.is-danger(v-show="errors.has('email')") {{ errors.first('email') }}

			.field.is-grouped
				p.control
					button.button.is-primary Submit
				p.control
					button.button.is-link(@click="onClear") Cancel
</template>

<script>
export default {
	data: () => ({
		name: ''
	}),
	methods: {
		onSubmit() {

			// Validate then submit
			this.$validator.validateAll()
				.then(r => {
	                alert('Ready to submit');
	            })
				.catch(e => {
					// Error
				});

		},
		onClear() {
			this.errors.clear();
			console.log('PING');
		}
	}
}
</script>
