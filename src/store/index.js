import { createStore } from 'vuex';

import navModule from './modules/nav.js'
import titlesModule from './modules/titles.js'
import gridModule from './modules/grid.js'


const store = createStore({
    modules: {
        nav: navModule,
        titles: titlesModule,
        grid: gridModule
    },
    state() {
        return {
            isMobileOn: false
        }
    },
    getters: {
        mobile(state) {
            return state.isMobileOn
        }
    },
    actions: {
        openerMenu(context) {
            context.commit('openTheMenu')
            console.log('foi')
        }
    },
    mutations: {
        openTheMenu(state) {
            state.isMobileOn = !state.isMobileOn
            console.log(state.isMobileOn)
        }
    }
})

export default store;