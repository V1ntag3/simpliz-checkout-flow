import Vue from 'vue'
import Router from 'vue-router'
import PlansView from '@/views/PlansView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // evita # na URL
    routes: [
        {
            path: '/planos',
            name: 'PlansView',
            component: PlansView
        }
    ]
})
