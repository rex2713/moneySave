import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import IncomeAndExpend from "../views/IncomeAndExpend.vue";
import Info from "../views/Info.vue";
import Statistics from "../views/Statistics.vue";
import Family from "../views/Family.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/incomeAndExpend",
    name: "IncomeAndExpend",
    component: IncomeAndExpend,
  },
  { path: "/info", name: "Info", component: Info },
  { path: "/statistics", name: "Statistics", component: Statistics },
  { path: "/family", name: "Family", component: Family },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to) => {
//   if (to.name !== "Home" && !localStorage.getItem('token') ) {
//       window.alert("請先登入");
//       return router.push('/');
//   }});

export default router;
