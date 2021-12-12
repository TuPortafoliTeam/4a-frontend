import { createRouter, createWebHashHistory } from 'vue-router'
import App from "./App.vue"
import SignUp from "./components/SignUp.vue"

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
