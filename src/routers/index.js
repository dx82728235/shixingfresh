import Vue from 'vue'
import Router from 'vue-router'
import home from './home';
import classify from './classify'
import cart from './cart'
import mine from './mine'

Vue.use(Router)

export default new Router({
  routes: [
    home,
    classify,
    cart,
    mine
  ]
})
