<template lang="pug">
    div
        nav-bar(:items="navItems")
        transition(name='slide-left', mode="out-in")
            router-view.child-view
</template>

<style lang="stylus">
    @import "./styles/styles"

    div
        position relative
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
