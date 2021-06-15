<template>
  <div>
      <div v-for="user in this.$store.state.ask">{{user.title}}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  created(){
    this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
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