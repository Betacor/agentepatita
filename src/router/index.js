import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import BuscaPatitas from '../views/BuscaPatitas.vue'
import BuscaProductos from '../views/BuscaProductos.vue'
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
    path: '/productos',
    name: 'productos',
    component: BuscaProductos
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
