import Vue from "vue"; 
import Router from 'vue-router'
Vue.use(Router)

import Login from  '../src/components/login.vue'

export default new Router({
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