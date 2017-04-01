'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// import axios from 'axios';

import router from './app.router';
import Container from './container.vue';

// loads the Icon plugin
UIkit.use(Icons);

/**
 * Our app
 */
new Vue({
	router,
	render(h) {
		return h(Container);
	}
}).$mount('#app');
