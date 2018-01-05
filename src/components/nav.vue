<template lang="pug">
    header.nav
        .nav-right.nav-menu(:class="navExpanded")
            router-link.nav-item(v-for='item in items', :key="item.url", :to='item.url', v-if='!item.children') {{ item.name }}
</template>

<style lang="stylus" scoped>
    .nav
        position absolute
        top 50%
        margin-top 30px
        width 100%
        text-align center

        a
            color white
            text-decoration none

            &:active, &:focus, &:visited
                color white

            &:hover
                color darken(white, 12)

        .nav-item
            margin 0 5px
</style>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                navExpanded: false
            }
        },
        methods: {

            /**
             * Toggle the active state on the navigation
             */
            toggleNav() {
                this.navExpanded = ((!this.navExpanded) ? 'is-active' : false);
            },

            testSpy() {
                this.otherMethod();
            },

            otherMethod() {
                console.log('Triggered');
            }

        },
        watch: {

            /**
             * On route changes collapse the nav
             */
            $route() {
                this.navExpanded = false;
            }

        }
    }
</script>
