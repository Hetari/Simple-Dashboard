import { createRouter, createWebHistory } from "vue-router";

// import Brand from "@/views/Brand.vue";
// import Comment from "@/views/Statistic.vue";
// import Details from "@/views/Details.vue";
// import Project from "@/views/Project.vue";
// import Service from "@/views/Service.vue";
import AboutUs from "@/views/AboutUs.vue";
import AddAboutUs from "@/views/AddAboutUs.vue";
import AddSpecialService from "../views/AddSpecialService.vue";
import AddStatistic from "@/views/AddStatistic.vue";
import HeroInfo from "@/views/HeroInfo.vue";
import HomeView from "@/views/HomeView.vue";
import SpecialService from "@/views/SpecialService.vue";
import Statistic from "@/views/Statistic.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/admin",
  },
  {
    path: "/admin",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/HeroInfo",
    name: "HeroInfo",
    component: HeroInfo,
  },
  {
    path: "/admin/Statistic",
    name: "Statistic",
    component: Statistic,
  },
  {
    path: "/admin/Statistic/add",
    name: "AddStatistic",
    component: AddStatistic,
  },
  {
    path: "/admin/SpecialService",
    name: "SpecialService",
    component: SpecialService,
  },
  {
    path: "/admin/SpacialService/add",
    name: AddSpecialService,
    component: AddSpecialService,
  },
  {
    path: "/admin/about-us/add",
    name: "AddAbout",
    component: AddAboutUs,
  },
  {
    path: "/admin/about-us",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
