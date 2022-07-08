<template>
  <div class="activity_box">
    <div class="flow_box">
      <span class="flow_tag">赠品一</span>
      <span class="flow_name">
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
      </span>
    </div>
    <div class="flow_box">
      <span class="flow_tag">赠品二</span>
      <span class="flow_name">
        <div class="tip">本组赠品可任选1种</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
        <div class="single">满1件赠价值299元小米尊享礼盒（保温杯+蓝牙音箱+台灯） 单品（黑色） 赠完即止</div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.activity_box {
  padding: 24px 0 0 0;
  width: 640px;
  border-bottom: 1px solid #b0b0b0;

  .flow_box {
    margin-bottom: 24px;

    .flow_tag {
      // display: inline-block;
      float: left;
      width: 80px;
      height: 25px;
      padding: 2px 0;
      line-height: 25px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      background-color: #ff6700;

    }

    .flow_name {
      display: inline-block;
      width: 430px;
      min-height: 26px;
      line-height: 19px;
      margin-left: 10px;
      color: #333;
      font-size: 14px;

      .tip {
        margin-bottom: 9px;
        line-height: 26px;
      }

      .single {
        display: inline-block;
        line-height: 26px;
      }
    }
  }
}
</style>
