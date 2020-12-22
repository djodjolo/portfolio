import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children : [
      { 
      path: '/cv',
      component: Home,
      },
      { 
        path: '/bio',
        component: Home,
      }
    ]
  },
  {
    path: '/en',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/EnHome.vue'),
    children : [
      { 
      path: '/cv',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      { 
        path: '/bio',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      }
    ]
  },
  {
    path: "/en/cv",
    component: () => import('../components/CV.vue'),
  },
  {
      path: "/:catchAll(.*)",
      name: 'page-not-found',
      component: PageNotFound,
      meta: {
        requiresAuth: false
      }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
