import { createRouter, createWebHistory } from "vue-router";

import Calender from "../views/Calender.vue";
import Standings from "../views/Standings.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Calender,
    },
    {
      path: "/stand",
      component: Standings,
    },
  ],
});

export default router;
