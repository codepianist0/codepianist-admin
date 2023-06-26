<script setup>
import menuBar from "@/components/menuBar/menuBar.vue"
import layoutHeader from "@/components/layout-header/layout-header.vue"
import layoutFooter from "../../components/layout-footer/layout-footer.vue";


</script>


<template>
  <div class="index">
    <div class="common-layout">
      <el-container class="container">
        <el-aside class="aside" width="200px">
          <div class="header">
            <img class="logo" src="//s.weituibao.com/1582958061265/mlogo.png">
            <span class="title">yuge admin</span>
          </div>
          <div class="line" />
          <menu-bar />
        </el-aside>
        <el-container>
          <el-header class="layout-header">
            <layout-header title="title"/>
          </el-header>
          <el-main>
            <router-view />
          </el-main>
          <el-footer class="layout-footer">
            <layout-footer />
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  height: 100vh;
  .container {
    height: 100vh;
    .aside {
      color: #fff;
      background-color: var(--menu-color);
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }
      .title {
        font-size: 20px;
        font-weight: 700;
      }
    }
    .line {
      border-top: 1px solid hsla(0,0,100%,.05);
      border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
  }

  }
  .layout-header {
    height: 50px;
    border-bottom: 1px solid #ddd;
  }
  .layout-footer {
    height: 50px;
    border-top: 1px solid #ddd;
  }
}

</style>