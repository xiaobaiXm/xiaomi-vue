<template>
  <div class="main" style="z-index: 999;" v-if="flag">
    <div class="main-mask" @click="flag = false"></div>
    <div class="main-box">
      <div class="main-content">
        <div class="normal-dialog-wrapper">
          <div class="dialog-wrapper-title">
            <h3 class="title">免邮凑单区</h3>
            <a href="javascript:;" @click="flag = false" class="close"><span class="iconfont icon-close"></span></a>
          </div>
          <div class="dialog-wrapper-container">
            <div class="tab clearfix">
              <a href="javascript:;" :class="area === 0 ? 'active' : ''" @click="area = 0">0-50元</a>
              <a href="javascript:;" :class="area === 1 ? 'active' : ''" @click="area = 1">50元以上</a>
            </div>
            <div class="tab-con">
              <ul class="clearfix" :class="area === 0 ? 'active' : ''">
                <li>
                  <a href="javascript:;" class="img"><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a0a2d0e19b518c87e8157c58388a7f21.jpg?thumb=1&w=75&h=75&f=webp&q=90"
                      alt=""></a>
                  <div class="con">
                    <h4>手机屏幕保护膜 高透膜2片装</h4>
                    <p class="desc">手感顺滑，曲面贴合，高清高透，疏油疏水</p>
                    <p class="price">29</p>
                    <a href="javascript:;" class="add-cart"><span class="iconfont icon-jiagouwuche"></span></a>
                  </div>
                </li>
              </ul>
              <ul class="clearfix" :class="area === 1 ? 'active' : ''">
                <li>
                  <a href="javascript:;" class="img"><img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a0a2d0e19b518c87e8157c58388a7f21.jpg?thumb=1&w=75&h=75&f=webp&q=90"
                      alt=""></a>
                  <div class="con">
                    <h4>手机屏幕保护膜 高透膜5555片装</h4>
                    <p class="desc">手感顺滑，曲面贴合，高清高透，疏油疏水</p>
                    <p class="price">29</p>
                    <a href="javascript:;" class="add-cart"><span class="iconfont icon-jiagouwuche"></span></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="dialog-wrapper-footer clearFix">
            <a href="javascript:;" class="link">包邮政策></a>
            <div class="action-content">
              <div class="total">
                <p class="total-now">
                  合计： <span>¥ {{ store.totalPrice }}</span>
                </p>
                <p class="total-next">
                  再购
                  <span>{{ store.difference }}元</span>
                  包邮
                </p>
              </div>
              <a href="javascript:;" class="btn">完成</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, inject } from 'vue'
import { useCartsStore } from '@/store/carts'

const flag = inject<Ref<boolean>>('gatherSingleFlag', ref(false))
let area = ref<number>(0)

const store = useCartsStore()

</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background-color: #000;
  }

  .main-box {
    .main-content {
      .normal-dialog-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 762px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
        box-sizing: border-box;
        overflow: hidden;
        outline: none;

        .dialog-wrapper-title {
          text-align: center;
          position: relative;
          height: 32px;
          padding: 14px 20px;
          background-color: #f5f5f5;

          .title {
            margin: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 32px;
            color: #424242;
          }

          .close {
            position: absolute;
            top: 14px;
            right: 14px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #757575;
            cursor: pointer;
            transition: all .2s;
            z-index: 10;
            border-radius: 15px;

            &:hover {
              background-color: rgb(229, 57, 53);

              span {
                color: #fff !important;
              }
            }
          }
        }

        .dialog-wrapper-container {
          position: relative;
          max-height: 400px;
          padding: 0 44px 20px;
          margin-bottom: 20px;

          .tab {
            text-align: center;
            border-bottom: 1px solid #e0e0e0;
            margin-top: 10px;

            a {
              position: relative;
              display: inline-block;
              color: rgba(0, 0, 0, .54);
              width: 24%;
              line-height: 40px;
              font-size: 16px;

              &:hover {
                color: rgba(0, 0, 0, .54) !important;
              }

              &::after {
                content: "";
                width: 48px;
                height: 2px;
                background: #f56b02;
                position: absolute;
                bottom: 0;
                left: 50%;
                margin-left: -24px;
                display: none;
              }
            }

            .active {
              color: #ff6700;

              &:hover {
                color: #ff6700 !important;
              }

              &::after {
                display: block;
              }
            }
          }

          .tab-con {
            max-height: 400px;
            overflow: auto;

            ul {
              display: none;
              margin: 20px 0 0 0;
              padding: 0;

              li {
                width: 50%;
                float: left;
                height: 80px;
                list-style: none;
                margin-bottom: 30px;
                position: relative;

                .img {
                  float: left;
                  width: 100px;

                  img {
                    width: 80px;
                  }
                }

                .con {
                  margin-left: 120px;
                  width: 190px;

                  h4 {
                    color: #3d3d3d;
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: 400;
                  }

                  .desc {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-top: 6px;
                    color: rgba(99, 99, 99, .67);
                  }

                  .price {
                    margin-top: 10px;
                    color: #ff6b00;
                    font-size: 14px;
                  }

                  .add-cart {
                    position: absolute;
                    bottom: 0;
                    right: 20px;
                    width: 40px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    font-size: 20px;

                    .iconfont {
                      font-size: 20px;
                    }
                  }
                }
              }
            }

            .active {
              display: block;
            }
          }
        }

        .dialog-wrapper-footer {
          position: relative;
          background-color: #f5f5f5;
          height: 40px;
          text-align: left;
          padding: 20px;
          border-top: none;

          .link {
            display: inline-block;
            margin: 10px 0 0 10px;
            color: rgba(99, 99, 99, .67);
          }

          .action-content {
            float: right;
            text-align: left;

            .total {
              float: left;
              font-size: 16px;

              p {
                text-align: right;
                margin: 0;
                color: #3d3d3d;

                span {
                  color: #ff6700;
                  margin: 0 3px;
                }
              }
            }

            .free-text {
              float: left;
              line-height: 40px;
            }

            .btn {
              display: inline-block;
              width: 158px;
              height: 38px;
              padding: 0;
              margin: 3px 7px 0 27px;
              border: 1px solid #ff6700;
              ;
              font-size: 14px;
              line-height: 38px;
              text-align: center;
              background: #ff6700;
              color: #fff;
              cursor: pointer;
              transition: all .4s;
            }
          }
        }
      }
    }
  }
}
</style>
