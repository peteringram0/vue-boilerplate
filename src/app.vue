<template lang="pug">
div.uk-container
	navbar
	h1 {{ message }}
	ul
		li
			router-link(to='/home') Home
		li
			router-link(to='/about') About
	router-view
</template>

<style lang="stylus">

	@import "./styles/styles"

	h1
		color red

</style>

<script>
import navbar from './components/nav.vue'

export default{
	components: { navbar },
    data(){
        return {
            message: 'Hello World 2'
        }
    }
}
</script>
