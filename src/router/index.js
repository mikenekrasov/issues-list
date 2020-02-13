import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SingleIssue from '../components/SingleIssue.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/issue/:id',
    name: 'SingleIssue',
    component: SingleIssue,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
