<template>
  <div class="con_right">
    <div>
      <template v-for="(conItem, index) in containerRight" :key="index">
        <ul v-show="flag == index">
          <div v-for="item in conItem.groupChildren" :key="item.id">
            <li class="hover_List_up" @click="productDetail(item.productId)">
              <a href="javascript:;">
                <div class="img">
                  <img v-lazy="item.img" alt="">
                </div>
                <h3 class="title">{{ item.name }}</h3>
                <p class="describe">{{ item.desc }}</p>
                <p class="price">
                  <span class="num">
                    {{ item.price }}元
                  </span>
                  <span v-if="item.oldPrice && !null" class="old_price">{{ item.oldPrice }}元</span>
                </p>
              </a>
            </li>
          </div>
          <div v-if="conItem.groupMini.length > 0">
            <li id="go_hot" class="hover_List_up">
              <a href="javascript:;" class="go_a_hot">
                <section class="move">
                  <h3 class="good_title">{{ conItem.groupMini[0].name }}</h3>
                  <span class="price">{{ conItem.groupMini[0].price }}元</span>
                  <span class="good_img">
                    <img v-lazy="conItem.groupMini[0].img" alt="">
                  </span>
                </section>
              </a>
            </li>
          </div>
          <div>
            <li id="go_hot" class="hover_List_up">
              <a href="javascript:;" class="go_a_hot">
                <section class="move">
                  <h3 class="title">浏览更多</h3>
                  <span class="text">{{ conItem.groupTitle }}</span>
                  <span class="iconfont icon-youjiantou1"></span>
                </section>
              </a>
            </li>
          </div>
        </ul>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, inject } from 'vue'
import { IContainerChildRight } from '@/model/Container'
import { productDetail } from '@/hooks/Detail'

const flag = inject<Ref<number>>('containerFlag', ref(0))

defineProps<{
  containerRight: IContainerChildRight
}>()

</script>

<style lang="less" scoped>

.con_right {

  div {
    width: 1032px;

    ul {
      position: absolute;
      top: 0;
      left: 234px;

      >div {
        li {
          width: 234px;
          height: 300px;
          float: left;
          padding: 0;
          margin: 0 0 14px 21px;
          background-color: #fff;
          transition: all .2s linear;

          a {
            display: block;
            height: 100%;
            padding: 20px 0;
            text-align: center;
            box-sizing: border-box;

            .img {
              width: 160px;
              height: 160px;
              margin: 0 auto 18px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .title {
              margin: 0 10px 2px;
              color: #333;
              font-weight: 400;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }

            .describe {
              margin: 0 10px 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              font-size: 12px;
              color: #b0b0b0;
            }

            .price {
              margin: 0 10px 14px;

              .num {
                font-size: 14px;
                color: #ff6700;
              }

              .old_price {
                margin-left: 5px;
                font-size: 14px;
                text-decoration: line-through;
              }
            }

            &:hover {
              color: #b0b0b0 !important;
            }
          }
        }

        #go_hot {
          position: relative;
          height: 143px;
          padding-top: 50px;
          margin: 0 0;
          margin-left: 21px;
          transition: all .2s linear;

          .go_a_hot {
            display: block;
            width: 100%;
            padding: 0;

            .move {
              margin: 0 110px 0 30px;
              font-size: 18px;
              color: #333;

              .price {
                font-size: 12px;
                color: #ff6700;
              }

              h3 {
                // margin: -10px 110px 5px 30px;
                font-size: 14px;
                font-weight: 400;
              }

              .text {
                display: block;
                font-size: 12px;
                color: #757575;
              }

              .good_title {
                font-size: 14px;
              }

              .iconfont {
                position: absolute;
                right: 35px;
                top: 38px;
                width: 48px;
                height: 48px;
                font-size: 48px;
                color: #ff6700;
              }

              .good_img {
                position: absolute;
                right: 20px;
                top: 32px;
                width: 80px;
                height: 80px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }

            &:hover {
              color: #b0b0b0 !important;
            }

          }

          &:nth-child(1) {
            margin-bottom: 14px;
          }
        }
      }
    }
  }
}
</style>
