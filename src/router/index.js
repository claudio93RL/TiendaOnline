import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Carrito from '../views/Carrito.vue'

import {} from 'vuex'


Vue.use(VueRouter)

const routes = [{
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito
  },
  {
    path: '/nuevo-producto',
    name: 'NuevoProducto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/NuevoProducto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router