import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("src/layouts/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/login",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          auth: false,
        },
        name: "login",
      },
      {
        path: "/dashboard",
        component: () => import("src/layouts/Layout.vue"),
        children: [
          {
            path: "/home",
            component: () => import("pages/dashboard/HomePage.vue"),
            meta: {
              auth: true,
            },
            name: "dasboard",
          },
        ],
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
