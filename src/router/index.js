import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Patitas from '../views/Patitas.vue'
import Productos from '../views/Productos.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quienessomos',
    name: 'quienessomos',
    component: QuienesSomos
  },
  {
    path: '/patitas',
    name: 'patitas',
    component: Patitas
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
