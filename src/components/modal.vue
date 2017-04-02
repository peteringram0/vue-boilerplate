<template lang="html">

	<div class="uk-margin-medium uk-margin-medium-bottom">

		<button type="button" class="uk-button uk-button-danger" @click="openModal">{{ buttonText }} {{ id }}</button>

		<div :id="'modal-'+id" uk-modal>
		    <div class="uk-modal-dialog uk-modal-body">
				<button class="uk-modal-close-outside" type="button" uk-close></button>
		        <h2 class="uk-modal-title">{{ title }}</h2>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		        <p class="uk-text-right">
		            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
		            <button class="uk-button uk-button-primary" type="button">Save</button>
		        </p>
		    </div>
		</div>

	</div>

</template>

<script>
import UIkit from 'uikit';

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
