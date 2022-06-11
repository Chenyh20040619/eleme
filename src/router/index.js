import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/businessList',
      name: 'businessList',
      component: () => import('../views/businessList.vue'),
    },
    {
      path: '/businessInfo',
      name: 'businessInfo',
      component: () => import('../views/businessInfo.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order.vue'),
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/payment.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue'),
    },
  ]
})
