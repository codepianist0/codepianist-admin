<script setup>


</script>


<template>
  <div class="menu">
    <el-menu
      background-color="#222832"
      text-color="#fff"
      :router="true"
    >
      <el-sub-menu 
        index="1"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>DashBoard</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home">
            <el-icon><Odometer /></el-icon>
            首页
          </el-menu-item>
          <el-menu-item index="/add">
            <el-icon><Plus /></el-icon>  
            添加
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>


</style>