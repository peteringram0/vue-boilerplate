import Vue from 'vue';
import VueRouter from 'vue-router';

// Use the VueRouter
Vue.use(VueRouter);

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
            component: require('../views/home.vue').default
		},
		{
			name: 'About',
			path: '/about',
			component: require('../views/about.vue').default
		},
		{path: '*', component: require('../views/404.vue').default },
        {path: '/', redirect: { path: '/home' }}
	]
});
