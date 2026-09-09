<template>
  <q-layout view="hHh lpR fFf">

    <!-- ENCABEZADO / NAVBAR -->
    <q-header elevated class="bg-red-9 text-white">
      <q-toolbar class="q-py-xs">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" aria-label="Menú" size="md" />

        <q-avatar class="q-ml-xs" size="36px" color="white" text-color="red-9">
          <q-icon name="restaurant" size="22px" />
        </q-avatar>

        <q-toolbar-title class="text-weight-bolder text-h6 q-ml-sm">
          Sabor & Toque
        </q-toolbar-title>

        <q-btn flat round icon="whatsapp" color="white" href="https://wa.me/573001234567" target="_blank">
          <q-tooltip class="text-body2">¡Pide por WhatsApp!</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- MENÚ LATERAL (DRAWER) CON RUTAS A CADA VISTA -->
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered class="bg-grey-1">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header class="text-weight-bolder text-red-9 text-uppercase text-subtitle2">
            Categorías del Menú
          </q-item-label>

          <q-item clickable v-ripple to="/hamburguesas" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Hamburguesas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/perros" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Perros Calientes</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/pizzas" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Pizzas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/bebidas" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Bebidas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/postres" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Postres</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/promociones" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Promociones</q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable v-ripple to="/nosotros" active-class="bg-red-1 text-red-9 text-weight-bold">
            <q-item-section avatar></q-item-section>
            <q-item-section class="text-body1">Nosotros</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      
      <router-view />

      <footer class="bg-grey-10 text-white q-py-md q-px-md">
        <div class="max-width-container">
          <div class="row q-col-gutter-md items-center">
            
            <!-- MARCA -->
            <div class="col-12 col-md-3">
              <div class="row items-center">
                <q-avatar size="28px" color="red-9" text-color="white" class="q-mr-xs">
                  <q-icon name="restaurant" size="18px" />
                </q-avatar>
                <span class="text-subtitle1 text-weight-bolder text-red-5">Sabor & Toque</span>
              </div>
              <div class="text-caption text-grey-5 q-mt-xs">Comidas rápidas con el verdadero toque artesanal.</div>
            </div>

            <!-- ENLACES A LAS VISTAS DE COMIDA -->
            <div class="col-12 col-md-5">
              <div class="text-caption text-weight-bold text-red-5 q-mb-xs">SECCIONES</div>
              <div class="row q-col-gutter-xs text-caption">
                <div class="col-4"><router-link to="/hamburguesas" class="footer-link"> Hamburguesas</router-link></div>
                <div class="col-4"><router-link to="/perros" class="footer-link"> Perros</router-link></div>
                <div class="col-4"><router-link to="/pizzas" class="footer-link"> Pizzas</router-link></div>
                <div class="col-4"><router-link to="/bebidas" class="footer-link"> Bebidas</router-link></div>
                <div class="col-4"><router-link to="/postres" class="footer-link"> Postres</router-link></div>
                <div class="col-4"><router-link to="/promociones" class="footer-link"> Promos</router-link></div>
              </div>
            </div>

            <!-- CONTACTO & VISTA NOSOTROS -->
            <div class="col-12 col-md-4">
              <div class="text-caption text-weight-bold text-red-5 q-mb-xs">INFO & CONTACTO</div>
              <div class="text-caption text-grey-4">
                <div><q-icon name="place" color="red-5" /> Calle 15 # 10-20, Centro | <q-icon name="phone" color="red-5" /> 300 123 4567</div>
                <div class="q-mt-xs">
                  <router-link to="/nosotros" class="text-amber-5 text-weight-bold footer-link"> Conoce Nuestro Equipo (Nosotros)</router-link>
                </div>
              </div>
            </div>

          </div>

          <q-separator color="grey-8" class="q-my-sm" />

          <div class="text-center text-grey-5 text-caption">
            © 2026 <strong>Sabor & Toque - Menú Digital</strong> | Todos los derechos reservados.
          </div>
        </div>
      </footer>

    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.max-width-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-link {
  color: #e0e0e0;
  text-decoration: none;
  display: inline-block;
  padding: 2px 0;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ff5252;
  text-decoration: underline;
}
</style>