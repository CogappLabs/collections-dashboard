import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/objectlookup",
    name: "Object lookup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Object lookup" */ "../views/ObjectLookupView.vue"
      ),
  },
  {
    path: "/blocklist",
    name: "Blocklist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Blocklist" */ "../views/BlocklistView.vue"),
  },
  {
    path: "/harvest",
    name: "Harvest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Harvest" */ "../views/HarvestView.vue"),
  },
  {
    path: "/analytics",
    name: "Collection Analytics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Collection Analytics" */ "../views/CollectionAnalyticsView.vue"
      ),
  },
  {
    path: "/facetedsearch",
    name: "Facets",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Facets" */ "../views/FacetView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
