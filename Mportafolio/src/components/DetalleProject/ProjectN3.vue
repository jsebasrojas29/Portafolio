<script>
import projects from "../../data/projects";
export default {
  name: "ImageComponent",
  data() {
    return {
      // Almacena el primer proyecto en una propiedad de datos
      firstProject: projects[2],
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
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
        >
          {{ firstProject.category }}
        </span>
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

  <!-- <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
    <div class="mb-10 sm:mb-0">
      <img
        src="../../assets/Imagenes/Dg001.jpg"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      />
    </div>
    <div class="mb-10 sm:mb-0">
      <img
        src="../../assets/Imagenes/Dg002.jpg"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      />
    </div>
    <div class="mb-10 sm:mb-0">
      <img
        src="../../assets/Imagenes/Dg003.jpg"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      />
    </div>
  </div> -->

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

  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <div class="w-full sm:w-3/3 text-left mt-10 sm:mt-5">
      <div class="mb-10 sm:mb-0">
        <img
          src="../../assets/Imagenes/webwhisky.png"
          class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        />
      </div>
    </div>
  </div>
</template>
