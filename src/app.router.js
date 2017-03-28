'use strict';

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

import Home from './views/home.vue';
import About from './views/about.vue';
import NotFoundComponent from './views/404.vue';

// Use the VueRouter
Vue.use(VueRouter);

/**
 * Routes
 */
export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'uk-active',
	routes: [
		{path: '/home', component: Home},
		{path: '/about', component: About},
		{path: '*', component: NotFoundComponent }
	]
});
