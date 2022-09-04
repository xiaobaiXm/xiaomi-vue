import { ref } from 'vue'

export let flag = ref<number>(-1)
// eslint-disable-next-line no-undef
let timer: null | NodeJS.Timeout = null

export const joinCart = (index:number): void => {
  flag.value = index
  timer = setTimeout(() => {
    flag.value = -1
    clearInterval(Number(timer))
  }, 1500)
}
