<template>
  <div class="site_body">
    <dl>
      <dt>帮助中心</dt>
      <dd><a href="#">账户管理</a></dd>
      <dd><a href="#">购物指南</a></dd>
      <dd><a href="#">订单操作</a></dd>
    </dl>
    <dl>
      <dt>服务支持</dt>
      <dd><a href="#">售后政策</a></dd>
      <dd><a href="#">自助服务</a></dd>
      <dd><a href="#">相关下载</a></dd>
    </dl>
    <dl>
      <dt>线下门店</dt>
      <dd><a href="#">小米之家</a></dd>
      <dd><a href="#">服务网点</a></dd>
      <dd><a href="#">授权体验店/专区</a></dd>
    </dl>
    <dl>
      <dt>关于小米</dt>
      <dd><a href="#">了解小米</a></dd>
      <dd><a href="#">加入小米</a></dd>
      <dd><a href="#">投资者关系</a></dd>
      <dd><a href="#">企业社会责任</a></dd>
      <dd><a href="#">廉洁举报</a></dd>
    </dl>
    <dl>
      <dt>关注我们</dt>
      <dd><a href="#">新浪微博</a></dd>
      <dd><a href="#">官方微信</a></dd>
      <dd><a href="#">联系我们</a></dd>
      <dd><a href="#">公益基金会</a></dd>
    </dl>
    <dl>
      <dt>特色服务</dt>
      <dd><a href="#">F 码通道</a></dd>
      <dd><a href="#">礼物码</a></dd>
      <dd><a href="#">防伪查询</a></dd>
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
</script>

<style lang="less" scoped>
.site_body {
  height: 252px;
  padding: 40px 0;

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
