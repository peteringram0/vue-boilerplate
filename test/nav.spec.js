import Vue from 'vue';
import test from 'ava';
// import { mount } from 'avoriaz';

var vm;

import NavBar from './../src/components/nav.vue';

//
// test('Check expanding & collapsing the navbar', t => {
//
//     let wrapper = mount(NavBar, {
//         propsData: {
//             items: [{
//                 name: 'Home',
//                 url: '/home'
//             }, {
//                 name: 'About',
//                 url: '/about'
//             }]
//         }
//     });
//
//     // t.true(wrapper.hasClass('nav'));
//
//     wrapper.toggleNav();
//
// 	// t.is(vm.navExpanded, false);
// 	// vm.toggleNav();
// 	// t.is(vm.navExpanded, 'is-active');
//     //
// 	// t.is(vm.navExpanded, 'is-active');
// 	// vm.toggleNav();
// 	// t.is(vm.navExpanded, false);
//
// });


test('Check if dropdown list is toggling on click', t => {

    let N = Vue.extend(NavBar);

    // Make our fake component
    vm = new N({
        propsData: {
            items: [{
                name: 'Home',
                url: '/home'
            }, {
                name: 'About',
                url: '/about'
            }]
        },
    }).$mount();

    // Bind a router
    // vm.$router = new VueRouter();

    // By default isActive should be false
    t.is(vm.navExpanded, false);

    // Trigger function
    vm.toggleNav();

    // isActive should now be true
    t.is(vm.navExpanded, 'is-active');

    // Trigger function
    vm.toggleNav();

    // By default isActive should be false
    t.is(vm.navExpanded, false);

});
