import Vue from 'vue'
import VueRouter from 'vue-router'
import loginDetail from '@/components/loginDetail'
import TodoItem from '@/components/TodoItem'

Vue.use(VueRouter)
 
export default new VueRouter({
    routes:[
        {
            path: '/loginDetail',
            name: 'loginDetail',
            component: loginDetail
          },
          {
              path: '/TodoItem',
            name: 'TodoItem',
            component: TodoItem
          }
    ]})