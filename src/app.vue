<template lang="pug">
    div
        ul
            li one
            li two
        h1 {{ message }}
</template>

<style scoped>
    h1 {
        color: red
    }
</style>

<script>
export default{
    data(){
        return {
            message: 'hi 3'
        }
    }
}
</script>
