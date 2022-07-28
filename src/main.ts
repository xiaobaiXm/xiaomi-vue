import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import lazyPlugin from 'vue3-lazy'
import mitt from 'mitt'

// 样式
import '@/assets/style/base.css'

// 全局组件
import MyLoading from './components/Loading/MyLoading.vue'
import MyFixedSildebar from '@/components/Home/FixedSidebar/MyFixedSildebar.vue'
import MyBread from '@/components/Bread/MyBread.vue'
import MyGuessLike from '@/components/GuessLike/MyGuessLike.vue'

const pinia = createPinia()
const Mit = mitt()

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus:typeof Mit
  }
}

const app = createApp(App)

// 注册全局组件
app.component('MyFixedSildebar', MyFixedSildebar)
app.component('MyBread', MyBread)
app.component('MyGuessLike', MyGuessLike)
app.component('MyLoading', MyLoading)

// 图片懒加载
app.use(lazyPlugin, {
  loading: require('@/assets/images/lazy.png'),
  error: require('@/assets/images/lazy.png')
})

app.use(pinia)
app.use(router)

app.config.globalProperties.$Bus = Mit
app.mount('#app')
