<template>
  <q-page class="q-pb-xl bg-grey-1">
    <q-img
      src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1200&auto=format&fit=crop"
      height="200px"
    >
      <div class="absolute-full flex flex-center bg-black-5 text-center">
        <div>
          <div class="text-h4 text-bold text-white">Bebidas y Refrescos</div>
          <div class="text-subtitle2 text-grey-3 q-mt-xs">
            Bebidas heladas y jugos para acompañar su comida.
          </div>
        </div>
      </div>
    </q-img>

    <div class="q-pa-md" style="max-width: 1000px; margin: 0 auto">
      <div class="row q-col-gutter-md">
        <!-- AQUÍ QUEDÓ FORZADO A 2 TARJETAS POR FILA EN PC (col-sm-6) -->
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
    nombre: "Gaseosa Personal",
    descripcion: "Coca-Cola, Pepsi o Colombiana bien helada de 400ml.",
    precio: "$5.000",
    etiqueta: "Más pedido",
    foto: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 2,
    nombre: "Limonada de Coco",
    descripcion:
      "Limonada frappé natural preparada con leche de coco artesanal.",
    precio: "$9.500",
    etiqueta: "Nuevo",
    foto: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop",
    recomendado: true,
  },
  {
    id: 3,
    nombre: "Cerveza Artesanal",
    descripcion: "Cerveza rubia fría de la casa con toque cítrico.",
    precio: "$12.000",
    etiqueta: "",
    foto: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 4,
    nombre: "Jugo Natural en Leche",
    descripcion: "Jugo de maracuyá, lulo o mora preparado al instante.",
    precio: "$7.500",
    etiqueta: "Vegetariano",
    foto: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop",
    recomendado: false,
  },
]);
</script>

<style scoped>
.border-amber {
  border: 2px solid #ffb300 !important;
}
</style>