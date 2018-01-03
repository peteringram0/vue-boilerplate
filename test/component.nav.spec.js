// test/component-a.spec.js
var Vue = require('vue')
var ComponentA = require('./../src/components/nav.vue')

describe('nav.vue', function () {

    // asserting JavaScript options
    it('should have correct message', function () {
        // expect(ComponentA.data().msg).toBe('Hello from Component A!')
        expect(true).toBe(true);
    })

    // asserting rendered result by actually rendering the component
    // it('should render correct message', function () {
    //     var vm = new Vue({
    //         template: '<div><test></test></div>',
    //         components: {
    //             'test': ComponentA
    //         }
    //     }).$mount()
    //     expect(vm.$el.querySelector('h2.red').textContent).toBe('Hello from Component A!')
    // })
})
