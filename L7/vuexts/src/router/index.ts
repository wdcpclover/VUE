import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'
import Hello1 from '../views/Hello1.vue'
import Hello2 from '../views/Hello2.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
  ,{
    path: '/hello1',
    name: 'Hello1',
    component: Hello1
  }
  ,{
    path: '/hello2',
    name: 'Hello2',
    component: Hello2
  }
]

const router = new VueRouter({
  routes
})

export default router
