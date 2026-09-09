<template>
  <q-page class="q-pb-xl bg-grey-1">
    <q-img
      src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&auto=format&fit=crop"
      height="200px"
    >
      <div class="absolute-full flex flex-center bg-black-5 text-center">
        <div>
          <div class="text-h4 text-bold text-white">Postres Deliciosos</div>
          <div class="text-subtitle2 text-grey-3 q-mt-xs">
            El toque dulce perfecto para cerrar su comida.
          </div>
        </div>
      </div>
    </q-img>

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
    nombre: "Malteada de Oreo",
    descripcion:
      "Helado de vainilla batido con galleta Oreo y crema chantilly.",
    precio: "$12.500",
    etiqueta: "Más pedido",
    foto: "https://www.naturaldealimentos.com/wp-content/uploads/2025/05/MG_3119-1024x709.jpg",
    recomendado: false,
  },
  {
    id: 2,
    nombre: "Volcán de Chocolate",
    descripcion:
      "Bizcocho tibio relleno de chocolate líquido servido con helado.",
    precio: "$14.000",
    etiqueta: "Nuevo",
    foto: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop",
    recomendado: true,
  },
  {
    id: 3,
    nombre: "Waffle con Helado",
    descripcion:
      "Waffle crocante con bola de helado, arequipe y fresas frescas.",
    precio: "$13.000",
    etiqueta: "",
    foto: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 4,
    nombre: "Cheesecake de Frutos Rojos",
    descripcion:
      "Postre cremoso sobre base de galleta con salsa dulce de moras y arándanos.",
    precio: "$11.500",
    etiqueta: "Vegetariano",
    foto: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop",
    recomendado: false,
  },
]);
</script>

<style scoped>
.border-amber {
  border: 2px solid #ffb300 !important;
}
</style>