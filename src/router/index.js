import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    // 根路由
    {
      path: '/',
      redirect: '/login'
    },
    // 登录路由
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },    
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
        path: '/project',
        name: 'project',
        component: () => import('../views/project/index.vue')
      },
    // 匹配不到，展示404
    //{
    //  path: '/*',
    //  component: () => import('@comp/Exception/Exception')
    //}
  ]
  
  const router = new VueRouter({
    // mode: 'history',
    routes
  })

  export default router