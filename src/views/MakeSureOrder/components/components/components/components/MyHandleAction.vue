<template>
  <div class="handle-action">
    <div class="operating-button">
      <a href="javaceript:;" @click="settlement" class="btn btn-primary">立即下单</a>
      <router-link to="/cart" class="btn btn-return">返回购物车</router-link>
    </div>
  </div>
    <teleport to='body'>
    <MyMessageBox v-if="error.flag" :msg="error.msg" @shutMsg="shutMsg"></MyMessageBox>
  </teleport>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useUserOrderStore } from '@/store/User/Order'
import { IOrder } from '@/model/Order'
import { IError } from '@/model/Error'

const router = useRouter()
const instance = getCurrentInstance()
const store = useUserOrderStore()

let error = reactive<IError>({
  flag: false,
  msg: ''
})

let addressFlag = ref<boolean>(false)
let orderInfo = reactive<IOrder>({
  addressId: 0,
  productInfo: [],
  freight: 0,
  total: 0,
  totalPrice: 0
})

instance?.proxy?.$Bus.on('sendOrderAddressInfo', (addressId):void => {
  orderInfo.addressId = addressId as number
  addressFlag.value = true
})

const settlement = ():void => {
  orderInfo.productInfo = store.orderProductInfo
  orderInfo.freight = store.freight
  orderInfo.totalPrice = store.totalPrice
  orderInfo.total = store.totalCount
  if (addressFlag.value) {
    try {
      store.postCreateOrder(orderInfo)
    } catch (err) {

    }
  } else {
    error.flag = true
    error.msg = '请选择地址'
  }
}

const shutMsg = ():void => {
  error.flag = false
  error.msg = ''
}
</script>

<style lang="less" scoped>
.handle-action {
  float: right;

  .operating-button {
    .btn {
      display: inline-block;
      width: 158px;
      height: 38px;
      padding: 0;
      border: 1px solid #b0b0b0;
      font-size: 14px;
      line-height: 38px;
      text-align: center;
      color: #b0b0b0;
      transition: all .4s;
    }

    a {
      float: right;
      margin-left: 30px;
      vertical-align: top;
    }

    .btn-primary {
      background: #ff6700;
      border-color: #ff6700;
      color: #fff;

      &:hover {
        color: #fff !important;
      }
    }

    .btn-return {
      &:hover {
        color: #b0b0b0 !important;
        background-color: #fff;
      }
    }
  }
}
</style>
