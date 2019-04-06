import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import BScroll from '@/common/BScroll'
import MintUI from 'mint-ui'


Vue.use(MintUI);


Vue.config.productionTip = false

//过滤器
Vue.filter("toPath",(val,params)=>{
  return "http://picpro-sz.34580.com/sz/ImageUrl/" + val + "/160.jpeg"
})
Vue.filter("toPrice",(val,params)=>{
  return params + val
})

//全局组件
Vue.component("BScroll",BScroll);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
