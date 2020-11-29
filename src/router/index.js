import Vue from "vue";
import VueRouter from "vue-router";
import p1 from "../components/p1.vue";
import p2 from "../components/p2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "p2",
    component: p2,
    props: true,
  },
  {
    path: "/p1",
    name: "p1",
    component: p1,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
