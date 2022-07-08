<template>
  <div class="header">
    <h2>{{ title }}</h2>
    <div class="more">
      <a href="#">查看更多<i class="iconfont icon-Rrl_s_139"></i></a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string | undefined
}>()

</script>

<style lang="less" scoped>
.header {
  height: 58px;

  h2 {
    line-height: 58px;
    font-size: 22px;
    font-weight: 200;
    color: #333;
  }

  .more {
    position: absolute;
    top: 0;
    right: 0;

    a {
      line-height: 58px;
      font-size: 16px;
      color: #424242;
      transition: all 0.4s;

      i {
        vertical-align: middle;
        margin-left: 8px;
        font-size: 20px;
        color: #b0b0b0;
        transition: all 0.4s;
      }

      &:hover {
        color: #ff6700 !important;

        i {
          color: #ff6700 !important;
        }
      }
    }

    .tab_lists {
      li {
        float: left;
        padding-top: 16px;
        margin-left: 30px;
        font-size: 16px;
        cursor: pointer
      }

      .tab_active {
        color: #ff6700;
        border-bottom: 2px solid #ff6700
      }
    }
  }
}
</style>
