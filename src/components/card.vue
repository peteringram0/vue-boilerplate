<template lang="pug">
.card
	header.card-header
		p.card-header-title
			| Component
		a.card-header-icon
			span.icon
				i.fa.fa-angle-down
	.card-content
		.content
			| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
			a @bulmaio
			| .
			a #css
			a #responsive
			br
			small 11:09 PM - 1 Jan 2016
	footer.card-footer
		a.card-footer-item Save
		a.card-footer-item Edit
		a.card-footer-item Delete
</template>

<script>
export default {
}
</script>
