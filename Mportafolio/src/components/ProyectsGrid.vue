<script>
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../src/data/projects";

export default {
  components: { ProjectSingle },
  data: () => {
    return {
      projects,
      projectsHeading: "Some of my work",
      selectedCategory: "",
      searchProject: "",
    };
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-black sm:text-6xl">
          {{ projectsHeading }}
        </h1>
		<p class="mt-6 text-lg leading-8text-gray-900">
            Developer i have completed some personal projects
          </p>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
