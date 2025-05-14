import Vue from 'vue'
import Router from 'vue-router'
import PlansView from '@/views/PlansView.vue'
import ImplantationView from '@/views/ImplantationView.vue'
import CartView from '@/views/CartView.vue'
import PixView from '@/views/PixView.vue'
import FinishView from '@/views/FinishView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/plans',
            name: 'PlansView',
            component: PlansView
        },
        {
            path: '/implantation',
            name: 'ImplantationView',
            component: ImplantationView
        },
        {
            path: '/cart',
            name: 'CartView',
            component: CartView
        },
        {
            path: '/pix',
            name: 'PixView',
            component: PixView
        },
        {
            path: '/finish',
            name: 'FinishView',
            component: FinishView
        }
    ]
})
