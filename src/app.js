'use strict';

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Container from './app.vue';

import Home from './views/home.vue';
import About from './views/about.vue';
import NotFoundComponent from './views/404.vue';

// Use the VueRouter
Vue.use(VueRouter);

/**
 * Routes
 */
const router = new VueRouter({
	mode: 'history',
	routes: [{
			path: '/home',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{ path: '*', component: NotFoundComponent }
	]
})

/**
 * Our app
 */
new Vue({
	router,
	render(h) {
		return h(Container);
	}
}).$mount('#app');
