export const auth = ():boolean => {
  if (localStorage.getItem('TOKEN')) {
    return true
  } else {
    return false
  }
}
