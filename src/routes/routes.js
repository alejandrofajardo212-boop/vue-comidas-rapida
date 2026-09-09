import { createRouter, createWebHashHistory } from "vue-router"

import Compras from "../views/Compras.vue"
import Productos from "../views/Productos.vue"
import Ventas from "../views/Ventas.vue"

import Hamburguesas from "../views/Hamburguesas.vue"
import Perros from "../views/Perros.vue"
import Pizzas from "../views/Pizzas.vue"
import Bebidas from "../views/Bebidas.vue"
import Postres from "../views/Postres.vue"
import Promociones from "../views/Promociones.vue"
import Nosotros from "../views/Nosotros.vue"

const routes = [
  { path: "/", redirect: "/hamburguesas" },
  { path: "/hamburguesas", component: Hamburguesas },
  { path: "/perros", component: Perros },
  { path: "/pizzas", component: Pizzas },
  { path: "/bebidas", component: Bebidas },
  { path: "/postres", component: Postres },
  { path: "/promociones", component: Promociones },
  { path: "/nosotros", component: Nosotros },
  { path: "/compras", component: Compras },
  { path: "/ventas", component: Ventas },
  { path: "/productos", component: Productos }
]

export const router = createRouter({
  routes,
  history: createWebHashHistory()
})