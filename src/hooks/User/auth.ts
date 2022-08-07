export const auth = () => {
  if (localStorage.getItem('TOKEN')) {
    return true
  } else {
    return false
  }
}
