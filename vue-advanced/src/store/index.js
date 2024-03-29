import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js'

//vuex를 vue 전역에서 접근 가능
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations,
    // mutations: mutations,
    actions,
    // actions: actions
  })