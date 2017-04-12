<template>
<!-- <b-navbar toggleable type="inverse" variant="primary" class="mb-3">
	<b-nav-toggle target="nav_collapse"></b-nav-toggle>

	<b-link class="navbar-brand" to="/">
		<span>Logo</span>
	</b-link>

	<b-collapse is-nav id="nav_collapse">

		<b-nav is-nav-bar>

			<b-nav-item v-for="item in items" :to="item.url" v-show="!item.children">{{ item.name }}</b-nav-item>

			<b-nav-item-dropdown :text="item.name" right-alignment v-show="item.children" v-for="item in items">
				<b-dropdown-item :to="child.url" v-for="child in item.children">{{ child.name }}</b-dropdown-item>
			</b-nav-item-dropdown>

		</b-nav>

	</b-collapse>
</b-navbar> -->

<nav class="nav has-shadow">
	<div class="container">
		<div class="nav-left">
			<a class="nav-item">
				<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
			</a>
			<router-link class="nav-item is-tab" v-for="item in items" :to="item.url" v-show="!item.children">{{ item.name }}</router-link>
		</div>
		<span class="nav-toggle">
      <span></span>
		<span></span>
		<span></span>
		</span>
		<div class="nav-right nav-menu">
			<a class="nav-item is-tab">Log out</a>
		</div>
	</div>
</nav>
</template>

<script>
export default {
	props: ['items']
}
</script>
