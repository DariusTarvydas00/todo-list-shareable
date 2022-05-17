import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/lists',
    name: 'lists',
    component: () => import('../views/MyListsView.vue')
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/WelcomePageLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/WelcomePageRegister.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../views/FriendsView.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
