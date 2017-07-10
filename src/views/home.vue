<template lang="pug">
    section
        jumbotron(@notifyparent='notify', :function-for-child='runInsideChild')
        level
        jumbotron(@notifyparent='notify', :function-for-child='runInsideChild', title="Info Bar", :buttons="false", :subtitle="false")
        .section.mt-2
            .container
                .columns.is-multiline
                    .column
                        card
                    .column
                        card
                    .column
                        card
                    .column
                        card
        jumbotron(@notifyparent='notify', :function-for-child='runInsideChild', title="New Bit Here", :buttons="false", :subtitle="false")
</template>

<script>
    import Jumbotron from './../components/jumbotron.vue';
    import Level from './../components/level.vue';
    import Card from './../components/card.vue';

    export default {
        components: {
            Jumbotron,
            Level,
            Card
        },
        data() {
            return {
                text: 'hi'
            }
        },
        watch: {
            text: function (val) {
                console.log('Testing watchers. New val: ' + val);
            }
        },
        methods: {

            // Notify from child to trigger this
            notify() {
                this.$toast.open('PING FROM PARENT')
            },

            // Check a child can run this
            runInsideChild() {
                this.$toast.open({
                    message: 'This function is in home.vue but ran in a child component',
                    type: 'is-success'
                })
            },

        }
    }
</script>
