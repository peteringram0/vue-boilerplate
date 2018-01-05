import {mount} from 'avoriaz';
import Nav from '@/components/nav.vue';
import router from "@/router";

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

        spyOn(wrapper.vm, 'otherMethod').and.callThrough();

        wrapper.vm.testSpy();

        expect(wrapper.vm.otherMethod).toHaveBeenCalled();

    });

    it('Should collapse on route change', function (end) {

        const wrapper = mount(Nav, { router });

        wrapper.vm.navExpanded = true;

        expect(wrapper.vm.navExpanded).toBe(true);

        wrapper.vm.$router.push('/about');

        setTimeout(() => {
            expect(wrapper.vm.navExpanded).toBe(false);
            end();
        }, 0);

    });

});

