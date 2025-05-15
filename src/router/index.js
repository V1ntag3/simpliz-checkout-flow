import Vue from 'vue'
import Router from 'vue-router'
import PlansView from '@/views/PlansView.vue'
import ImplantationView from '@/views/ImplantationView.vue'
import CartView from '@/views/CartView.vue'
import PixView from '@/views/PixView.vue'
import FinishView from '@/views/FinishView.vue'
import HomeView from '@/views/HomeView.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
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

router.beforeEach((to, from, next) => {
    setTimeout(() => {
        if (to.name === 'HomeView') {
            document.body.classList.add('landing-container');
        } else {
            document.body.classList.remove('landing-container');
        }
    }, 50);

    next();
});

export default router;