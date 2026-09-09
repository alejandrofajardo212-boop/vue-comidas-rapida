<template>
  <q-page class="q-pb-xl bg-grey-1">
    <q-img
      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop"
      height="200px"
    >
      <div class="absolute-full flex flex-center bg-black-5 text-center">
        <div>
          <div class="text-h4 text-bold text-white">Pizzas Artesanales</div>
          <div class="text-subtitle2 text-grey-3 q-mt-xs">
            Masa crujiente horneada al instante con abundante queso.
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
    nombre: "Pizza Hawaiana",
    descripcion:
      "Jamón seleccionado, piña en almíbar y queso mozzarella abundante.",
    precio: "$24.000",
    etiqueta: "Más pedido",
    foto: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 2,
    nombre: "Carnes Suprema",
    descripcion:
      "Pepperoni, tocineta, carne molida, pollo desmechado y salsa pomodoro.",
    precio: "$32.000",
    etiqueta: "Nuevo",
    foto: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop",
    recomendado: true,
  },
  {
    id: 3,
    nombre: "Pepperoni Fuego",
    descripcion:
      "Doble pepperoni crujiente, queso mozzarella y un toque de hojuelas de ají.",
    precio: "$28.000",
    etiqueta: "Picante",
    foto: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 4,
    nombre: "Cuatro Quesos",
    descripcion:
      "Mezcla de queso mozzarella, parmesano, provolone y queso azul.",
    precio: "$26.000",
    etiqueta: "Vegetariano",
    foto: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&auto=format&fit=crop",
    recomendado: false,
  },
]);
</script>

<style scoped>
.border-amber {
  border: 2px solid #ffb300 !important;
}
</style>