<script>
import projects from "../../data/projects";
export default {
  name: "ImageComponent",
  data() {
    return {
      // Almacena el primer proyecto en una propiedad de datos
      firstProject: projects[3],
      showDiv: false,
    };
  },
  mounted() {
    // Mostrar el div después de un breve retraso al cargar la página
    setTimeout(() => {
      this.showDiv = true;
    }, 1000); // 1000 ms = 1 segundo
  },
};
</script>
<template>
  <div>
    <img
      src="../../assets/Imagenes/BannerOnRound.jpg"
      class="rounded-xl cursor-pointer"
    />
  </div>

  <div v-if="showDiv" class="block sm:flex gap-0 sm:gap-10 mt-14">
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
    <div class="w-full sm:w-2/3 text-left">
      <img
        src="../../assets/Imagenes/DesarrolloTA.png"
        alt="Ejemplo de Imagen"
      />
    </div>
    <div class="w-full sm:w-1/3 text-left mt-10 sm:mt-0">
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        Other data
      </p>
      <p
        v-for="projectDetailF in firstProject.future"
        :key="projectDetailF.id"
        class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ projectDetailF.details }}
      </p>
    </div>
  </div>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
  
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
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
  <div
    class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
  >
    <p
      class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
    >
      Titulo
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="item in firstProject.imgRelacionadas" :key="item.id">
        <img :src="item.img" class="rounded-xl cursor-pointer" />
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
</template>
