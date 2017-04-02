'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import UIkit from 'uikit';
import axios from 'axios';

window.Vue = Vue;
window.VueRouter = VueRouter;
window.UIkit = UIkit;
window.axios = axios;

import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);
