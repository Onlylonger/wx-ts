import 'styles/app.scss';
import Vue from 'vue';
import { IState, createStore } from 'store';
import App from './Index.vue';
import router from 'router';
import svgicon from 'vue-svgicon';
// import svgicon = require('vue-svgicon')
import Vuex from 'vuex';
import { chunk } from 'lodash';

// import all icons
import 'components/icons';

console.log(chunk(['a', 'b', 'c', 'd'], 2));

Vue.use(svgicon, {
    tagName: 'icon'
});

Vue.use(Vuex);

let store = createStore();

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
