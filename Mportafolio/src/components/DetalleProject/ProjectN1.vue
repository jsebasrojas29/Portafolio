<script>
import projects from "../../data/projects";
import Gallery from "../ProjectGallery.vue";
export default {
  components: { Gallery },
  data() {
    return {
      // Almacena el primer proyecto en una propiedad de datos
      firstProject: projects[0],
    };
  },
};
</script>
<template>
  <div>
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
      
        <h2 class="text-base font-semibold leading-7 text-indigo-600"> {{ firstProject.category }}</h2>
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
  </div>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
          class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          About Client
        </p>
        <ul class="leading-loose">
          <li
            class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>Name: {{ firstProject.aboutCliente.Name }} </span>
          </li>
          <li
            class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>Services: {{ firstProject.aboutCliente.Services }} </span>
          </li>
          <li
            class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>Website: {{ firstProject.aboutCliente.Website }} </span>
          </li>
          <li
            class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>Phone: {{ firstProject.aboutCliente.Phone }} </span>
          </li>
        </ul>
      </div>

      <!-- Single project objectives -->
      <div class="mb-7">
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          Objective
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ firstProject.Objective }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          Tools & Technologies
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ firstProject.ToolsTechnologies }}
        </p>
      </div>

      <!-- Single project social sharing -->
      <!-- <div>
        <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          Share This
        </p>
        <div class="flex items-center gap-3 mt-5">
          <h2>xxxxxx</h2>
          <a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
        </div>
      </div> -->
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        Challenge
      </p>

      <p
        v-for="projectDetail in firstProject.Challenge"
        :key="projectDetail.id"
        class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ projectDetail.details }}
      </p>
    </div>
    
  </div>
  
  
<div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                Push to deploy.
              </dt>
              <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                SSL certificates.
              </dt>
              <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                Database backups.
              </dt>
              <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="../../assets/Imagenes/InterfazMiniBizz.jpeg" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
    </div>
  </div>
</div>
</template>
