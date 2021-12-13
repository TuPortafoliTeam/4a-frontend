import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import App from "./App.vue";
import UpdateProfile from "@/views/UpdateProfile.vue";
import Home from "@/views/Home.vue";
import SignUp from "./components/SignUp.vue";
import Cover from "./components/Cover.vue";
import CoverCreate from "./components/CoverCreate.vue";

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
    path: "/home",
    name: "home",
    component: Home,
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
    props: true,
  },
  {
    path: "/cover",
    name: "cover",
    component: Cover,
  },
  {
    path: "/covercreate",
    name: "coverCreate",
    component: CoverCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
