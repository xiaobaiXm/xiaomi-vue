import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw, RouteMeta } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: defineAsyncComponent(() => import('@/views/Home/MyHome.vue')),
    meta: { showTypeNav: true, HeaderShow: true, FooterShow: true, FixedSildebar: true } as RouteMeta
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/MySearch.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSildebar: true } as RouteMeta
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/CateGory/MyCateGory.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSildebar: true } as RouteMeta
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail/MyDetail.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSildebar: true } as RouteMeta
  },
  {
    path: '/service',
    name: 'HelpCenter',
    component: () => import('@/views/HelpCenter/MyHelpCenter.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSildebar: true } as RouteMeta
  },
  {
    path: '/service/after',
    name: 'After',
    component: () => import('@/views/HelpCenter/AfterSalesPolicy/MyAfterSalesPolicy.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSildebar: true } as RouteMeta

  },
  {
    path: '/service/buy',
    name: 'Buy',
    component: () => import('@/views/ShoppingGuide/MyShoppingGuide.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSildebar: true } as RouteMeta

  },
  {
    path: '/cart',
    name: 'ShopCart',
    component: () => import('@/views/ShopCart/MyShopCart.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSildebar: true } as RouteMeta
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/LoginOrRegister/MyLogOrReg.vue'),
    meta: { HeaderShow: false, FooterShow: false, FixedSildebar: false } as RouteMeta,
    children: [
      {
        path: '/user/register',
        name: 'Register',
        component: () => import('@/views/LoginOrRegister/components/components/UserContainer/components/From/components/Register/MyRegister.vue')
      },
      {
        path: '/user/login',
        name: 'Login',
        component: () => import('@/views/LoginOrRegister/components/components/UserContainer/components/From/components/Login/MyLogin.vue')
      }
    ]
  },
  {
    path: '/make',
    name: 'Make',
    component: () => import('@/views/MakeSureOrder/MyMakeSureOrder.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSildebar: false, User: true } as RouteMeta
  }
]

export default routes
