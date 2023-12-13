import { createRouter, createWebHistory } from "vue-router";

import AboutUs from "@/views/AboutUs/AboutUs.vue";
import AddAboutUs from "@/views/AboutUs/AddAboutUs.vue";
import AddComment from "@/views/Comment/AddComment.vue";
import AddDetails from "@/views/Details/AddDetails.vue";
import AddProject from "@/views/Project/AddProject.vue";
import AddSpecialService from "@/views/SpecialService/AddSpecialService.vue";
import AddStatistic from "@/views/Statistic/AddStatistic.vue";
import Brand from "@/views/Brand/Brand.vue";
import AddBrand from "@/views/Brand/AddBrand.vue";
import Comment from "@/views/Comment/Comment.vue";
import Details from "@/views/Details/Details.vue";
import HeroInfo from "@/views/HeroInfo/HeroInfo.vue";
import HomeView from "@/views/HomeView.vue";
import Project from "@/views/Project/Project.vue";
import Service from "@/views/Service/Service.vue";
import SpecialService from "@/views/SpecialService/SpecialService.vue";
import Statistic from "@/views/Statistic/Statistic.vue";
// 404
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
    path: "/admin/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/admin/Details",
    name: "Details",
    component: Details,
  },
  {
    path: "/admin/Details/add",
    name: "AddDetails",
    component: AddDetails,
  },
  {
    path: "/admin/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/admin/Project/add",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/admin/Comment",
    name: "Comment",
    component: Comment,
  },
  {
    path: "/admin/Comment/add",
    name: "AddComment",
    component: AddComment,
  },
  {
    path: "/admin/Brand",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/admin/Brand/add",
    name: "AddBrand",
    component: AddBrand,
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
