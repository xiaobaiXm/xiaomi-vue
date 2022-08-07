<template>
  <div class="top_bar_info">
    <span class="user">
      <router-link to="/" class="user-name">
        <span class="name">青菜</span>
        <span class="iconfont icon-downforward"></span>
        <div class="user-menu-wrapper">
          <ul class="user-menu">
            <li>
              <router to="" class="user_menu_info">个人中心</router>
            </li>
            <li>
              <router to="" class="user_menu_info">评价晒单</router>
            </li>
            <li>
              <router to="" class="user_menu_info">我的喜欢</router>
            </li>
            <li>
              <router to="" class="user_menu_info">小米账户</router>
            </li>
            <li>
              <router to="/" class="user_menu_info">退出登录</router>
            </li>
          </ul>
        </div>
      </router-link>
    </span>
    <span class="sep"></span>
    <span class="message"><a href="#">消息通知</a></span>
    <span class="sep"></span>
    <router-link to="" class="link-order">我的订单</router-link>
  </div>
</template>

<script setup lang="ts">
import '@/style/Home/Header.user.less'

</script>

<style lang="less" scoped>
.top_bar_info {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;

  >.sep {
    display: inline-block;
    position: absolute;
    top: 13px;
    width: 1px;
    height: 16px;
    background-color: #424242;
  }

  .user-active {
    background-color: #fff;
    color: #424242;
  }

  .user {
    position: relative;
    width: 110px;
    padding: 0;
    white-space: nowrap;
    float: left !important;

    .user-name {
      position: relative;
      z-index: 5;
      display: block;
      width: 110px;
      height: 40px;
      text-align: center;
      transition: all .3s;

      .iconfont {
        font-size: 16px;
        margin-left: 4px;
        vertical-align: bottom;
      }

      &:hover {
        background-color: #fff;
      }
    }

    .user-menu-wrapper {
      position: absolute;
      left: 0;
      top: 40px;
      z-index: 3;
      overflow: hidden;
      transition: height .3s;
      background: #fff;
      box-shadow: 0 2px 10px rgb(0 0 0 / 15%);

      .user-menu {
        display: block;
        width: 110px;
        margin: 0;
        padding: 7px 0;
        list-style-type: none;

        li {
          cursor: pointer;

          .user_menu_info {
            display: block;
            padding: 3px 30px;
            line-height: 2;
            transition: all .2s;
            color: #424242;

            &:hover {
              background-color: #e0e0e0;
            }
          }
        }
      }
    }

    &:hover .user-menu-wrapper {
      height: 164px;
    }
  }

  .message {
    float: left;
    padding: 0 10px;
  }

  .link-order {
    width: 70px;
    padding: 0 10px;
    text-align: center;
  }
}
</style>
