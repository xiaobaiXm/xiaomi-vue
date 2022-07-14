<template>
  <div class="con_left">
    <ul>
      <li>
        <template v-if="!child">
          <a href="#" class="big hover_List_up">
            <img v-lazy="list.containerLeft[0].img" alt="">
          </a>
        </template>
        <template v-else>
          <a href="#" class="mini hover_List_up" v-for="item  in list.containerLeft" :key="item.id">
            <img v-lazy="item.img" alt="">
          </a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IContainerChildLeft } from '@/store/Home/Container/Type/Container'
import { computed } from 'vue'

const list = defineProps<{
  containerLeft: IContainerChildLeft
}>()

const child = computed(() => {
  let flag: boolean | string = ''
  if (Object.keys(list.containerLeft).length >= 2) {
    flag = true
  } else {
    flag = false
  }
  return flag
})

</script>

<style lang="less" scoped>
.con_left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;

  ul {
    li {
      transition: all .2s linear;

      .mini {
        display: block;
        width: 234px;
        height: 300px;
        transition: all .2s linear;

        img {
          width: 100%;
          height: 100%;
        }

        &:nth-child(1) {
          margin-bottom: 14px;
        }
      }

      .big {
        display: block;
        width: 234px;
        height: 614px;
        transition: all .2s linear;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
