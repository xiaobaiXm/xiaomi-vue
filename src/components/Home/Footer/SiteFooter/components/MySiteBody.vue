<template>
  <div class="site_body clearfix">
    <dl v-for="(item, index) in store.footerNavList" :key="index">
      <dt>{{ item.footerNavDt }}</dt>
      <dd v-for="DD in item.footerNavDd" :key="DD.id">
        <a href="#">{{ DD.name }}</a>
      </dd>
    </dl>

    <div class="contact">
      <p class="phone">400-100-5678</p>
      <p>8:00-18:00（仅收市话费）</p>
      <a href="#" class="artificial">
        <span class="iconfont icon-duanxin"></span>
        <span>人工客服</span>
      </a>
      <div class="follow">
        <span>关注小米:</span>
        <a href="#" class="iconfont icon-xinlangweibo"></a>
        <a href="#" class="iconfont icon-weixin"></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store/home'

const store = useHomeStore()

store.getFooterNavInfo()
</script>

<style lang="less" scoped>
.site_body {
  padding: 40px 0 40px 160px;

  dl {
    width: 160px;
    float: left;

    dt {
      margin: -1px 0 26px;
      font-size: 14px;
      color: #424242;
    }

    dd {
      margin: 10px 0 0;
      font-size: 12px;

      a {
        color: #757575;
      }
    }
  }

  .contact {
    float: right;
    width: 252px;
    height: 111px;
    text-align: center;
    color: #616161;
    border-left: 1px solid #e0e0e0;

    p {
      margin-bottom: 5px;
    }

    .phone {
      line-height: 1;
      color: #ff6700;
      font-size: 22px;
    }

    .artificial {
      display: block;
      box-sizing: border-box;
      width: 120px;
      height: 30px;
      margin: 0 auto;
      line-height: 28px;
      border: 1px solid #ff6700;
      background-color: #fff;
      color: #ff6700;
      transition: all 0.3s;

      .iconfont {
        font-size: 12px;
        color: #ff6700;
      }

      &:hover {
        background-color: #ff6700;
        color: #fff;

        span {
          color: #fff;
        }
      }
    }

    .follow {
      position: relative;
      margin-top: 10px;
      text-align: center;

      .iconfont {
        vertical-align: middle;
        font-size: 20px;
        color: #484848;
        margin-left: 6px;
      }
    }
  }
}
</style>
