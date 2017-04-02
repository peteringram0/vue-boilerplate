import Vue from 'vue/dist/vue.js';
import test from 'ava';

import Notification from './../src/notification.js';

let vm;

test.beforeEach(t => {

	let N = Vue.extend(Notification);

	vm = new N({
		propsData: {
			message: "fooBar"
		}
	}).$mount();

});


test('It says fooBar', t => {

	t.is(vm.$el.textContent, 'FOOBAR');

});

test('The computed porperty is correct', t => {

	t.is(vm.notification, 'FOOBAR')

});
