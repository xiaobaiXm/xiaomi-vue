<template>
  <div class="type_list">
    <ul>
      <li>
        <div class="address_choose">
          <span>收货地</span>
          <a href="javascript:void(0)">
            <span class="address_show">{{ addressArr[0] === '' ? '北京' : addressArr[0] }} {{ addressArr[1] === '' ? '北京市'
                : addressArr[1]
            }}</span>
          </a>
          <keep-alive>
            <MyAddress @sendAddressInfo="sendAddressInfo"></MyAddress>
          </keep-alive>
        </div>
      </li>
      <li>
        <a href="javascript:;" @click="changeFilterTag('promotion')">
          <span class="checked" :class="type.promotion ? 'active' : ''">
            <i class="iconfont icon-dagou"></i>
          </span>
          促销
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="changeFilterTag('installment')">
          <span class="checked" :class="type.installment ? 'active' : ''">
            <i class="iconfont icon-dagou"></i>
          </span>
          分期
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="changeFilterTag('available')">
          <span class="checked" :class="type.available ? 'active' : ''">
            <i class="iconfont icon-dagou"></i>
          </span>
          仅看有货
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, inject } from 'vue'

type IType ={
  promotion: boolean
  installment: boolean
  available: boolean
}

const type = inject<IType>('type', reactive({
  promotion: false,
  installment: false,
  available: false
}))

let addressArr = reactive<string[]>(['', ''])

const changeFilterTag = (typeName: string) => {
  switch (typeName) {
    case 'promotion':
      type.promotion = !type.promotion
      break
    case 'installment':
      type.installment = !type.installment
      break
    case 'available':
      type.available = !type.available
      break
  }
}

const sendAddressInfo = (address: string[]): void => {
  addressArr[0] = address[0]
  addressArr[1] = address[1]
}
</script>

<style lang="less" scoped>
.type_list {
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  line-height: 30px;

  ul {
    li {
      float: left;
      margin: 0;
      padding: 0;
      margin-left: 30px;
      font-size: 14px;

      .address_choose {
        color: #424242;

        span {
          display: inline-block;
          margin-right: 8px;
          height: 30px;
        }

        a {
          .address_show {
            position: relative;
            display: inline-block;
            background: #fff;
            border: 1px solid #e3e3e3;
            height: 14px;
            line-height: 14px;
            padding: 7px 14px;
            cursor: pointer;

            &::after {
              content: '';
              position: absolute;
              bottom: -6px;
              right: -6px;
              width: 0;
              height: 0;
              line-height: 0;
              overflow: hidden;
              font-size: 0;
              border-width: 6px;
              border-style: dashed dashed dashed solid;
              border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #a9a9a9;
              transform: rotate(45deg);
            }
          }
        }

        &:hover ::v-deep {
          .address_box_big {
            display: block;
          }
        }
      }

      a {
        color: #424242;
        transition: color .2s;
        box-sizing: border-box;

        .checked {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-right: 3px;
          border: 1px solid #e0e0e0;
          background-color: #fff;
          vertical-align: -2px;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          vertical-align: middle;

          i {
            visibility: hidden;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            color: #fff;
          }
        }

        .active {
          background-color: #ff6700;
          border-color: #ff6700;

          i {
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>
