import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import PersonId from "@/pages/persons/PersonId.vue";
import PersonList from "@/pages/persons/PersonList.vue";
import PersonNew from "@/pages/persons/PersonNew.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/persons/:id",
    component: PersonId,
  },
  {
    path: "/persons/new",
    component: PersonNew,
  },
  {
    path: "/persons",
    component: PersonList,
  },
  // {
  //   path: "/about",
  //   component: About,
  // },
  // {
  //   path: "/posts/:id",
  //   component: PostIdPage,
  // },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
});

export default router;
