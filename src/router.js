import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import App from "./App.vue";
import UpdateProfile from "@/views/UpdateProfile.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
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
