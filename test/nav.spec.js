import Vue from 'vue';
import test from 'ava';

import NavBar from './../src/components/nav.vue';

function instance() {
    let N = Vue.extend(NavBar);
    return new N({
        propsData: {
            items: [{
                name: 'Home',
                url: '/home'
            }, {
                name: 'About',
                url: '/about'
            }]
        },
    })
    // vm.$router = new VueRouter();
}

test('Check if dropdown list is toggling on click', t => {

    let vm = instance().$mount();

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
