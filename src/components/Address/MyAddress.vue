<template>
  <div class="address_box_big">
    <div class="address_select_title hide">
      <span class="gray">选择省份/自治区</span>
    </div>
    <div class="address_list hide">
      <span>北京</span>
      <span>天津</span>
      <span>河北</span>
      <span>山西</span>
      <span>内蒙古</span>
      <span>辽宁</span>
      <span>吉林</span>
      <span>黑龙江</span>
      <span>上海</span>
      <span>江苏</span>
      <span>浙江</span>
      <span>安徽</span>
      <span>福建</span>
      <span>江西</span>
      <span>山东</span>
      <span>河南</span>
      <span>湖北</span>
      <span>湖南</span>
      <span>广东</span>
      <span>广西</span>
      <span>海南</span>
      <span>重庆</span>
      <span>四川</span>
      <span>贵州</span>
      <span>云南</span>
      <span>西藏</span>
      <span>陕西</span>
      <span>甘肃</span>
      <span>青海</span>
      <span>宁夏</span>
      <span>新疆</span>
    </div>
    <div class="edit_address">
      <div class="address_select">
        <div class="address_select_box">
          <div class="con ">
            <div class="search_address">
              <span class="iconfont icon-sousuo1"></span>
              <div class="search_address_input">
                <input type="text" placeholder="输入街道、乡镇、小区或商圈名称">
              </div>
            </div>
          </div>
          <div class="oper_box">
            <span class="oper_text">手动选择地址 ></span>
            <span class="oper_text hide">搜索地址快速定位 ></span>
          </div>
        </div>
      </div>
      <div class="address_box ">
        <div class="title">我的收货地址</div>
        <div class="noy_login">
          现在<a href="#">登录</a>，可根据收货地址快速定位
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.address_box_big {
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

    .gray {
      line-height: 30px;
      margin-right: 5px;
      color: #757575;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .address_list {
    padding: 20px 0 14px 0;
    border-bottom: 1px solid #e3e3e3;

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
  .edit_address {
    min-height: 350px;

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
              top: 0;
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
    }
  }
}
</style>
