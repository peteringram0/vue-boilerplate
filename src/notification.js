export default {
	template: '<div>{{ notification }}</div>',
	props: ['message'],
	computed: {
		notification() {
			return this.message.toUpperCase();
		}
	}
};
