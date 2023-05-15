import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import BuscaPatitas from '../views/BuscaPatitas.vue'
import PatitasAdopcion from '../views/PatitasAdopcion.vue'
import PatitasPerdidas from '../views/PatitasPerdidas.vue'
import PatitasEncontradas from '../views/PatitasEncontradas.vue'


import Contacto from '../views/Contacto.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quienessomos',
    name: 'quienessomos',
    component: QuienesSomos
  },
  {
    path: '/patitas',
    name: 'patitas',
    component: BuscaPatitas
  },
  {
    path: '/patitasAdopcion',
    name: 'patitasAdopcion',
    component: PatitasAdopcion
  },
  {
    path: '/patitasPerdidas',
    name: 'patitasPerdidas',
    component: PatitasPerdidas
  },
  {
    path: '/patitasEncontradas',
    name: 'patitasEncontradas',
    component: PatitasEncontradas
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFoundView',
    component: NotFoundView 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
