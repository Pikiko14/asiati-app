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
        component: () => import("src/pages/dashboard/homePage.vue"),
        name: "dashboard",
        meta: {
          available: ["list-meta-metric"],
          auth: true,
        },
      },
      {
        path: "/users",
        component: () => import("src/pages/dashboard/users/userPage.vue"),
        name: "users",
        meta: {
          available: ["list-users"],
          auth: true,
        },
      },
      {
        path: "/companies",
        component: () =>
          import("src/pages/dashboard/companies/companiesPage.vue"),
        name: "companies",
        meta: {
          available: ["list-business"],
          auth: true,
        },
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
