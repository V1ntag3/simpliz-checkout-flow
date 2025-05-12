import Vue from 'vue'
import Router from 'vue-router'
import PlansView from '@/views/PlansView.vue'
import ImplantationView from '@/views/ImplantationView.vue'
import CartView from '@/views/CartView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // evita # na URL
    routes: [
        {
            path: '/plans',
            name: 'PlansView',
            component: PlansView
        },{
            path: '/implantation',
            name: 'ImplantationView',
            component: ImplantationView
        },{
            path: '/cart',
            name: 'CartView',
            component: CartView
        }
    ]
})
