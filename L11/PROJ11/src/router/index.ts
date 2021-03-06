import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'register',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/botnav',
    name: 'botnav',
    component: () => import('../views/Botnav.vue'),
    children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        meta:{
          requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        },
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        meta:{
          requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        },
        component: () => import('../views/Mine.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
