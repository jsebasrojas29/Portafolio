<script setup>
import {computed } from 'vue'
import {RouterLink, useRoute} from 'vue-router'
const PaginaInicio= computed(()=> route.name =='Inicio')
const route = useRoute()
</script>
<template>
  <header  class="bg-slate-800">
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
                :to="{name:'Inicio'}"
                class="text-white uppercase font-bold"
                active-class="text-orange-500"
                >
                    Inicio
                </RouterLink>
                <RouterLink
                :to="{name:'About'}"
                class="text-white uppercase font-bold"
                active-class="text-orange-500"
                >
                    About
                </RouterLink>

            </nav>
        </div>
      </div>
      <form
        class="md:w-1/2 2xl:w-1/3 my-32 p-10 rounded-lg shadow space-y-6"
        v-if="PaginaInicio"
      >
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
  
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
      Do you want to try the game?
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
    >
      <form class="space-y-6" action="#" method="POST">
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Play
          </button>
        </div>
      </form>
    </div>
  </div>
    </form>
    </div>
  </header>
</template>
