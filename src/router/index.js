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
    path: '/Detalles/:name',
    name: 'Detalles',
    component:()=> import(/*webpackChunkName: "Home "*/ '../views/ServicioDetalles.vue'),
    props:(route)=>{
      const {name} = route.params
      return {name}
    }

  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component:()=> import(/*webpackChunkName: "Home "*/ '../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  // Regrsar la pantalla al inicio usando router history
  // scrollBehavior(to, from, savedPosition) {
  //   console.log('to',to,'\nfrom', from,'\nsavedPos', savedPosition);
  // }
})


//Regresar la pantalla al inicio usando router hash
router.beforeEach((to, from, next) => {
  // trae la página de regreso a la cima
  document.documentElement.scrollTop = 0
  // No olvides llamar a next ()
  next()
})

export default router
