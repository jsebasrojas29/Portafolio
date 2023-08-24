<script>
export default {
  props: {
    projectData: Object // Define la prop para recibir el objeto firstProject
  },
  data: () => {
		return {
			projectsHeading: 'Projects Portfolio'
		};
	},
  // Resto de las opciones del componente
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
		>
			<img
				:src="projectData.imgGallery1"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
			/>
		</div>
	</div>
</template>

