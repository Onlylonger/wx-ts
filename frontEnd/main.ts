import Vue from 'vue'
import ElementUi from 'element-ui'
import App from './src/view/App/index'

const vm = new Vue({
    el: '#app',
    render(h) {
        return h(App)
    }
})
