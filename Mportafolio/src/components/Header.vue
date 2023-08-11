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
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        v-if="PaginaInicio"
      >
      <div
      class="space-y-4"
      >
      <input
         class=" bg-orange-800  hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full  p-2 rounded-lg uppercase"
        value="contactarme"
        
         />
    </div>
    </form>
    </div>
  </header>
</template>
