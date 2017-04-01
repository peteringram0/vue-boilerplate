<template lang="html">

	<div>

		<button type="button" @click="clicked" uk-toggle="target: #modal-example">Modal !</button>

		<div id="modal-example" uk-modal>
		    <div class="uk-modal-dialog uk-modal-body">
		        <h2 class="uk-modal-title">Headline</h2>
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
// import UIkit from 'uikit';

export default {
	methods: {
		clicked() {
			// UIkit.modal(element, options);
			console.log('clicked');

			// UIkit.modal("target: #modal-example");

		}
	},
	mounted() {
		console.log('PING');
	}
}
</script>
