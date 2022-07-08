<template>
  <div class="selected_list">
    <ul>
      <li>
        <span class="good_info">Redmi Note 11 Pro
          <span class="good_info">8GB+256GB</span>
          <span class="good_info">神秘黑境</span>
        </span>
        <span class="price">2099元<del class="old_price">2199元</del></span>
      </li>
    </ul>
    <div class="total_price">总价：2200元</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.selected_list {
  width: 640px;
  height: 146px;
  padding: 30px;
  margin-bottom: 30px;

  ul {
    position: relative;

    li {
      color: #616161;
      font-size: 14px;

      .price {
        position: absolute;
        top: 0;
        right: 0;

        .old_price {
          margin-left: 5px;
        }
      }
    }
  }

  .total_price {
    margin-top: 20px;
    color: #ff6700;
    font-size: 20px;
  }
}
</style>
