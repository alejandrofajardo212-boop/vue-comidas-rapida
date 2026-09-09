<template>
  <q-page class="q-pa-md bg-grey-1" style="max-width: 1000px; margin: 0 auto;">
    
    <div class="text-center q-my-md">
      <div class="text-h4 text-bold text-red-9">Sobre Nosotros</div>
      <div class="text-subtitle1 text-grey-8">Conozca la historia detrás de nuestro sabor.</div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="text-h6 text-bold text-dark q-mb-sm">Nuestra Historia</div>
            <p class="text-body2 text-grey-9">
              Iniciamos en el año 2020 con la meta de ofrecer las mejores comidas rápidas de la ciudad, usando ingredientes frescos y recetas artesanales. Lo que empezó como un pequeño puesto familiar hoy es el lugar preferido de nuestros clientes.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered class="full-height">
          <q-card-section>
            <div class="text-h6 text-bold text-dark q-mb-xs">Contacto y Ubicación</div>
            
            <q-list class="text-body2">
              <q-item class="q-px-none">
                <q-item-section avatar><q-icon name="place" color="red-9" /></q-item-section>
                <q-item-section>
                  <q-item-label class="text-bold">Dirección</q-item-label>
                  <q-item-label caption>Calle 36 # 15-20, Centro</q-item-label>
                </q-item-section>
              </q-item>

              <q-item class="q-px-none">
                <q-item-section avatar><q-icon name="schedule" color="red-9" /></q-item-section>
                <q-item-section>
                  <q-item-label class="text-bold">Horarios</q-item-label>
                  <q-item-label caption>Lunes a Domingo: 4:00 PM - 11:30 PM</q-item-label>
                </q-item-section>
              </q-item>

              <q-item class="q-px-none">
                <q-item-section avatar><q-icon name="phone" color="red-9" /></q-item-section>
                <q-item-section>
                  <q-item-label class="text-bold">Teléfono / WhatsApp</q-item-label>
                  <q-item-label caption>+57 300 123 4567</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 q-mt-md">
        <div class="text-h5 text-bold text-center q-mb-md">Nuestro Equipo</div>
        
        <div class="row q-col-gutter-md">
          <div v-for="persona in equipo" :key="persona.id" class="col-12 col-sm-4">
            <q-card flat bordered class="text-center q-pa-sm">
              <q-avatar size="90px" class="q-mt-xs">
                <img :src="persona.foto" />
              </q-avatar>
              <q-card-section class="q-pa-xs q-mt-sm">
                <div class="text-bold text-subtitle1">{{ persona.nombre }}</div>
                <q-chip size="sm" color="red-1" text-color="red-9" class="text-bold">{{ persona.cargo }}</q-chip>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const equipo = ref([
  {
    id: 1,
    nombre: "Camilo figueroa",
    cargo: "Chef Principal",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VgWLk64DBUDs4pImjkQiWRfrpaOGgjMLdhftxFnJ4A&s=10"
  },
  {
    id: 2,
    nombre: "Andrea Suarez",
    cargo: "Cajera & Atención",
    foto: "https://img.magnific.com/foto-gratis/trabajador-supermercado-midiendo-vendiendo-carne-al-cliente_342744-1074.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 3,
    nombre: "Julian Aguirre",
    cargo: "Domiciliario",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMf1AZs9Xuw73w9ZCTHcdnxZytMakjbJ57XoxMg68SW-GPq8d1Eu_JLP5&s=10"
  }
])
</script>