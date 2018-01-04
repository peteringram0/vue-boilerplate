<template lang="pug">
    div
        nav-bar(:items="navItems")
        router-view
</template>

<style lang="stylus">
    @import "./styles/styles"
</style>

<script>
    import NavBar from '@/components/nav.vue';

    export default {
        components: {
            NavBar
        },
        mounted() {
            console.log(process.env.API_URL);
        },
        data() {
            return {
                navItems: [{
                    name: 'Home',
                    url: '/home'
                }, {
                    name: 'About',
                    url: '/about'
                }]
            }
        }
    }
</script>
