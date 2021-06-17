<template>
    <div class="header">
        <router-link to="/news">News</router-link> | 
        <router-link to="/ask">Ask</router-link> | 
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped> 
/*scoped: 상위 컴포넌트와 별개로 해당 컴포넌트에만 스타일 적용*/
.header{
    color: #fff; 
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active {
    color: #35495e;
}
.header a{
    color: #fff;
}
</style>