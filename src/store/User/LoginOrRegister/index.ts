import { defineStore } from 'pinia'
import { UserLoginOrRegister } from '@/enums/store/user_store_name'

import { reqLogin } from '@/api/User'

import { getToken } from '@/utils/token'

export const useUserStore = defineStore(UserLoginOrRegister.Test, {
  state: () => {
    return {
      token: getToken() as string | null
    }
  },
  actions: {
    async login () {
      const res = await reqLogin({ username: '1', password: '1' })
    }
  },
  getters: {

  }
})
