import Vue from 'vue'
import Router from 'vue-router'
import Principal from './View/Principal'
import TablaClientes from './View/Clientes'
import TablaFarmacos from './View/Farmacos'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Principal
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      component: TablaClientes
    },
    {
      path: '/Lista-Farmacos',
      name: 'Farmacos',
      component: TablaFarmacos
    }
  ]
})