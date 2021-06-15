<template>
  <div>
      <p v-for="item in this.$store.state.news">
        <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
        <small>{{item.time_ago}} by {{ item.user }}</small>
      </p>
  </div>
</template>

<script>

export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
    //1
    // fetchNewsList()
      // .then(response => {
      //   console.log(response);
      //   //2
      //   this.users = response.data;
      // })
      // .catch(function(error){
      //   console.log(error);
      // })
  },
}
</script>

<style>

</style>