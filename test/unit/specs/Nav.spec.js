import { mount } from 'avoriaz';
import Nav from './../../../src/components/nav.vue';

describe('nav.vue', function () {

    it('Test from outside', () => {

        expect(Nav.data().navExpanded).toBe(false)

    });

    it('Test from inside', function () {

        let wrapper = mount(Nav);

        wrapper.vm.toggleNav();

        expect(wrapper.vm.navExpanded).toBe('is-active');

    });

    it('Testing spys', function () {

        // let Constructor = Vue.extend(Nav);
        // let vm = new Constructor().$mount();

        let wrapper = mount(Nav);

        spyOn(wrapper.vm, 'otherMethod');

        wrapper.vm.testSpy();

        expect(wrapper.vm.otherMethod).toHaveBeenCalled();

    });

});
