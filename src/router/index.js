import Vue from 'vue';
import VueRouter from 'vue-router'

// Components
import Home from '@/components/Home'
import Brokers from '@/components/Brokers'
import Learn from '@/components/Learn'
import Terms from '@/components/Terms'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/brokers',
      name: 'brokers',
      component: Brokers,
    },
    {
      path: '/aprende',
      name: 'learn',
      component: Learn,
    },
    {
      path: '/terminos-condiciones',
      name: 'terms',
      component: Terms,
    },
    {
      path: '*',
      component: NotFound
    }
  ],
})
