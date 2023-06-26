<script setup>
// 方式二
// import { useRouter } from "vue-router"
// const router = useRouter()
// // 通过to来获取到路由的变化,我觉得不好用
// router.beforeEach((to) => {
  //   console.log(to);
  // })
  
// 方式一
import { useRoute } from 'vue-router';
const route = useRoute()


</script>


<template>
  <div class="header">
    <div class="left">
      <div class="title">{{ route.meta.title }}</div>
    </div>
    <div class="right">
      <div class="use-info">use-info</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  .title {
    font-size: 20px;
  }
  
  
}

</style>