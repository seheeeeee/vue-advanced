<template>
  <div>
      <!-- {{ this.$store.state.item }} -->
      <p>{{ this.$store.state.item.title }}</p>
      <div>{{ this.$store.state.item.content }}</div>
  </div>
</template>

<script>
export default {
  created(){
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', item);
  },
}
</script>

<style>

</style>