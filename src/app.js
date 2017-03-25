'use strict';

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import Container from './app.vue';
import Home from './views/home.vue';
import About from './views/about.vue';
import NotFoundComponent from './views/404.vue';


// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification('Hello world.');

// Use the VueRouter
Vue.use(VueRouter);

/**
 * Routes
 */
const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/home', component: Home},
		{path: '/about', component: About},
		{path: '*', component: NotFoundComponent }
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
