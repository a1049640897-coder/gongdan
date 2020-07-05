import Vue from 'vue'
import VueRouter from 'vue-router'
const Login =()=>import('views/login/Login');



Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component:Login,
    meta:{
      title:'用户登录'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
