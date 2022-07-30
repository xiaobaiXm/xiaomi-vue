<template>
  <div>
    <teleport to='body'>
      <transition name="fade">
        <div class="video-popup" style="z-index:10000;">
          <div class="popup-modal"></div>
          <div class="popup-box">
            <div class="popup-content">
              <div class="video-wrapper" style="width:880px;">
                <div class="dialog" aria-modal="true">
                  <div class="dialog-header">
                    <span class="dialog-title">{{ title }}</span>
                  </div>
                  <a href="javascript:;" class="dialog-header-btn" @click="cutVideoInfo">
                    <i class="btn iconfont icon-close"></i>
                  </a>
                  <div class="dialog-body">
                    <div class="dialog-inner">
                      <div class="video-player">
                        <div class="video-body-wrapper">
                          <div class="video-box" @click="playFlag = !playFlag">
                            <video :src="link" preload="none" autoplay ref="video"></video>
                          </div>
                          <div class="video-loading hide">
                            <img src="https://hd.mi.com/x/03021d/img/loading.gif" alt="正在加载...">
                          </div>
                          <div class="video-play-btn" v-if="!playFlag" @click="playFlag = !playFlag"></div>
                          <div class="video-control clearfix">
                            <div class="video-progress">
                              <div class="video-progress-loaded" style="width:0%;"></div>
                              <div class="video-progress-played" style="width:0%;"></div>
                              <div class="video-progress-pointer" style="left:0%;"></div>
                            </div>
                            <div class="control-item control-btns">
                              <span class="control-btn play" v-if="!playFlag" @click="play"></span>
                              <span class="control-btn pause" v-else @click="pause"></span>
                            </div>
                            <div class="control-item control-items">
                              <span class="cur">00:00</span>
                              <span class="seq">/</span>
                              <span class="dur">100:100</span>
                            </div>
                            <div class="control-item control-full-screen">
                              <span class="control-btn full"></span>
                            </div>
                            <div class="control-item control-volume">
                              <span class="control-btn" :class="volume === 0 ? 'mute' : ''"></span>
                              <div class="volume-progress">
                                <div class="volume-progress-current" style="width: 0%;"></div>
                                <div class="volume-pointer" style="left:0%;"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  title: string
  link: string
}>()

const video = ref(null)
let playFlag = ref<boolean>(true)
let volume = ref<number>(50)

const emit = defineEmits(['cutVideoInfo'])
const cutVideoInfo = (): void => {
  emit('cutVideoInfo', false)
}

const play = (): void => {
  playFlag.value = !playFlag.value
}

const pause = (): void => {
  playFlag.value = !playFlag.value
}

</script>

<style lang="less" scoped>
.video-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .popup-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
  }

  .popup-box {
    .popup-content {
      .video-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
        box-sizing: border-box;
        overflow: hidden;

        .dialog {
          position: relative;

          .dialog-header {
            position: relative;
            padding: 14px 20px;
            line-height: 32px;
            background-color: #f5f5f5;

            .dialog-title {
              font-size: 18px;
              font-weight: 400;
              color: #424242;
              vertical-align: middle;
            }
          }

          .dialog-header-btn {
            position: absolute;
            right: 14px;
            top: 14px;
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #757575;
            cursor: pointer;
            -webkit-transition: all .2s;
            transition: all .2s;
            z-index: 10;
            border-radius: 15px;

            .btn {
              font-size: 18px;
              font-weight: 500;
            }

            &:hover {
              background-color: rgb(229, 57, 53);

              .bnt {
                color: #fff !important;
              }
            }
          }

          .dialog-body {
            background-color: #000;

            .dialog-inner {
              .video-player {
                width: 100%;
                height: 100%;

                .video-body-wrapper {
                  position: relative;
                  background-color: #000;
                  overflow: hidden;

                  .video-box {
                    width: 100%;
                    height: 100%;

                    video {
                      display: block;
                      width: 100%;
                      height: 100%;
                    }
                  }

                  .video-loading {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 140px;
                    height: 140px;
                    transform: translate3d(-50%, -50%, 0);
                    cursor: pointer;

                    img {
                      display: block;
                      width: 100%;
                      height: 100%;
                    }
                  }

                  .video-play-btn {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 90px;
                    height: 90px;
                    margin-top: -45px;
                    margin-left: -45px;
                    cursor: pointer;
                    z-index: 2;
                    background: url('https://hd.mi.com/f/zt/hd/miplayer2/images/big_play_btn.png') no-repeat;
                  }

                  .video-control {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 50px;
                    transition: all .3s;
                    transform: translate3d(0, 30%, 0);
                    z-index: 3;
                    background: rgba(0, 0, 0, .6);
                    opacity: 0;

                    .control-btn {
                      display: block;
                      width: 20px;
                      height: 20px;
                      background-image: url('https://hd.mi.com/f/zt/hd/miplayer2/images/btns.png');
                      background-repeat: no-repeat;
                      transition: background .3s;
                      overflow: hidden;
                      cursor: pointer;
                    }

                    .video-progress {
                      width: 100%;
                      height: 4px;
                      background-color: rgba(51, 51, 51, .6);
                      cursor: pointer;
                      position: relative;
                      z-index: 2;

                      .video-progress-loaded {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 4px;
                        background-color: #5c5c5c;
                        background-color: rgba(92, 92, 92, .6);
                        z-index: 1;
                      }

                      .video-progress-played {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 4px;
                        background-color: #ff6a03;
                        z-index: 2;
                      }

                      .video-progress-pointer {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        transform: translate3d(0, -50%, 0);
                        z-index: 8;
                        background: #fff;
                        cursor: pointer;
                      }
                    }

                    .control-btns {
                      float: left;
                      width: 20px;
                      margin-left: 30px;
                      margin-top: 13px;

                      .play {
                        background-position: center 0;
                      }

                      .pause {
                        background-position: center -20px;
                      }
                    }

                    .control-items {
                      float: left;
                      margin-left: 30px;
                      line-height: 46px;
                      color: #fff;
                      font-family: sans-serif;
                      font-size: 14px;

                      .seq {
                        margin: 0 0.2em;
                        font-style: normal;
                        font-family: sans-serif;
                      }
                    }
                  }

                  .control-full-screen {
                    float: right;
                    margin: 13px 20px 0 20px;

                    .full {
                      background-position: center -100px;
                    }
                  }

                  .control-volume {
                    float: right;
                    width: 140px;
                    height: 20px;
                    margin-top: 13px;
                    transition: all .5s;
                    overflow: hidden;

                    .control-btn {
                      float: left;
                      margin-right: 10px;
                      background-position: center -40px;
                    }

                    .mute {
                      background-position: center -80px;
                    }

                    .volume-progress {
                      float: left;
                      position: relative;
                      width: 100px;
                      height: 4px;
                      margin-top: 8px;
                      border-radius: 2px;
                      background-color: #2c2c2c;
                      cursor: pointer;

                      .volume-progress-current {
                        width: 100%;
                        height: 4px;
                        background-color: #ff6a03;
                        border-radius: 2px 0 0 2px;
                      }

                      .volume-pointer {
                        width: 10px;
                        height: 10px;
                        position: absolute;
                        left: 0;
                        top: -3px;
                        border-radius: 50%;
                        z-index: 8;
                        background: #fff;
                        cursor: pointer;
                      }
                    }
                  }

                  .video-control-active {
                    opacity: 1;
                    transform: translateZ(0);
                  }
                }
              }
            }

            &:hover {
              .video-control {
                opacity: 1 !important;
                transform: translateZ(0) !important;
              }
            }
          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
