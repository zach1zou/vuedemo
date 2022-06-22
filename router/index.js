import Vue from "vue"; 
import Router from 'vue-router'
Vue.use(Router)

import Login from '../src/components/login.vue'
import Home from '../src/components/home.vue'

const router= new Router({
    routes: [
        {
            path: '/',
            redirect: 'login'
        }, 
        {
        path: '/login',
        component: Login,
        name:Login
        }, {
            path: '/home',
            component: Home,
            name: Home
        }]
}) 

//挂载路由守卫
router.beforeEach((to, from, next) => { 
    //to代表将要访问的路径
    //from代表从哪个路径跳转
    //next表示放行
    if (to.path === '/login') { 
        return next();
    }
    //获取token
  const tokenStr =  window.sessionStorage.getItem('token')
    if (!tokenStr) {
        return next('/login');
    } else { 
        next()
    }
})
export default router