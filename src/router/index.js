import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component:()=> import(/*webpackChunkName: "Home "*/ '../views/Home.vue')
  },
  {
    path: '/Servicios',
    name: 'Servicios',
    component:()=> import(/*webpackChunkName: "Home "*/ '../views/Servicio.vue')
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component:()=> import(/*webpackChunkName: "Home "*/ '../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
