// test/component-a.spec.js
let Vue = require('vue/dist/vue.min');
let Nav = require('./../src/components/nav.vue').default;

describe('nav.vue', function () {

    it('Test from outside', () => {

        expect(Nav.data().navExpanded).toBe(false)

    });

    it('Test from inside', function () {

        let Constructor = Vue.extend(Nav);
        let vm = new Constructor().$mount();

        vm.toggleNav();

        expect(vm.navExpanded).toBe('is-active');

    });

    it('Testing spys', function () {

        let Constructor = Vue.extend(Nav);
        let vm = new Constructor().$mount();

        spyOn(vm, 'otherMethod');

        vm.testSpy();

        expect(vm.otherMethod).toHaveBeenCalled();

    });

});
