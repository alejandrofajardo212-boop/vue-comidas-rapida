<template>
  <q-page class="q-pb-xl bg-grey-1">
    <q-img
      src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=1200&auto=format&fit=crop"
      height="200px"
    >
      <div class="absolute-full flex flex-center bg-black-5 text-center">
        <div>
          <div class="text-h4 text-bold text-white">Perros Calientes</div>
          <div class="text-subtitle2 text-grey-3 q-mt-xs">
            Cargados de sabor, papita fosforito y las mejores salsas.
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
    nombre: "Perro Clásico",
    descripcion:
      "Salchicha manguera, queso derretido, papa ripio y salsas tradicionales.",
    precio: "$12.000",
    etiqueta: "Más pedido",
    foto: "https://comedera.com/wp-content/uploads/sites/9/2022/03/Pan-de-perro-caliente-shutterstock_1472131574.jpg",
    recomendado: false,
  },
  {
    id: 2,
    nombre: "Perro Suizo Especial",
    descripcion:
      "Salchicha suiza a la plancha, queso doble crema, tocineta y piña dulce.",
    precio: "$16.500",
    etiqueta: "Nuevo",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pbIfNxaDvzZ4FUPW8NVy_YrecRKznFfH3DtI-JkC65laovuLWx_A62Q&s=10",
    recomendado: true,
  },
  {
    id: 3,
    nombre: "Perro Mexicano",
    descripcion:
      "Salchicha premium, guacamole, pico de gallo, jalapeños y totopos picados.",
    precio: "$15.000",
    etiqueta: "Picante",
    foto: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?w=500&auto=format&fit=crop",
    recomendado: false,
  },
  {
    id: 4,
    nombre: "Super Criollo",
    descripcion:
      "Salchicha manguera, mañoco, maíz tierno, carne desmechada y queso costeño.",
    precio: "$18.000",
    etiqueta: "",
    foto: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500&auto=format&fit=crop",
    recomendado: false,
  },
]);
</script>

<style scoped>
.border-amber {
  border: 2px solid #ffb300 !important;
}
</style>