
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './vuex'
import './assets/css/reset.min.css'
import './assets/js/rem'

import loading from './assets/loading.gif'
Vue.use(VueLazyload,{
    loading: loading
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    ...App,
    store
});
