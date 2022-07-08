<template>
  <div class="search_filter">
    <div class="search_warp w">
      <div class="search_list">
        <ul class="height">
          <span class="label">分类:</span>
          <li><a href="#" class="active">全部</a></li>
          <li><a href="#">小米平板</a></li>
          <li><a href="#">入耳式耳机</a></li>
          <li><a href="#">扫地机器人</a></li>
          <li><a href="#">移动电源</a></li>
          <li><a href="#">电风扇</a></li>
          <li><a href="#">床垫</a></li>
          <li><a href="#">空调</a></li>
          <li><a href="#">积木</a></li>
          <li><a href="#">小米电视</a></li>
          <li><a href="#">充电器</a></li>
          <span class="more_btn">更多<span class="iconfont icon-downforward"></span></span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.search_filter {
  background-color: #fff;

  .search_warp {
    .search_list {
      position: relative;
      height: 84px;
      padding: 18px 0;
      box-sizing: border-box;

      ul {
        position: relative;
        overflow: hidden;
        padding: 0 64px 0 124px;

        .label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 14px 0;
          color: #b0b0b0;
          font-size: 14px;
        }

        li {
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px;
          width: 148px;
          padding: 14px 0;
          height: 48px;
          line-height: 20px;

          a {
            width: 148px;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #424242;
          }

          .active {
            color: #ff6700 !important;
          }
        }

        .more_btn {
          position: absolute;
          top: 0;
          right: 0;
          padding: 14px 0;
          color: #757575;
          font-size: 14px;
          cursor: pointer;

          .iconfont {
            margin-left: 5px;
            color: #b0b0b0;
            font-size: 10px;
          }
        }
      }

      .height {
        height: 48px;
      }
    }
  }
}
</style>
