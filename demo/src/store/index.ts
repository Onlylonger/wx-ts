import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { getStoreAccessors } from 'vuex-typescript'
import { IglobalState } from './interface'

Vue.use(Vuex)

const state: IglobalState = {
    demo: 1
}

const mutations = {
    setDemo(state: IglobalState, v: number) {
        state.demo = v
    }
}

export default new Vuex.Store({
    mutations,
    state
})

const { read, commit, dispatch } = getStoreAccessors<
    IglobalState,
    IglobalState
>('')

export const commitDemo = commit(mutations.setDemo)
