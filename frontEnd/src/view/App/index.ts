import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import * as globalStore from '../store/index'
import template from './index.vue'

@Component({
    mixins: [template]
})
export default class App extends Vue {
    private dataList = [1, 2, 3, 4, 5]

    // get demo() {
    //     return this.$store.state.demo
    // }

    // private handleAdd() {
    //     globalStore.commitDemo(this.$store, this.demo + 1)
    // }

    // private handleJian() {
    //     globalStore.commitDemo(this.$store, this.demo - 1)
    // }
}
