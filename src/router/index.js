import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HeroInfo from "../views/HeroInfo.vue";
import Statistic from "../views/Statistic.vue";
import SpecialService from "../views/SpecialService.vue";
import AboutUsInfo from "../views/AboutUsInfo.vue";
import Service from "../views/Service.vue";
import Details from "../views/Details.vue";
import Project from "../views/Project.vue";
import Comment from "../views/Statistic.vue";
import Brand from "../views/Brand.vue";

import NotFound from "../views/NotFound.vue";

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
    path: "/admin/SpecialService",
    name: "SpecialService",
    component: SpecialService,
  },
  {
    path: "/admin/AboutUsInfo",
    name: "AboutUsInfo",
    component: AboutUsInfo,
  },
  {
    path: "/admin/Service",
    name: "Service",
    component: Service,
  },
  {
    path: "/admin/Details",
    name: "Details",
    component: Details,
  },
  {
    path: "/admin/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/admin/Comment",
    name: "Comment",
    component: Comment,
  },
  {
    path: "/admin/Brand",
    name: "Brand",
    component: Brand,
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },

  // 404
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
