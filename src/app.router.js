'use strict';

/**
 * Routes
 */
export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'is-active',
	routes: [
		{
			name: 'Home',
			path: '/home',
			component: require('./views/home.vue')
		},
		{
			name: 'About',
			path: '/about',
			component: require('./views/about.vue')
		},
		{
			name: 'Sink',
			path: '/sink',
			component: require('./views/sink.vue')
		},
		{
			name: 'Form',
			path: '/form',
			component: require('./views/form.vue')
		},
		{path: '*', component: require('./views/404.vue') }
	]
});
