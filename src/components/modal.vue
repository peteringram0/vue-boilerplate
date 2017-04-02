<template lang="html">

	<div class="uk-margin-medium uk-margin-medium-bottom">

		<button type="button" class="uk-button uk-button-danger" @click="openModal">{{ buttonText }}</button>

		<div :id="'modal-'+id" uk-modal>
		    <div class="uk-modal-dialog uk-modal-body">
				<button class="uk-modal-close-outside" type="button" uk-close></button>
		        <h2 class="uk-modal-title">{{ title }}</h2>
		        <slot></slot>
		    </div>
		</div>

	</div>

</template>

<script>
export default {
	props: {
		buttonText: {
			default: 'Modal !!'
		},
		title: {
			default: 'Title'
		}
	},
	methods: {
		openModal() {
			UIkit.modal("#modal-"+this.id).show();
		}
	},
	computed: {
		id() {
			return Math.random().toString(36).substring(7);
		}
	},
	mounted() {
		// console.log('PING');
	}
}
</script>
