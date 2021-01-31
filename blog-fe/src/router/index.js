import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/studyBlog",
    name: "StudyBlog",
    component: () => import("../views/studyBlog.vue"),
  },
  {
    path: "/journal",
    name: "Journal",
    component: () => import("../views/journal.vue"),
  },
  {
    path: "/personalProfile",
    name: "PersonalProfile",
    component: () => import("../views/personalProfile.vue"),
  },
  {
    path: "/blogDetail/:blog_id",
    name: "BlogDetail",
    component: () => import("../views/blogDetail.vue"),
  },
  {
    path: "/journalDetail/:journal_id",
    name: "JournalDetail",
    component: () => import("../views/journalDetail.vue"),
  },
  {
    path: "/postAticle",
    name: "PostAticle",
    component: () => import("../views/postAticle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
