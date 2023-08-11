<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <main class="container mx-auto mt-10">
    <RouterView />
    <!-- App footer -->
  </main>
  <Footer />
</template>
