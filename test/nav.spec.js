import test from 'ava';
import { mount } from 'avoriaz';

import NavBar from './../src/components/nav.vue';


test('Check expanding & collapsing the navbar', t => {

    let wrapper = mount(NavBar, {
        items: ['one', 'two']
    });

    t.true(wrapper.hasClass('nav'));

    // console.log(wrapper);

    console.log(wrapper.name);

	// t.is(vm.navExpanded, false);
	// vm.toggleNav();
	// t.is(vm.navExpanded, 'is-active');
    //
	// t.is(vm.navExpanded, 'is-active');
	// vm.toggleNav();
	// t.is(vm.navExpanded, false);

});
