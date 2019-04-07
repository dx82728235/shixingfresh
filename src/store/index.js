import Vue from 'vue'
import Vuex from 'vuex'
import Home from './home'
import Classify from './classify'
import List from './list'
import Details from './details'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Home,
    Classify,
    List,
    Details
  }
})
