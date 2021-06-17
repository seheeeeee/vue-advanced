<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in this.$store.state.news">
        <!-- point 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url" target="_blank">{{ item.title }}</a> 
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
        
      </li>
    </ul>
      <!-- <p v-for="item in this.$store.state.news">
        <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
        <small>
          {{ item.time_ago }} by 
          <!-- <router-link v-bind:to="'/user/'+ item.user">{{ item.user }}</router-link> -->
          <!-- <router-link v-bind:to="`/user/${item.user}`" >{{ item.user }}</router-link>
        </small>
      </p> --> 
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

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  color: #000;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-list{
  margin: 0;
  padding: 0;
}
.link-text{
  color: #828282;
}
</style>