'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Buefy from 'buefy';
import VeeValidate from 'vee-validate';
// import _ from 'lodash';

window.Vue = Vue;
window.VueRouter = VueRouter;
window.axios = axios;
// window._ = _;

// Use Buefy
Vue.use(Buefy);

// Use the VueRouter
Vue.use(VueRouter);

// Use the validation
Vue.use(VeeValidate);
