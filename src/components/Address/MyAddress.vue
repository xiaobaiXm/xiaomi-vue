<template>
  <div class="address_box_big">
    <div class="address_select_title" v-show="addressFlag">
      <span v-if="addressArr[0] !== ''" @click="goBack(0)">{{ addressArr[0] }}</span>
      <span v-if="addressArr[1] !== ''" @click="goBack(1)">{{ addressArr[1] }}</span>
      <span v-if="addressArr[2] !== ''" @click="goBack(2)">{{ addressArr[2] }}</span>
      <span v-if="addressArr[3] !== ''" @click="goBack(3)">{{ addressArr[3] }}</span>
      <span class="gray" v-if="addressInfoFlag.provinces">选择省份/自治区</span>
      <span class="gray" v-if="addressInfoFlag.city">选择城市/地区</span>
      <span class="gray" v-if="addressInfoFlag.area">选择区县</span>
      <span class="gray" v-if="addressInfoFlag.address">选择配送区域</span>
    </div>
    <div class="edit_address">
      <div class="address_list" v-show="addressFlag">
        <template v-for="(item, index) in provinces" :key="item.id">
          <div v-if="chooseIndex === 0">
            <span @click="choice(item.name, index)">{{ item.name }}</span>
          </div>
        </template>
        <template v-for="(item, index) in city" :key="item.id">
          <div v-if="chooseIndex === 1">
            <span @click="choice(item.name, index)">{{ item.name }}</span>
          </div>
        </template>
        <template v-for="(item, index) in area" :key="item.id">
          <div v-if="chooseIndex === 2">
            <span @click="choice(item.name, index)">{{ item.name }}</span>
          </div>
        </template>
        <template v-for="(item, index) in address" :key="item.id">
          <div v-if="chooseIndex === 3">
            <span @click="choice(item.name, index)">{{ item.name }}</span>
          </div>
        </template>
      </div>
      <div class="address_select">
        <div class="address_select_box">
          <div class="con" v-show="!addressFlag">
            <div class="search_address">
              <span class="iconfont icon-sousuo1"></span>
              <div class="search_address_input">
                <input type="text" placeholder="输入街道、乡镇、小区或商圈名称">
              </div>
            </div>
          </div>
          <div class="oper_box">
            <span class="oper_text" v-show="!addressFlag" @click="addressFlag = true">手动选择地址></span>
            <span class="oper_text" v-show="addressFlag" @click="addressFlag = false">搜索地址快速定位 ></span>
          </div>
        </div>
      </div>
      <div class="address_box" v-show="!addressFlag">
        <div class="title">我的收货地址</div>
        <div class="noy_login" v-if="!auth()">
          现在<router-link to="/user/service/login">登录</router-link>，可根据收货地址快速定位
        </div>
        <div class="address-list" v-else>
          <div class="con">
            <ul class="clearfix">
              <template v-for="item in store.userAddressInfo.list" :key="item.id">
                <li @click="changeUserAddressInfo(item)">
                  <div class="address-title">{{ item.consignee }} {{ item.provinces }}</div>
                  <div class="address-desc">{{ item.provinces }} {{ item.city }} {{ item.area }} {{ item.address }}
                  </div>
                </li>
              </template>
            </ul>
            <div class="address-page">
              <span class="iconfont icon-xiangzuojiantou" @click="last"></span>
              <span class="pageNo">{{ store.userAddressInfo.pageNo }}</span> / {{ totalPage }}
              <span class="iconfont icon-xiangyoujiantou" @click="next"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useUserAddressStore } from '@/store/User/Address'
import { IAddressInfoFlag, IPage } from './Type'
import { IAddressInfo, ICity, IArea, IAddress } from '@/store/User/Address/Type/AddressInfo'
import { IAddressInfoList } from '@/store/User/Address/Type/UserAddressInfo'

import { auth } from '@/hooks/User/auth'

const store = useUserAddressStore()

const {
  pageSize,
  total
} = store.userAddressInfo

let addressFlag = ref<boolean>(false)
let addressInfoFlag = reactive<IAddressInfoFlag>({
  provinces: false,
  city: false,
  area: false,
  address: false
})
let chooseIndex = ref<number>(0)
let index = reactive<number[]>([0, 0, 0])
let addressArr = reactive<string[]>(['', '', '', ''])

let page = reactive<IPage>({
  pageNo: 1,
  pageSize: 4
})

if (auth()) {
  store.getUserAddressInfo(page)
}

watch(chooseIndex, (newValue) => {
  switch (newValue) {
    case 0:
      addressInfoFlag.provinces = true
      addressInfoFlag.city = false
      addressInfoFlag.area = false
      addressInfoFlag.address = false
      break
    case 1:
      addressInfoFlag.provinces = false
      addressInfoFlag.city = true
      addressInfoFlag.area = false
      addressInfoFlag.address = false
      break
    case 2:
      addressInfoFlag.provinces = false
      addressInfoFlag.city = false
      addressInfoFlag.area = true
      addressInfoFlag.address = false
      break
    case 3:
      addressInfoFlag.provinces = false
      addressInfoFlag.city = false
      addressInfoFlag.area = false
      addressInfoFlag.address = true
      break
  }
}, {
  immediate: true
})

watch(addressFlag, (newValue) => {
  if (newValue === true) {
    chooseIndex.value = 0
    addressArr = ['', '', '', '']
  }
}, {
  immediate: true
})

const provinces = computed((): IAddressInfo[] => {
  return store?.addressInfo
})
const city = computed((): ICity[] => {
  return provinces?.value[index[0]]?.children
})
const area = computed((): IArea[] => {
  return city?.value[index[1]]?.children
})
const address = computed((): IAddress[] => {
  return area?.value[index[2]]?.children
})

const totalPage = computed((): number => {
  return Math.ceil(total / pageSize)
})

const choice = (name: string, v: number): void => {
  addressArr[chooseIndex.value] = name
  if (chooseIndex.value === 3) {
    addressFlag.value = false
    return updateAddressInfo()
  }
  chooseIndex.value = chooseIndex.value !== 3 ? ++chooseIndex.value : 3
  index[chooseIndex.value - 1] = v
}

const goBack = (v: number): void => {
  if (chooseIndex.value > v || index[v]) {
    chooseIndex.value = v
    for (let idx = 0; idx < addressArr.length; idx++) {
      if (idx > chooseIndex.value) {
        addressArr[idx] = ''
        index[idx - 1] = 0
      }
    }
  }
}

const last = (): void => {
  page.pageNo = page.pageNo - 1
  if (page.pageNo < 1) {
    page.pageNo = totalPage.value
  }
  store.getUserAddressInfo(page)
}

const next = (): void => {
  page.pageNo = page.pageNo + 1
  if (page.pageNo > totalPage.value) {
    page.pageNo = 1
  }
  store.getUserAddressInfo(page)
}

const changeUserAddressInfo = (address: IAddressInfoList): void => {
  addressArr[0] = address.provinces
  addressArr[1] = address.city
  updateAddressInfo()
}

const emit = defineEmits(['sendAddressInfo'])

const updateAddressInfo = (): void => {
  emit('sendAddressInfo', addressArr)
}
onMounted((): void => {
  store.getAllAddressInfo()
})

</script>

<style lang="less" scoped>
.address_box_big {
  display: none;
  position: absolute;
  padding: 42px 20px 0 20px;
  top: 28px;
  right: 0;
  background: #fff;
  z-index: 99;
  width: 624px;
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 15%);

  .address_select_title {
    padding: 6px 0;
    border-bottom: 1px solid #e0e0e0;

    span {
      line-height: 30px;
      margin-right: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #ff6700;
      cursor: pointer;
    }

    .gray {
      line-height: 30px;
      margin-right: 5px;
      color: #757575;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .edit_address {
    min-height: 350px;

    .address_list {
      padding: 20px 0 14px 0;
      border-bottom: 1px solid #e3e3e3;

      div {
        display: inline-block;

        span {
          display: inline-block;
          margin-right: 14px;
          line-height: 30px;
          margin-bottom: 6px;
          color: #333;
          font-size: 14px;
          cursor: pointer;

          &:hover {
            color: #ff6700;
          }
        }
      }
    }

    .address_select {
      width: 582px;
      height: 106px;

      .address_select_box {
        position: static;
        top: 0;
        left: 0;
        width: 100%;

        .con {
          position: relative;
          margin: 0;
          padding: 0;
          border: 0;
          text-align: left;
          width: 575px;
          height: 42px;

          .search_address {
            .iconfont {
              position: absolute;
              top: 5px;
              left: 10px;
              font-size: 26px;
              color: #b2b2b2;
            }

            .search_address_input {
              input {
                width: 100%;
                padding: 10px 16px 10px 46px;
                color: #b0b0b0;
                font-size: 14px;
                transition: border-color .2s linear;
                border: 1px solid #e0e0e0;

                &:hover {
                  border-color: #b0b0b0;
                }
              }
            }
          }
        }

        .oper_box {
          padding: 20px 0;
          float: right;

          .oper_text {
            color: #b0b0b0;
            font-size: 14px;
            cursor: pointer;

            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }

    .address_box {
      .title {
        margin-bottom: 10px;
        color: #b0b0b0;
        font-size: 16px;
      }

      .noy_login {
        margin: 20px 0;
        color: #757575;
        font-size: 14px;
        text-align: center;

        a {
          color: #ff6700;
        }
      }

      .address-list {
        .con {
          ul {
            li {
              float: left;
              width: 50%;
              padding: 14px 0;
              line-height: 20px;
              cursor: pointer;
              transition: all .3s;

              .address-title {
                margin: 0 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }

              .address-desc {
                font-size: 12px;
                color: #b0b0b0;
                margin: 0 14px;
              }
            }
          }

          .address-page {
            text-align: center;
            margin-top: 10px;

            .pageNo {
              color: #ff6700;
            }

            .iconfont {
              margin: 0 14px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
