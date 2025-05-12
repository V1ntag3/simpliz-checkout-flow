import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import { mutations, state } from '@/store/index.js'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
