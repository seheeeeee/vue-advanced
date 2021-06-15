<template>
  <div>
      <div v-for="user in fetchedAsk">{{user.title}}</div>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'

export default {
  computed: {
    // #3
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    }),

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
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