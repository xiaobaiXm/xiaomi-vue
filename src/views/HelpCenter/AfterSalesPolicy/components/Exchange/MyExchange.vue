<template>
  <div class="mi-exchange-box__wrapper">
    <div class="mi-exchange-box">
      <h2 class="title">产品售后政策查询</h2>
      <div class="content clearfix">
        <dl v-for="(item , index) in 20" :key="index">
          <dt></dt>
          <dd>
            <a href="#">骑行运动及相关</a>
          </dd>
        </dl>
      </div>
    </div>
    <div class="exchange-box w">
      <div class="content">
        <div class="clearfix">
          <dl>
            <dd>产品保外维修物料价格查询<a href="#">了解详情>></a></dd>
            <dd>停止服务产品公告查询<a href="#">了解详情>></a></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.mi-exchange-box__wrapper {

  .mi-exchange-box {
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
      // height: 605px;
      min-height: 117px;
      padding: 28px 0;
      margin-bottom: 45px;
      background-color: #fff;

      dl {
        width: 206px;
        float: left;
        padding: 14px 50px;

        dt {
          font-size: 18px;
          line-height: 36px;
          color: #333;
          padding-bottom: 5px;
        }

        dd {
          font-size: 14px;
          line-height: 28px;
          margin-left: 0;

          a {
            color: #757575;
          }
        }
      }
    }
  }

  .exchange-box {
    margin-bottom: 45px;

    .content {
      padding: 28px 0;

      background-color: #fff;

      .clearfix {
        dl {
          display: block;
          width: auto;
          // float: left;
          padding: 14px 50px;

          dd {
            margin: 0;
            line-height: 28px;
            font-size: 14px;

            a {
              color: #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>
