<script>
import projects from "../../data/projects";
export default {
  name: "ImageComponent",
  data() {
    return {
      // Almacena el primer proyecto en una propiedad de datos
      firstProject: projects[1],
      showDiv: false,
    };
  },
  mounted() {
    window.scrollTo(0, 0); // Esto hace que la página se desplace hacia arriba
  
  },
};
</script>
<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Project heading and meta info -->
    <p
      class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
    >
      {{ firstProject.title }}
    </p>
    <div class="flex">
      <div class="flex items-center mr-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>

        <h2 class="text-base font-semibold leading-7 text-indigo-600">
          {{ firstProject.category }}
        </h2>
      </div>
      <div class="flex items-center">
        <i
          data-feather="tag"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
        >
          <!-- {{ singleProjectHeader.singleProjectTag }} -->
        </span>
      </div>
    </div>

    <div class="block sm:flex gap-0 sm:gap-10 mt-14">
      <!-- Single project left section details -->
      <div class="w-full sm:w-1/3 text-left animate-slide-in-left">
        <!-- Single project client details -->
        <div class="mb-7">
          <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 font-semibold text-gray-900"
          >
            About Client
          </p>

          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">Name:</dt>
            <dd class="inline text-gray-600">
              {{ firstProject.aboutCliente.Name }}.
            </dd>
          </div>
          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">Services:</dt>
            <dd class="inline text-gray-600">
              {{ firstProject.aboutCliente.Services }}.
            </dd>
          </div>
          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">Website:</dt>
            <dd class="inline text-gray-600">
              {{ firstProject.aboutCliente.Website }}
            </dd>
          </div>
          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">Phone:</dt>
            <dd class="inline text-gray-600">
              {{ firstProject.aboutCliente.Phone }}
            </dd>
          </div>
        </div>

        <!-- Single project objectives -->
        <div class="mb-7">
          <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 font-semibold text-gray-900"
          >
            Objective
          </p>
          <div class="relative pl-9">
            <dd class="inline text-gray-600">
              {{ firstProject.Objective }}
            </dd>
          </div>
        </div>

        <!-- Single project technologies -->
        <div class="mb-7">
          <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2 font-semibold text-gray-900"
          >
            Tools & Technologies
          </p>
          <div class="relative pl-9">
            <dd class="inline text-gray-600">
              {{ firstProject.ToolsTechnologies }}
            </dd>
          </div>
        </div>
      </div>

      <!-- Single project right section details -->
      <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0 animate-slide-in-left">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          Challenge
        </p>
        <p
          v-for="projectDetail in firstProject.Challenge"
          :key="projectDetail.id"
          class="mt-6 text-lg leading-8 text-gray-600"
        >
          {{ projectDetail.details }}
        </p>
      </div>
    </div>
  </div>

  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0 animate-slide-in-left">
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        Other data
      </p>
      <p
        v-for="projectDetailF in firstProject.future"
        :key="projectDetailF.id"
        class="mt-6 text-lg leading-8 text-gray-600"
      >
        {{ projectDetailF.details }}
      </p>
    </div>
    <div class="w-full sm:w-1/3 text-left animate-slide-in-left">
      <img
        src="../../assets/Imagenes/Digitacion_play.png"
        alt="Ejemplo de Imagen"
      />
    </div>
  </div>

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Do you want to try the game?
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <a
          href="https://delfo31.itch.io/digitacin-001"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Play
        </a>
      </div>
    </div>
  </div>
</template>
<style>
    @keyframes slide-in-left {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .animate-slide-in-left {
        animation: slide-in-left 1s ease-out;
    }
</style>
