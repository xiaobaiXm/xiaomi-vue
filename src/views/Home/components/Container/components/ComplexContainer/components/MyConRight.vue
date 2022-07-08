<template>
  <div class="con_right">
    <div>
      <ul :class="flag == index ? 'show' : 'hide'" v-for="(conItem, index) in container" :key="index">
        <div v-for="item in conItem.containerChild" :key="item.containerId">
          <li class="hover_List_up">
            <a href="#">
              <div class="img">
                <img v-lazy="item.containerImgUrl" alt="">
              </div>
              <h3 class="title">{{ item.containerName }}</h3>
              <p class="describe">{{ item.containerDesc }}</p>
              <p class="price">
                <span class="num">
                  {{ item.containerPrice }}元
                </span>
                <span v-if="item.containerOldPrice && !'null'" class="old_price">{{ item.containerOldPrice }}元</span>
              </p>
            </a>
          </li>
        </div>
        <!-- <div>
          <li id="go_hot" class="hover_List_up">
            <a href="#" class="go_a_hot">
              <section class="move">
                <h3 class="godd_title">米家全自动波轮洗衣机8kg
                </h3>
                <span class="price">799元</span>
                <span class="good_img">
                  <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b649a329983ad590fde607472f73e55a.jpg?thumb=1&w=125&h=125&f=webp&q=90"
                    alt="">
                </span>
              </section>
            </a>
          </li>
        </div> -->
        <div>
          <li id="go_hot" class="hover_List_up">
            <a href="#" class="go_a_hot">
              <section class="move">
                <h3 class="title">浏览更多</h3>
                <span class="text">{{ conItem.containerTitle }}</span>
                <span class="iconfont icon-youjiantou1"></span>
              </section>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { IContainerChild } from '@/store/Home/Container/Type/Container'
const instance = getCurrentInstance()

let flag = ref<number | string>(0)

instance?.proxy?.$Bus.on('headerIndexChange', (index): void => {
  console.log(index)
  flag.value = index as number | string
})

defineProps<{
  container: IContainerChild
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

              .godd_title {
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
