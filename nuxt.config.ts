// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  css: [],
  devServer: {
    host: '0.0.0.0', // 监听所有地址，支持局域网访问
    port: 3000, // 可选：指定端口
    https: false // 如果不需要 HTTPS
  },
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 可选: pure_funcs
          drop_debugger: true
          // pure_funcs: ['console.log', 'console.debug'] // 删除特定函数
        },
        format: {
          comments: false // 删除所有注释
        }
      }
    }
  }
})
