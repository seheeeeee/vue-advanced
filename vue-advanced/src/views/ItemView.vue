<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created(){
    const item = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', item);
  },
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: .5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>