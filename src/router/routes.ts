import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("src/layouts/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/IndexPage.vue"),
      },
      {
        path: "/login",
        component: () => import("src/pages/IndexPage.vue"),
        name: "login",
      },
      {
        path: "/recovery",
        component: () => import("src/pages/IndexPage.vue"),
        name: "recovery",
      },
      {
        path: "/dashboard",
        component: () => import("src/pages/dashboard/HomePage.vue"),
        name: "dashboard",
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
