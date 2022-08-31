<template>
  <div class="detail-section address-detail">
    <div class="fixed-header" v-show="fixedFlag">
      <div class="fixed-address-choose w">
        <a href="javascript:;" @click="choose" class="btn btn-primary choose-btn">选择该收货地址</a>
        <div class="address-title">
          <span class="address-desc">{{ store.address[0].consignee }}</span>
          <span class="address-desc">{{ store.address[0].phone }}</span>
          <span class="address-desc">{{ store.address[0].provinces }} {{ store.address[0].city }} {{
              store.address[0].area
          }}
            {{ store.address[0].address_detail }}</span>
        </div>
      </div>
    </div>
    <div class="address-header">
      <span class="text">收货地址</span>
    </div>
    <div class="address-list">
      <div class="address-item" @click="chooseAddress(item, index)" :class="active === index ? 'active' : ''"
        v-for="(item, index) in store.address" :key="item.id">
        <div class="address-info">
          <div class="name">{{ item.consignee }}</div>
          <div class="tel">131****3587</div>
          <div class="address-con">
            <span>{{ item.provinces }}</span>
            <span>{{ item.city }}</span>
            <span>{{ item.area }}</span>
            <span>{{ item.address }}</span>
            <span class="info">{{ item.address_detail }}</span>
          </div>
          <div class="address-action">
            <span class="modify">修改</span>
          </div>
        </div>
      </div>
      <div class="address-item">
        <div class="add-desc">
          <span class="iconfont icon-jia"></span>
          <span class="text">添加新地址</span>
        </div>
      </div>
      <div class="more-btn" @click="moreFlag = !moreFlag" v-if="store.address.length > 3">
        <span>{{ moreFlag ? '收起' : '显示' }}更多地址<span class="iconfont"
            :class="moreFlag ? 'icon-upforward' : 'icon-downforward'"></span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, onUnmounted } from 'vue'
import { useUserAddressStore } from '@/store/User/Address'
import { IAddressInfoList } from '@/model/UserAddressInfo'
import { goBack } from '@/hooks/BackTop'

const instance = getCurrentInstance()
const store = useUserAddressStore()
let moreFlag = ref<boolean>(false)
let fixedFlag = ref<boolean>(false)
let active = ref<number>(-1)

const chooseAddress = (item: IAddressInfoList, index: number): void => {
  instance?.proxy?.$Bus.emit('activeOrderAddressInfo', item)
  active.value = index
  sendAddressInfo(item.id)
}

const choose = (): void => {
  goBack()
  instance?.proxy?.$Bus.emit('activeOrderAddressInfo', store.address[0])
  active.value = 0
  sendAddressInfo(store.address[0].id)
}

const handleScroll = (): void => {
  if (document.documentElement.scrollTop > 500) {
    fixedFlag.value = true
  } else {
    fixedFlag.value = false
  }
}

const sendAddressInfo = (addressId:number | undefined): void => {
  instance?.proxy?.$Bus.emit('sendOrderAddressInfo', addressId)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="less" scoped>
.address-detail {
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    border-top: 1px solid #e0e0e0;
    background-color: #fff;
    box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
    z-index: 2;
    transition: all .3s;

    .fixed-address-choose {
      position: relative;

      .choose-btn {
        float: right;
      }

      .address-title {
        margin: 15px 0 0;
        line-height: 40px;
        color: #757575;

        .address-desc {
          display: inline-block;
          margin-right: 25px;
        }
      }
    }
  }

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

    .more-btn {
      margin-bottom: 30px;
      height: 50px;
      line-height: 50px;
      background-color: #eee;
      color: #424242;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
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
