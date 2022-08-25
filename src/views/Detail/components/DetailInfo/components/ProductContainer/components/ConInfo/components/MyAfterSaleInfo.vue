<template>
  <div class="after_sale_info">
    <span>
      <a href="#" class="support">
        <span class="iconfont icon-gouxuan"></span>
        <em class="text" title="">小米自营</em>
      </a>
    </span>
    <span>
      <a href="#" class="support">
        <span class="iconfont icon-gouxuan"></span>
        <em class="text" title="">小米发货</em>
      </a>
    </span>
    <span>
      <a href="#" class="support">
        <span class="iconfont icon-gouxuan"></span>
        <em class="text" title="">15天无理由退货</em>
      </a>
    </span>
    <span>
      <a href="#" class="support">
        <span class="iconfont icon-gouxuan"></span>
        <em class="text" title="">运费说明</em>
      </a>
    </span>
    <span>
      <a href="#" class="support">
        <span class="iconfont icon-gouxuan"></span>
        <em class="text" title="">企业信息</em>
      </a>
    </span>
    <span>
      <a href="#" class="support">
        <span class="iconfont icon-gouxuan"></span>
        <em class="text" title="">7天价格保护</em>
      </a>
    </span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.after_sale_info {
  span {
    display: inline-block;

    .support {
      display: inline-block;
      margin: 0 15px 10px 0;
      line-height: 30px;
      font-size: 14px;
      white-space: nowrap;
      cursor: default;

      .iconfont {
        vertical-align: middle;
        font-size: 20px;
      }

      .text {
        margin-left: 2px;
      }

      &:hover {
        color: #b0b0b0 !important;
      }
    }
  }
}
</style>
