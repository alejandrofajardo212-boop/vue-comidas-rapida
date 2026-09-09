<template>
  <q-page class="q-pb-xl bg-grey-1">
    <!-- Banner Horizontal -->
    <q-img
      src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&auto=format&fit=crop"
      height="200px"
    >
      <div class="absolute-full flex flex-center bg-black-5 text-center">
        <div>
          <div class="text-h4 text-bold text-white">
            Hamburguesas Artesanales
          </div>
          <div class="text-subtitle2 text-grey-3 q-mt-xs">
            Carne 100% de res, pan brioche y salsas de la casa.
          </div>
        </div>
      </div>
    </q-img>

    <!-- Grid de Productos -->
    <div class="q-pa-md" style="max-width: 1000px; margin: 0 auto">
      <div class="row q-col-gutter-md">
        <div
          v-for="item in lista"
          :key="item.id"
          class="col-12 col-sm-6"
        >
          <q-card
            flat
            bordered
            class="full-height flex flex-center column"
            :class="{ 'bg-amber-1 border-amber': item.recomendado }"
          >
            <div
              v-if="item.recomendado"
              class="full-width bg-amber-9 text-white text-bold text-center q-pa-xs text-caption"
            >
               RECOMENDACIÓN DEL CHEF
            </div>

            <q-img
              :src="item.foto"
              :ratio="4 / 3"
              fit="contain"
              class="full-width bg-grey-2"
            >
              <q-badge
                v-if="item.etiqueta"
                color="red-8"
                floating
                class="q-mr-xs q-mt-xs text-bold"
              >
                {{ item.etiqueta }}
              </q-badge>
            </q-img>

            <q-card-section class="full-width col-grow">
              <div class="text-bold text-subtitle1">{{ item.nombre }}</div>
              <div class="text-caption text-grey-8 q-mt-xs">
                {{ item.descripcion }}
              </div>
            </q-card-section>

            <q-separator class="full-width" />

            <q-card-section class="full-width row justify-between items-center">
              <span class="text-subtitle1 text-bold text-green-9">{{
                item.precio
              }}</span>
              <q-btn color="red-8" icon="add_shopping_cart" flat dense round />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const lista = ref([
  {
    id: 1,
    nombre: "La Clásica",
    descripcion:
      "Carne de res 150g, queso cheddar, lechuga, tomate y salsa especial.",
    precio: "$18.500",
    etiqueta: "Más pedido",
    foto: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 2,
    nombre: "Master Monster Bacon",
    descripcion:
      "Doble carne 300g, tocineta crocante, queso costeño asado y BBQ.",
    precio: "$26.000",
    etiqueta: "Nuevo",
    foto: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop",
    recomendado: true,
  },
  {
    id: 3,
    nombre: "Volcán Picante",
    descripcion:
      "Carne de res, queso pepper jack, jalapeños salteados y mayonesa picante.",
    precio: "$22.000",
    etiqueta: "Picante",
    foto: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 4,
    nombre: "Veggie Portobello",
    descripcion:
      "Champiñón portobello asado, queso mozzarella, rúgula y tomate.",
    precio: "$20.000",
    etiqueta: "Vegetariano",
    foto: "https://comemascarnedecerdo.co/wp-content/uploads/2024/04/img-hamburguesa-gourmet-de-brazo-de-cerdo-a-la-parrilla-1.jpg",
    recomendado: false,
  },
]);
</script>

<style scoped>
.border-amber {
  border: 2px solid #ffb300 !important;
}
</style>