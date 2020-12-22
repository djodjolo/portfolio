import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
