<template>
  <div class="con_nav">
    <a href="#" class="nav_item">用户协议</a>
    <a href="#" class="nav_item">隐私政策</a>
    <a href="#" class="nav_item">帮助中心</a>
    <div class="rail"></div>
    <div class="language">中文(简体)<span class="iconfont icon-below-s"></span>
    </div>
    <div class="more">
      <ul>
        <li><span>中文(繁体)</span></li>
        <li><span>English</span></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.con_nav {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #838383;
  font-size: 14px;

  .nav_item {
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    line-height: 40px;
    color: #838383;
    font-weight: 400px;
    box-sizing: border-box;
    transition: all 0.3s;
  }

  .rail {
    display: inline-block;
    width: 0;
    height: 14px;
    margin: 0 10px;
    border-right: 1px solid #ddd;
  }

  .language {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s;

    .iconfont {
      font-size: 10px;
      vertical-align: middle;
    }
    .icon-deg {
      transform: rotateX(180deg);
    }

    &:hover {
      color: #ff6700;
      .more {
        display: block !important;
      }
    }
  }

  .more {
    display: none;
    position: absolute;
    top: 40px;
    right: 10px;
    width: 80px;
    height: 80px;
    background-color: #fff;

    ul {
      padding: 0;
      box-shadow: 0 5px 29px 0 hsl(0deg 0% 64% / 20%);
      border-radius: 2px;
      outline: none;
      box-sizing: border-box;
      cursor: pointer;

      li {
        display: flex;
        white-space: nowrap;
        align-items: center;
        padding: 9px 8px;
        text-align: center;
        transition: all 0.3s;

        span {
          flex: auto;
        }

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>
