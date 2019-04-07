import Vue from 'vue'
import Router from 'vue-router'
import home from './home';
import classify from './classify'
import cart from './cart'
import mine from './mine'
import list from './list'
import details from './details'
import search from './common/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    classify,
    cart,
    mine,
    search,
    list,
    details
  ]
})
