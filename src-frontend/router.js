import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('./pages/Index.vue') },
      { path: '/test', component: () => import('./pages/Test.vue') },
      { path: '/registration', component: () => import('./pages/Registration.vue') },
      { path: '/authorization', component: () => import('./pages/Authorization.vue') },

    ],
  })
}
