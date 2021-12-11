import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./components/Login.vue";
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
