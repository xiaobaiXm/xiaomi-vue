<template>
  <div class="site_info">
    <div class="container">
      <div class="logo ir">小米官网</div>
      <div class="info_text">
        <p class="sites">
          <a href="#">小米商城</a>
          <a href="#">MIUI</a>
          <a href="#">米家</a>
          <a href="#">米聊</a>
          <a href="#">多看</a>
          <a href="#">游戏</a>
          <a href="#">政企服务</a>
          <a href="#">小米天猫店</a>
          <a href="#">小米集团隐私政策</a>
          <a href="#">小米公司儿童信息保护规则</a>
          <a href="#">小米商城隐私政策</a>
          <a href="#">小米商城用户协议</a>
          <a href="#">问题反馈</a>
          <a href="#">Select Location</a>
        </p>
        <p class="sites">
          <a href="#">北京互联网法院法律服务工作站</a>
          <a href="#"> 中国消费者协会</a>
          <a href="#"> 北京市消费者协会</a>
        </p>
        <p>
          <a href="javascript:;" target="_blank" title="mi.com">mi.com</a> 京ICP证110507号
          <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow">京ICP备10046444号</a>
          <a rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134" target="_blank">京公网安备11010802020134号</a>
          <a href="//www.mi.com/culture-license/" target="_blank">京网文[2020]0276-042号</a>
          <br>
          <a href="//www.mi.com/medical/record/" target="_blank">（京）网械平台备字（2018）第00005号</a>
          <a href="//www.mi.com/medical/qualification/" target="_blank">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
          <a href="//www.mi.com/business-license/" target="_blank">营业执照</a>
          <a href="//www.mi.com/medical/list/" target="_blank">医疗器械质量公告</a>
          <br>
          <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e0c7d4cf3b7cd88de10196e30c92e020.png" target="_blank">增值电信业务许可证</a>&nbsp;网络食品经营备案 京食药网食备202010048 &nbsp;
          <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6859168166651511897f54fa1047fe3.png" target="_blank">食品经营许可证</a>
          <br>
          违法和不良信息举报电话：171-5104-4404&nbsp;<a href='https://www.mi.com/intellectual' target="_blank">知识产权侵权投诉</a>&nbsp;本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
      </div>
      <!-- info links -->
      <MyInfoLinksVue></MyInfoLinksVue>
    </div>
    <div class="slogan"></div>
  </div>
</template>

<script setup lang="ts">
import MyInfoLinksVue from './InfoLinks/MyInfoLinks.vue'
</script>

<style lang="less" scoped>
.site_info {
  height: 265px;
  padding: 30px 0;
  box-sizing: border-box;

  .container {
    position: relative;
    height: 156px;

    .logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 56px;
      height: 56px;
      margin-right: 20px;
      background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png)
        no-repeat;
      background-size: 56px;
    }

    .ir {
      text-indent: -9999px;
    }

    .info_text {
      margin-left: 77px;
      color: #b0b0b0;

      .sites {
        a {
          position: relative;
          margin: 0 3px;
          color: #757575;

          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            top: 3px;
            right: -5px;
            width: 1px;
            height: 12px;
            background-color: #b0b0b0;
          }

          &:last-child {
            &::after {
              content: none;
            }
          }
        }
      }
    }
  }

  .slogan {
    height: 19px;
    margin-top: 30px;
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png)
      no-repeat center 0;
  }
}
</style>
