export const goBack = ():void => {
  const timeGoBack = setInterval(() => {
    let top = document.documentElement.scrollTop
    document.documentElement.scrollTop = top -= 25
    if (top <= 0) {
      clearInterval(timeGoBack)
    }
  }, 5)
}
