<template lang="pug">
div
	h1 {{ message }}
	router-link(to='/home') Home
	router-link(to='/about') About
	router-view
</template>

<style lang="stylus" scoped>
    h1
        color blue
</style>

<script>
export default{
    data(){
        return {
            message: 'hi'
        }
    }
}
</script>
