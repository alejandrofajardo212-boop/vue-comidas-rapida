<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-red-9 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" aria-label="Menú" />

        <q-avatar class="q-ml-xs" size="36px">
        </q-avatar>
        <q-toolbar-title class="text-bold">
          Sabor & Toque
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered class="bg-grey-1">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header class="text-weight-bold text-red-9 text-uppercase">
            Categorías del Menú
          </q-item-label>

          <q-item clickable v-ripple to="/hamburguesas" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Hamburguesas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/perros" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Perros Calientes</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/pizzas" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Pizzas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/bebidas" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Bebidas</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/postres" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Postres</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/promociones" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Promociones</q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable v-ripple to="/nosotros" active-class="text-red-9 text-bold">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>Nosotros</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-dark text-white text-center q-pa-sm">
      <div class="text-caption">
        © 2026 Sabor & Toque - Menú Digital | Todos los derechos reservados
      </div>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>