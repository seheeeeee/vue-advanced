<template>
  <div>
      <div v-for="user in this.$store.state.jobs">{{ user.title }}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';

export default {
  created(){
    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    // .then(response => {
    //   console.log(response);
    //   this.users = response.data;
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
  }
}
</script>

<style>

</style>