import { createRouter, createWebHashHistory } from "vue-router"


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: () => import("@/views/index/index.vue"),
      meta: {
        title: "系统介绍"
      }
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
      meta: {
        title: "首页"
      }
    },
    {
      path: "/add",
      component: () => import("@/views/add/add.vue"),
      meta: {
        title: "添加商品"
      }
    }
  ]
})


export default router