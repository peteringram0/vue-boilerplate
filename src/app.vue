<template lang="pug">
div.uk-container
	h1 {{ message }}
	ul
		li
			router-link(to='/home') Home
		li
			router-link(to='/about') About
	router-view
</template>

<style lang="stylus">
	@import "../node_modules/uikit/dist/css/uikit.css";
    .h1 {
        color: blue;
	}
</style>

<script>
export default{
    data(){
        return {
            message: 'Hello World'
        }
    }
}
</script>
