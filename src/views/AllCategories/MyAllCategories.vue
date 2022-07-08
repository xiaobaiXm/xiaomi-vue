<template>
  <div class="main">
    <div class="nav">
      <!-- bread -->
      <MyBread></MyBread>
    </div>
    <div class="container w">
      <div class="category">
        <!-- tab -->
        <MyCategoryTabVue></MyCategoryTabVue>
        <!-- list -->
        <MyCategoryListVue></MyCategoryListVue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyCategoryTabVue from './components/CategoryTab/MyCategoryTab.vue'
import MyCategoryListVue from './components/CategoryList/MyCategoryList.vue'
</script>

<style lang="less" scoped>
.main {
  .nav {
    height: 40px;
    background-color: #f5f5f5;
    color: #757575;
  }

  .container {
    height: 1000px;

    .category {
      height: 500px;
    }
  }
}
</style>
