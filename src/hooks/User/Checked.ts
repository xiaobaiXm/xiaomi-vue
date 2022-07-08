import { ref } from 'vue'

let checked = ref<boolean>(false)

function changeChecked ():void {
  checked.value = !checked.value
}

export {
  checked,
  changeChecked
}
