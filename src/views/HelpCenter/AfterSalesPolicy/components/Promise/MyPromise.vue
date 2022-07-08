<template>
  <div class="mi-promise">
    <h2 class="title">小米承诺</h2>
    <div class="content">
      <div>
        <ul>
          <li>
            <span class="icon icon1"></span>
            <span class="webfont">7日内无理由退货</span>
          </li>
          <li>
            <span class="icon icon2"></span>
            <span class="webfont">质量问题15日内包换</span>
          </li>
          <li>
            <span class="icon icon3"></span>
            <span class="webfont">1年质保</span>
          </li>
        </ul>
        <p class="text">如因产品质量问题，凭厂商授权服务中心的检测证明，享受7日内退货，手机类15天换货、电视30日内换货，在质保期内享受1年内免费维修等三包服务！<br>
          （注：部分商品由厂家提供售后，或者服务周期存在日期差异，具体详则请查看对应品类的售后政策说明）</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.mi-promise {
  height: 530px;

  .title {
    display: block;
    margin: 30px 0 25px 0;
    text-align: center;
    line-height: 106px;
    color: #666;
    font-size: 30px;
    font-weight: 400;
  }

  .content {
    height: 398px;
    background-color: #fff;

    div {
      margin: 0 62px;

      ul {
        margin-bottom: 14px;
        padding-left: 40px;
        text-align: center;

        li {
          display: inline-block;
          margin: 67px 80px 62px;

          span {
            display: block;
            margin: 0 auto;
            font-size: 14px;
          }

          .icon {
            width: 97px;
            height: 97px;
            margin-bottom: 24px;
            background: url(http://c1.mifile.cn/f/i/17/service/exchangeicon.png?12=) 0 50% no-repeat;
          }

          .icon1 {
            background-position: 0 50%;
          }

          .icon2 {
            background-position: -100px 50%;
          }

          .icon3 {
            background-position: -200px 50%;
          }
        }
      }

      .text {
        display: block;
        height: 112px;
        padding: 35px 0;
        margin-top: 14px;
        box-sizing: border-box;
        text-align: center;
        color: #616161;
        font-size: 14px;
        border-top: 1px solid #f2f2f2;
      }
    }
  }
}
</style>
