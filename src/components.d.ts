Components({
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue'],

  // allow auto import and register components
  include: [/\.vue$/, /\.vue\?vue/],

  dts: 'src/components.d.ts'
})
