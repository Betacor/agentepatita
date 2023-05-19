import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import PatitasAdopcion from '../views/PatitasAdopcion.vue'
import PatitasPerdidas from '../views/PatitasPerdidas.vue'
import PatitasEncontradas from '../views/PatitasEncontradas.vue'
import Comunidad from '../views/Comunidad.vue'
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
    path: '/comunidad',
    name: 'comunidad',
    redirect: '/comunidad/gatos',
    component: Comunidad,
    props:true,
    children: [
      {
        path: '/comunidad/:pet',
        name: 'comunidad',
        component: Comunidad,
        props:true
      }
    ]
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
