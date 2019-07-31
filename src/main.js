// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoItem from './components/TodoItem'
import loginDetail from './components/loginDetail'
import router from "./router"

Vue.prototype.router=router
Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { loginDetail },
  template: '<loginDetail/>'
})
