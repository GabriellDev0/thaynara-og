import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import ContactView from '../views/ContactView.vue'
import AdminLoginView from '@/views/AdminLoginView.vue'
import TheWhitePage from '@/views/TheWhitePage.vue'
import AdminDashBoardView from '@/views/AdminDashBoardView.vue'
import AdminMessageView from '@/views/AdminMessageView.vue'
import { auth } from "../firebase/index"

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contato',
    component: TheHome,
    children:[
      {
        path: 'contato',
        name: 'contato',
        component: ContactView
      },
      {
        path: '/:name',
        name: 'whitepage',
        component: TheWhitePage
      }
  ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLoginView
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: AdminDashBoardView,
    meta:{
      requiresAuth: true
    },
    children:[
      {
        path: 'mensagem/:idCollection',
        name: 'mensagem',
        component: AdminMessageView,
        props: true
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
    if(to.path === '/admin' && auth.currentUser){
      next('/admin-dashboard')
      return;
    }

    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
        next('/admin')
        return;
    }
    next()
})

export default router
