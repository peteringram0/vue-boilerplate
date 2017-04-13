<template lang="pug">
.container.mt-2
	.tile.is-ancestor
		.tile.is-vertical.is-8
			.tile
				.tile.is-parent.is-vertical
					article.tile.is-child.notification.is-primary
						p.title Vertical...
						p.subtitle Top tile
					article.tile.is-child.notification.is-warning
						p.title ...tiles
						p.subtitle Bottom tile
				.tile.is-parent
					article.tile.is-child.notification.is-info
						p.title Middle tile
						p.subtitle With an image
						figure.image.is-4by3
							img(src='http://placehold.it/600x600')
			.tile.is-parent
				article.tile.is-child.notification.is-danger
					p.title Wide tile
					p.subtitle Aligned with the right tile
					.content
						// Content
		.tile.is-parent
			article.tile.is-child.notification.is-success
				.content
					p.title Tall tile
					p.subtitle With even more content
					.content Here
</template>

<script>
export default {
	data() {
		return {
			text: 'hi'
		}
	}
}
</script>
