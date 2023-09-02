<script>
import projects from "../../data/projects";
export default {
  name: "ImageComponent",
  data() {
    return {
      // Almacena el primer proyecto en una propiedad de datos
      firstProject: projects[5],
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
      <div
        class="w-full sm:w-2/3 text-left mt-10 sm:mt-0 animate-slide-in-left"
      >
        <p
          class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
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

   

    <div class="overflow-hidden bg-white py-24 sm:py-32 animate-slide-in-left">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
            Current Status of Software in Development
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ firstProject.future[0].details }}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ firstProject.future[1].details }}
            </p>
          
          
          </div>
        </div>
        <img
          src="../../assets/Imagenes/InterfazPrototipo.jpg"
          alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>

    <div
      class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 animate-slide-in-left"
    >
      <div
        class="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
        style="padding-top: 75%"
      >
        <iframe
          class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          src="https://www.youtube.com/embed/vScjHNTmGfM"
          allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
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
