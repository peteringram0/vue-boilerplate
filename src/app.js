'use strict';

/**
 * Bootstrap our application
 */
import './bootstrap';

import Vue from 'vue';
import router from './app.router';
import Container from './container.vue';

/**
 * Our app
 */
new Vue({
	router,
	render(h) {
		return h(Container);
	}
}).$mount('#app');
