import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../views/HelloWorld.vue'
import Hi from '../views/Hi.vue'
import Hi1 from '../views/Hi1.vue'
import Hi2 from '../views/Hi2.vue'
import Hello from '../views/Hello.vue'
import par from '../views/par.vue'
import right1 from '../views/right1.vue'
import left1 from '../views/left1.vue'
import goparams from '../views/goparams.vue'
// import Error from '../views/Error.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/Hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/Hi',
    name: 'Hi',
    component: Hi,
    children:[
      {
        path: '/',
        name: 'Hi',
        component: Hi
      },
      {
        path: 'Hi1',
        name: 'Hi1',
        component: Hi1
      },
      {
        path: 'Hi2',
        name: 'Hi2',
        component: Hi2
      },{
        path: '/par',
        name: 'par',
        component:par
      }


    ]

  },{
    path: '/fenye',
    //name:
    components: {
      default:Hello,
      left1:left1,
      right1:right1
    }
       },
       {
         path:'/goparams/:newsTitle/:newsId',
         component:goparams
        },
        {path:'/gohome',redirect:'/About'},
        {path:'/goparams/:newsId/:newsTitle',redirect:'params/:newsId/:newsTitle'},
        {path:'/Hello',name:'chongdingxing',component:Hello,alias:'/chongdingxiang'}
//         ,{
//           path: '*',
//           //name:
//           component: Error
//         }
 ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
