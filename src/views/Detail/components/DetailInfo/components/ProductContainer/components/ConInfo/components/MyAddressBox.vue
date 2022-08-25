<template>
  <div class="address_box">
    <div class="product_address">
      <span class="iconfont icon-dizhi"></span>
      <div class="address_con">
        <div class="address">
          <span>{{ addressInfo[0]? addressInfo[0]: "北京" }}</span>
          <span>{{ addressInfo[1]? addressInfo[1]: "北京市" }}</span>
          <span>{{ addressInfo[2]? addressInfo[2]: "海淀区" }}</span>
          <span>{{ addressInfo[3]? addressInfo[3]: "清河街道" }}</span>
          <a href="JavaScript:;" class="modify" @click="addressFlag = true">修改</a>
        </div>
        <div class="spot">
          <span>有现货</span>
        </div>
      </div>
    </div>
    <teleport to='body'>
      <MyAddress @sendAddressInfo="getAddressInfo" @shutAddress="addressFlag = false" :bigFlag="addressFlag" :top="'50%'" :left="'50%'" :transform="'translate(-50%, -50%)'"></MyAddress>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

let addressFlag = ref<boolean>(false)
let addressInfo = reactive<string[]>([])

const getAddressInfo = (addressInfos:string[]):void => {
  addressInfos.forEach((item, index):void => {
    addressInfo[index] = item
  })
}
</script>

<style lang="less" scoped>
.address_box {
  margin: 20px 0;

  .product_address {
    position: relative;
    width: 640px;
    height: 104px;
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    padding: 30px 50px;

    .iconfont {
      position: absolute;
      left: 20px;
      top: 26px;
      font-size: 20px;
      color: #999;
    }

    .address_con {
      .address {
        span {
          margin-right: 14px;
          color: #333;
          font-size: 14px;
        }

        .modify {
          color: #ff6700;
        }
      }

      .spot {
        span {
          color: #ff6700;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
