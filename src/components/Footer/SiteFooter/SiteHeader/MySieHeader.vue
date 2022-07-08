<template>
  <div class="site_header">
    <ul>
      <li><a href="#"><span class="iconfont icon-weixiubanshou"></span>预约维修服务</a></li>
      <li><a href="#"><span class="iconfont icon-7tiantuihuanhuo"></span>7天无理由退货</a></li>
      <li><a href="#"><span class="iconfont icon-15tianwuliyoutuihuo"></span>15天免费换货</a></li>
      <li><a href="#"><span class="iconfont icon-liwu"></span>满69元包邮</a></li>
      <li><a href="#"><span class="iconfont icon-dizhi"></span>520余家售后网点</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.site_header {
  width: 100%;
  height: 80px;
  padding: 27px 0;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;

  ul {
    display: flex;

    li {
      flex: 1;
      float: left;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      border-left: 1px solid #e0e0e0;

      a {
        color: #616161;

        .iconfont {
          margin-right: 6px;
          font-size: 22px;
        }
      }

      &:nth-child(1) {
        border: 0;
      }
    }
  }
}
</style>
