'use strict';

// Use the VueRouter
Vue.use(VueRouter);

/**
 * Routes
 */
export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'uk-active',
	routes: [
		{path: '/home', component: require('./views/home.vue')},
		{path: '/about', component: require('./views/about.vue')},
		{path: '/sink', component: require('./views/sink.vue')},
		{path: '*', component: require('./views/404.vue') }
	]
});
