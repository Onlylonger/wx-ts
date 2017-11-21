import Vue from 'vue'
import App from './App/index'
import store from './store/'

new Vue({
    render(h) {
        return h(App)
    },
    store
}).$mount('#app')
