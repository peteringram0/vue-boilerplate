import test from 'ava';
import { mount } from 'avoriaz';

import NavBar from './../src/components/nav.vue';


test('Check expanding & collapsing the navbar', t => {

    let wrapper = mount(NavBar, {
        propsData: {
            items: [{
                name: 'Home',
                url: '/home'
            }, {
                name: 'About',
                url: '/about'
            }]
        }
    });

    // t.true(wrapper.hasClass('nav'));

    // console.log(wrapper.name);

	// t.is(vm.navExpanded, false);
	// vm.toggleNav();
	// t.is(vm.navExpanded, 'is-active');
    //
	// t.is(vm.navExpanded, 'is-active');
	// vm.toggleNav();
	// t.is(vm.navExpanded, false);

});
