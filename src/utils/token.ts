export const getToken = ():string | null => {
  return localStorage.getItem('TOKEN')
}
export const setToken = (token: string):void => {
  localStorage.setItem('TOKEN', token)
}
export const removeToken = ():void => {
  localStorage.removeItem('TOKEN')
}
