// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw, RouteMeta } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/MyHome.vue'),
    meta: { showTypeNav: true, HeaderShow: true, FooterShow: true, FixedSlideBar: true } as RouteMeta
  },
  {
    path: '/search:keyword?',
    name: 'Search',
    component: () => import('@/views/Search/MySearch.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSlideBar: true } as RouteMeta
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/CateGory/MyCateGory.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSlideBar: true } as RouteMeta
  },
  {
    path: '/detail:productId?',
    name: 'Detail',
    component: () => import('@/views/Detail/MyDetail.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSlideBar: true } as RouteMeta
  },
  {
    path: '/service',
    name: 'HelpCenter',
    component: () => import('@/views/HelpCenter/MyHelpCenter.vue'),
    meta: { HeaderShow: true, FooterShow: true, FixedSlideBar: true } as RouteMeta
  },
  {
    path: '/service/after',
    name: 'After',
    component: () => import('@/views/HelpCenter/AfterSalesPolicy/MyAfterSalesPolicy.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSlideBar: true } as RouteMeta

  },
  {
    path: '/service/buy',
    name: 'Buy',
    component: () => import('@/views/ShoppingGuide/MyShoppingGuide.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSlideBar: true } as RouteMeta

  },
  {
    path: '/cart',
    name: 'ShopCart',
    component: () => import('@/views/ShopCart/MyShopCart.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSlideBar: true } as RouteMeta
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/LoginOrRegister/MyLogOrReg.vue'),
    meta: { HeaderShow: false, FooterShow: false, FixedSlideBar: false } as RouteMeta,
    children: [
      {
        path: 'service',
        name: 'Service',
        component: () => import('@/views/LoginOrRegister/components/components/UserContainer/components/From/MyFrom.vue'),
        children: [
          {
            path: 'register',
            name: 'Register',
            component: () => import('@/views/LoginOrRegister/components/components/UserContainer/components/From/components/Register/MyRegister.vue')
          },
          {
            path: 'login',
            name: 'Login',
            component: () => import('@/views/LoginOrRegister/components/components/UserContainer/components/From/components/Login/MyLogin.vue')
          }
        ]
      },
      {
        path: 'login/code',
        name: 'CodeLogin',
        component: () => import('@/views/LoginOrRegister/components/components/UserContainer/components/From/components/ScanCodeLogin/MyScanCodeLogin.vue')
      }
    ]
  },
  {
    path: '/make',
    name: 'Make',
    component: () => import('@/views/MakeSureOrder/MyMakeSureOrder.vue'),
    meta: { HeaderShow: false, FooterShow: true, FixedSlideBar: false } as RouteMeta
  }
]

export default routes
