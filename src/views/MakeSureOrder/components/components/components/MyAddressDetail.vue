<template>
  <div class="detail-section address-detail">
    <div class="address-header">
      <span class="text">收货地址</span>
    </div>
    <div class="address-list">
      <div class="address-item active">
        <div class="address-info">
          <div class="name">潘贵会</div>
          <div class="tel">131****3587</div>
          <div class="address-con">
            <span>广西</span>
            <span>柳州市</span>
            <span>鱼峰区</span>
            <span>麒麟街道</span>
            <span class="info">柳州职业技术学院</span>
          </div>
          <div class="address-action">
            <span class="modify">修改</span>
          </div>
        </div>
        <div class="address-info-solt"></div>
      </div>
      <div class="address-item">
        <div class="address-info">
          <div class="name">潘贵会</div>
          <div class="tel">131****3587</div>
          <div class="address-con">
            <span>广西</span>
            <span>柳州市</span>
            <span>鱼峰区</span>
            <span>麒麟街道</span>
            <span class="info">柳州职业技术学院</span>
          </div>
          <div class="address-action">
            <span class="modify">修改</span>
          </div>
        </div>
        <div class="address-info-solt"></div>
      </div>
      <div class="address-item">
        <div class="add-desc">
          <span class="iconfont icon-jia"></span>
          <span class="text">添加新地址</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.address-detail {
  .address-header {
    margin-bottom: 20px;

    .text {
      line-height: 20px;
      color: #333;
      font-size: 18px;
    }
  }

  .address-list {
    .address-item {
      display: inline-block;
      width: 268px;
      height: 178px;
      margin: 0 17px 20px 0;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      position: relative;
      vertical-align: top;
      transition: all .4s ease;

      .address-info {
        padding: 15px 24px 0;
        line-height: 22px;
        color: #757575;

        .name {
          font-size: 18px;
          color: #333;
          line-height: 30px;
          margin-bottom: 10px;
        }

        .tel {
          line-height: 22px;
          color: #757575;
        }

        .address-con {
          line-height: 22px;
          color: #757575;

          span {
            display: inline-block;
            margin-right: 3px;
            word-wrap: break-word;

            .info {
              width: 100%;
            }
          }
        }

        .address-action {
          text-align: right;
          position: absolute;
          right: 24px;
          bottom: 10px;
          opacity: 0;

          .modify {
            margin-left: 10px;
            line-height: 22px;
            color: #ff6700;
            font-size: 14px;
          }
        }
      }

      .add-desc {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        color: #b0b0b0;

        .iconfont {
          display: block;
          width: 30px;
          height: 30px;
          margin: 0 auto 8px;
          font-size: 30px;
          line-height: 30px;
          background-color: #e0e0e0;
          border-radius: 17px;
          text-align: center;
          transition: all .4s ease;
          color: #fff;
        }

        .text {
          font-size: 14px;
        }
      }

      // .address-info-solt {}

      &:hover {
        border-color: #b0b0b0;

        .address-action {
          opacity: 1;
        }

        .iconfont {
          color: #b0b0b0;
        }
      }
    }

    .active {
      border-color: #ff6700;

      .address-action {
        opacity: 1 !important;
      }

      &:hover {
        border-color: #ff6700;
      }
    }
  }
}
</style>
