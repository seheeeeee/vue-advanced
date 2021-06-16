import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index.js';

export default {
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
    },
    FETCH_USER(context, name){
        fetchUserInfo(name)
        .then(response => {
          context.commit('SET_USER', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}