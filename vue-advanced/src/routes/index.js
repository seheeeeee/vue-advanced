import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      //홈 화면을 바로 news 페이지로 리다이렉트
      path: '/',
      redirect: '/news',
    },
    {
        // path: url 이름(주소)
        path: '/news',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView,
    },
    {
        path: '/ask',
        component: AskView,
    },
    {
        path: '/jobs',
        component: JobsView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      //user prams id 정보로 이동
      path: '/user/:id',
      component: UserView,
    }
  ]
});