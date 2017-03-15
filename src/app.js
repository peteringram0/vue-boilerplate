'use strict';

import Vue from 'vue';
import Container from './app.vue';

new Vue({
    render(h) {
        return h(Container);
    }
}).$mount('#container');
