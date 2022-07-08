<template>
  <div class="buy_option">
    <div class="buy_box_child">
      <div class="option_box">
        <div class="title">选择产品</div>
        <ul class="clearfix">
          <li class="selected">
            <a href="#" class="aselected">Redmi Note 11 Pro</a>
          </li>
          <li>
            <a href="#">Redmi Note 11 Pro+</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="buy_box_child">
      <div class="option_box">
        <div class="title">选择版本</div>
        <ul class="clearfix">
          <li class="selected">
            <a href="#" class="aselected">8GB+128GB</a>
          </li>
          <li>
            <a href="#">6GB+128GB</a>
          </li>
          <li>
            <a href="#">8GB+256GB</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="buy_box_child">
      <div class="option_box">
        <div class="title">选择颜色</div>
        <ul class="clearfix">
          <li class="selected">
            <a href="#" class="aselected">浅梦星河</a>
          </li>
          <li>
            <a href="#">时光静紫</a>
          </li>
          <li>
            <a href="#">迷雾森林</a>
          </li>
          <li>
            <a href="#">神秘黑境</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.buy_option {
  .buy_box_child {
    position: relative;
    margin-bottom: 30px;

    .option_box {
      .title {
        color: #333;
        font-size: 18px;
      }

      ul {
        li {
          float: left;
          width: 310px;
          height: 42px;
          line-height: 40px;
          text-align: center;
          margin-top: 10px;
          box-sizing: border-box;
          border: 1px solid #e0e0e0;
          font-size: 16px;
          transition: all .2s ease;
          cursor: pointer;

          a {
            display: block;
            padding: 0 5px;
            box-sizing: border-box;
          }

          .aselected {
            color: #ff6700;
          }

          &:nth-child(2n+1) {
            margin-right: 20px;
          }

          &:hover {
            border-color: #ff6700;
          }
        }

        .selected {
          color: #ff6700;
          border: 1px solid #ff6700;
        }
      }
    }
  }
}
</style>
