import { defineStore } from 'pinia'
import { UserLoginOrRegister } from '@/enums/store/user_store_name'
import { reqLogin, reqRegister, reqUserInfo, reqVerifyName } from '@/api/User'
import { IRegisterOrLogin } from './Type/RegisterOrLogin'
import { getToken, setToken, removeToken } from '@/utils/token'
import { IUserInfo } from './Type/UserInfo'

export const useUserStore = defineStore(UserLoginOrRegister.Test, {
  state: () => {
    return {
      token: getToken() as string | null,
      userInfo: {} as IUserInfo,
      verifyFlag: true as boolean
    }
  },
  actions: {
    async login (user: IRegisterOrLogin):Promise<void> {
      const res = await reqLogin(user)
      if (res.code === 200) {
        setToken(res.data.token)
        this.getUserInfo()
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    logout ():void {
      removeToken()
    },
    async register (user: IRegisterOrLogin):Promise<void> {
      const res = await reqRegister(user)
      if (res.code !== 200) {
        return Promise.reject(new Error('false'))
      }
    },
    async verifyName (username:string):Promise<void> {
      const res = await reqVerifyName({ username })
      if (res.code === 200) {
        this.verifyFlag = true
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    async getUserInfo ():Promise<void> {
      const res = await reqUserInfo()
      if (res.code === 200) {
        this.userInfo = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {

  }
})
