<template>
<div class="uk-navbar-container uk-navbar-transparent uk-light" uk-navbar>

	<div class="uk-navbar-left">
		<a href="#" class="uk-logo uk-navbar-item">Logo</a>

		<ul class="uk-navbar-nav">

			<router-link v-if="!item.children" tag="li" :to="item.url" v-for="item in items">
				<a>{{ item.name }}</a>
			</router-link>

			<li v-if="item.children" v-for="item in items">
				<a v-if="item.children" href="#">{{ item.name }}</a>
				<div v-if="item.children" class="uk-navbar-dropdown">
					<ul class="uk-nav uk-navbar-dropdown-nav">
						<router-link :to="child.url" tag="li" v-for="child in item.children">
							<a>{{ child.name }}</a>
						</router-link>
					</ul>
				</div>
			</li>

		</ul>

	</div>
</div>
</template>

<script>
export default {
	props: ['items']
}
</script>
