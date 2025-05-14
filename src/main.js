import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import { mutations, state } from '@/store/index.js'
import VueMask from 'v-mask'
import Toast from 'vue-toastification'
import createPersistedState from 'vuex-persistedstate'
import 'vue-toastification/dist/index.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueMask)
Vue.use(Toast, {
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
})

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState({
    key: 'simpliz',
    paths: ['planSelected', 'orderNumber'],
    storage: window.localStorage
  })]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
