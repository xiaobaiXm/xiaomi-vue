<template>
  <div class="main" style="z-index: 999;">
    <div class="main-mask"></div>
    <div class="main-box">
      <div class="main-content">
        <div class="normal-dialog-wrapper">
          <div class="dialog">
            <div class="dialog-body">
              <div class="inner">
                <div class="mag">
                  {{ msg }}
                </div>
              </div>
            </div>
            <div class="dialog-footer">
              <button @click="shut" class="btn btn-primary">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  msg: string
}>()

const emit = defineEmits(['shutMsg'])

const shut = (): void => {
  emit('shutMsg')
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background-color: #000;
  }

  .main-box {
    .main-content {
      .normal-dialog-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
        box-sizing: border-box;
        overflow: hidden;
        outline: none;

        .dialog {
          position: relative;

          .dialog-body {
            padding: 30px 20px 20px;

            .inner {
              margin: 50px 10px;
              font-size: 26px;
              text-align: center;
            }
          }

          .dialog-footer {
            height: 80px;
            padding: 20px 0;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            background-color: #f5f5f5;

            button {
              margin: 0 7px;
              width: 160px;
              height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
