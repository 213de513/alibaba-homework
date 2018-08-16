import Vue from 'vue'
import Router from 'vue-router'
import PageA from '../views/pageA'
import PageB from '../views/pageB'
import PageC from '../views/pageC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'A',
      component: PageA
    },
    {
      path: '/pageB',
      name: 'B',
      component: PageB
    },
    {
      path: '/pageC',
      name: 'C',
      component: PageC
    },
  ]
})
