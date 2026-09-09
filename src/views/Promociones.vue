<template>
  <q-page class="q-pb-xl bg-grey-1">
    <q-img
      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop"
      height="200px"
    >
      <div class="absolute-full flex flex-center bg-black-5 text-center">
        <div>
          <div class="text-h4 text-bold text-white">Combos y Promociones</div>
          <div class="text-subtitle2 text-grey-3 q-mt-xs">
            Ahorre en grande con nuestras promociones especiales.
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
    nombre: "Combo Pareja",
    descripcion: "2 Hamburguesas Clásicas + Papas medianas + 2 Gaseosas.",
    precio: "$38.000",
    etiqueta: "Más pedido",
    foto: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/PYZSYFCCZREENBBPJIW6XODY7Q.jpg",
    recomendado: false,
  },
  {
    id: 2,
    nombre: "Combo Familiar",
    descripcion:
      "4 Hamburguesas + 2 Perros Sencillos + 2 Papas Grandes + 1.5L Gaseosa.",
    precio: "$65.000",
    etiqueta: "Nuevo",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAimfqH_8WyJkJGjmjcciFKQBu82xEWRkruEmypGD30enArBb0kNffOQgh&s=10",
    recomendado: true,
  },
  {
    id: 3,
    nombre: "Combo Personal",
    descripcion: "1 Hamburguesa Clásica + Papas pequeñas + Gaseosa 400ml.",
    precio: "$22.000",
    etiqueta: "",
    foto: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 4,
    nombre: "Promo 2x1 Perros",
    descripcion:
      "Lleve 2 Perros Clásicos por el precio de uno los días martes y jueves.",
    precio: "$15.000",
    etiqueta: "Ahorro",
    foto: "https://fazan.com.co/wp-content/uploads/2026/06/perro-caliente-colombiano.jpg",
    recomendado: false,
  },
]);
</script>

<style scoped>
.border-amber {
  border: 2px solid #ffb300 !important;
}
</style>