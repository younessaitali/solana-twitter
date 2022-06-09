import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    name: "Topics",
    path: "/topics/:topic?",
    component: () => import("@/pages/Topics.vue"),
  },
  {
    name: "Users",
    path: "/users/:author?",
    component: () => import("@/pages/Users.vue"),
  },
  {
    name: "Users",
    path: "/users/:author?",
    component: () => import("@/pages/Users.vue"),
  },
  {
    name: "Profile",
    path: "/profile",
    component: () => import("@/pages/Profile.vue"),
  },
  {
    name: "Tweet",
    path: "/tweet/:tweet",
    component: () => import("@/pages/Tweet.vue"),
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
