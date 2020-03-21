import Vue from "vue";
import VueRouter from "vue-router";
import Money from "@/views/Money.vue";
import Labels from "@/views/Labels.vue";
import Statistic from "@/views/Statistic.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/money"
  },
  {
    path: "/money",
    component: Money
  },
  {
    path: "/labels",
    component: Labels
  },
  {
    path: "/statistic",
    component: Statistic
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
