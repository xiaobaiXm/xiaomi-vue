import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  // ...
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core'
      ],
      dts: 'src/auto-imports.d.ts'
    })
  ]
})
