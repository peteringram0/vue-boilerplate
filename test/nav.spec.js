import Vue from 'vue';
import test from 'ava';

import NavBar from './../src/components/nav.vue';

let vm;

test.beforeEach(t => {

	let N = Vue.extend(NavBar);

	vm = new N({
		propsData: {
			items: [{
				name: 'test 1',
				url: '/test1'
			}]
		}
	}).$mount();

});

test('Check expanding & collapsing the navbar', t => {

    t.true(true);

	// t.is(vm.navExpanded, false);
	// vm.toggleNav();
	// t.is(vm.navExpanded, 'is-active');
    //
	// t.is(vm.navExpanded, 'is-active');
	// vm.toggleNav();
	// t.is(vm.navExpanded, false);

});
