// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoItem from './components/TodoItem'
import loginDetail from './components/loginDetail'
import trans from './trans'
import Todolist from './todolist'
import routers from "./routers"

Vue.use(VueRouter)
 
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { loginDetail },
//   template: '<loginDetail/>'
// })


const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(loginDetail)
})