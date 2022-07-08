import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    HeaderSHow?: boolean,
    FooterSHow?: boolean,
    FixedSildebar?: boolean,
    User?:boolean,
  }
}
