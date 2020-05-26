import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },


  {
    path: "/gobang/waiting",
    name: "GobangWaiting",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/games/gobang/GobangWaiting.vue")
  },
  {
    path: "/gobang/match",
    name: "GobangMatch",
    component: () =>
      import("../views/games/gobang/GobangMatch.vue")
  },
  {
    path: "/gobang",
    name: "GobangLobby",
    component: () =>
      import("../views/games/gobang/GobangLobby.vue")
  },


  {
    path: "/othello/waiting",
    name: "OthelloWaiting",
    component: () =>
      import("../views/games/othello/OthelloWaiting.vue")
  },
  {
    path: "/othello/match",
    name: "OthelloMatch",
    component: () =>
      import("../views/games/othello/OthelloMatch.vue")
  },
  {
    path: "/othello",
    name: "OthelloLobby",
    component: () =>
      import("../views/games/othello/OthelloLobby.vue")
  }
];

const router = new VueRouter({
  mode: "history",
//  base: process.env.BASE_URL,
  routes
});

export default router;
