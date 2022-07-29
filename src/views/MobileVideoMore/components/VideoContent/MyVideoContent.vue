<template>
  <div class="video_content w">
    <ul>
      <li>
        <!-- img -->
        <MyContentImgVue></MyContentImgVue>
        <!-- cont -->
        <MyContentVue></MyContentVue>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import MyContentImgVue from './components/MyContentImg.vue'
import MyContentVue from './components/MyContent.vue'
</script>

<style lang="less" scoped>
.video_content {
  height: 4000px;
  margin-top: 14px;

  ul {
    li {
      display: flex;
      flex-direction: column;
      float: left;
      width: 606px;
      height: 490px;
      margin: 0 0 14px 14px;
      background-color: #fff;
    }
  }
}
</style>
