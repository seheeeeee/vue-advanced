<template>
  <div>
      <p v-for="ask in fetchedAsk">
        <router-link v-bind:to="`item/${ask.id}`">{{ ask.title }}</router-link>
        <small>
          {{ask.time_ago}} by 
          <router-link v-bind:to="`/user/${ask.user}`" target="_blank">{{ask.user}}</router-link>
        </small>
      </p>
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
  }
}
</script>

<style>

</style>