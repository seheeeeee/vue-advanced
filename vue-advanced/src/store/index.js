import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';
import { fetchJobsList } from '../api/index.js';
import { fetchAskList } from '../api/index.js';



//vuex를 vue 전역에서 접근 가능
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },
    mutations: {
        SET_NEWS (state, news) {
            state.news = news;
        },
        SET_JOBS (state, jobs){
            state.jobs = jobs;
        },
        SET_ASK (state, ask){
            state.ask = ask;
        }
    },
    actions: {
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
                //state.new = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_JOBS(context){
            fetchJobsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_JOBS', response.data);
                // this.users = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
        },
        FETCH_ASK(context){
            fetchAskList()
            .then(response => {
              console.log(response.data);
              context.commit('SET_ASK', response.data);
            //   this.users = response.data;
            })
            .catch(function(error){
              console.log(error);
            })
        }
    }
  })