<script setup>

</script>


<template>
  <div class="fooder">
    <div class="copyright">
      Copyright © 2023-6 <span class="name">code-pianist</span>. All rights reserved.
    </div>
    <a 
      href="https://github.com/codepianist0/codepianist-admin" 
      class="my-github"
    >my-github</a>
  </div>
</template>

<style lang="less" scoped>
.fooder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .name {
    color: rgb(11, 133, 181);
  }
  .my-github {
    font-size: 18px;
    font-weight: 500;
    &:hover {
      color: rgb(212, 85, 85);
    }
  }
}

</style>