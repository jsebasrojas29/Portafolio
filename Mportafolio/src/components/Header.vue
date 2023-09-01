<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
const PaginaInicio = computed(() => route.name == "Inicio");
const route = useRoute();
</script>
<template>
  <header class="bg-slate-800" :class="{ header: PaginaInicio }">
    <div class="mx-auto container p-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <!-- <RouterLink
                :to="{name: 'inicio'}"
            >
             Logotipo 
             <img class="w-32" src="/img/logo.svg" alt="Logotipo" /> 
        </RouterLink> -->
        </div>
        <div>
          <nav class="flex gap-4">
            <RouterLink
              :to="{ name: 'Inicio' }"
              class="text-white uppercase font-bold"
              active-class="text-orange-500"
            >
              Inicio
            </RouterLink>
            <RouterLink
              :to="{ name: 'Contactme' }"
              class="text-white uppercase font-bold"
              active-class="text-orange-500"
            >
              Contact me
            </RouterLink>
          </nav>
        </div>
      </div>
      <div
        class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
        v-if="PaginaInicio"
      >
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hello, I'm Juan Sebastian
          </h1>
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Frontend developer and game developer.
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Hey, are looking for a web developer to build your Brand and grow your business? Let's shake hands with me.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
            href="https://www.linkedin.com/in/juan-sebastian-trujillo-rojas-562992156/"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >check out my Linkedin</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  background-image: url("./../assets/Imagenes/fondo.jpg");
  background-size: cover;
  background-position: center;
}
</style>
