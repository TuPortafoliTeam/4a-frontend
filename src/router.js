import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import App from "./App.vue";
import UpdateProfile from "@/views/UpdateProfile.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/actualizarPortafolio",
    name: "update",
    component: UpdateProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
