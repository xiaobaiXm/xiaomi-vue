<template>
  <div class="footer-address" v-if="flag">
    <div class="selecter-address">
      <div class="address-name">{{ activeAddress.consignee }} {{activeAddress.phone}}</div>
      <div class="address-desc">
        <span class="info">{{ activeAddress.provinces }} {{ activeAddress.city }} {{ activeAddress.area }}
            {{ activeAddress.address_detail }}</span>
        <a href="javascript:;" @Click="changeAddress"> 修改</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'

import { IAddressInfoList } from '@/model/UserAddressInfo'

const instance = getCurrentInstance()
let activeAddress = reactive<IAddressInfoList>({})
let flag = ref<boolean>(false)

instance?.proxy?.$Bus.on('activeOrderAddressInfo', (item): void => {
  Object.assign(activeAddress, item)
  flag.value = true
})

const changeAddress = () => {
  console.log('a')
}
</script>

<style lang="less" scoped>
.footer-address {
  float: left;

  .selecter-address {
    .address-name {
      line-height: 20px;
      color: #424242;
    }

    .address-desc {
      line-height: 20px;
      color: #424242;

      a {
        color: #ff6700;
      }

    }
  }
}
</style>
