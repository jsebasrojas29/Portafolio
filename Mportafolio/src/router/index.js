import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: InicioView,
    },
    {
      path: "/About",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/Project1",
      name: "Project1",
      component: () => import("../components/DetalleProject/ProjectN1.vue"),
    },
    {
      path: "/Project2",
      name: "Project2",
      component: () => import("../components/DetalleProject/ProjectN2.vue"),
    },
    {
      path: "/Project3",
      name: "Project3",
      component: () => import("../components/DetalleProject/ProjectN3.vue"),
    },
    {
      path: "/Project4",
      name: "Project4",
      component: () => import("../components/DetalleProject/ProjectN4.vue"),
    },
  ],
});

export default router;
