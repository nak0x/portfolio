import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/frontpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "frontpage",
      component: FrontPage
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/about.vue")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/contact.vue")
    },
    {
      path: "/work",
      name: "Work",
      component: () => import("../views/work.vue")
    }
  ]
})

export default router
