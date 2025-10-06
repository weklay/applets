// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineNuxtConfig({
  app: {
    head: {
      title: '凤凰国际-kui',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wBY0OoIVtDqWVTP6qBTz+rZUc7p91DO6f9PzuntTs3pyk3N6YdNzekU////AE3N6S1Nzekj////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBc0eoIWtHqe1jQ6uxX0Or/Vc/q/1PP6v9Szun/UM7p/0/O6f9Ozen/Tc3p/03N6e9NzelcTc3pMk3N6e1NzenLTc3pRP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AX9LrMl3S69tb0er/WdHq/1fQ6v9W0Or/VM/q/1LP6v9Rzun/UM7p/0/N6f9Ozen/Tc3p/03N6f5NzelXTc3pOU3N6flNzen+Tc3pa////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGLT60Bg0+vxXtLr/1zR6v9a0er/WNDq/1bQ6v9Vz+r/U8/q/1LO6f9Qzun/T87p/07N6f9Nzen/Tc3p/03N6edNzekFTc3piE3N6f9Nzen4Tc3pIf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBl1OsjY9Pr8WHT6/9f0uv/XdLr/1vR6v9Z0Or/V9Dq/1XP6v9Uz+r/Us/q/1HO6f9Pzun/Ts3p/03N6f9Nzen/Tc3p/03N6SpNzekaTc3p/U3N6f9NzelsTc3pQ03N6Qr///8A////AP///wD///8A////AP///wD///8AZ9XsA2XU68pj1Ov/YdPr2l/S67td0uv/XNHq/1rR6v9Y0Or9VtDqvVTP6npTz+pcUc7pUVDO6WpPzumwTs3p+k3N6f9Nzen/Tc3pHf///wBNzenNTc3p/03N6WtNzemQTc3pq////wD///8A////AP///wD///8A////AP///wBo1expZtTr/2TU6/1i0+s7YNPrgV7S6/9c0er/WtHqtVnQ6ij///8A////AP///wD///8A////AP///wBOzekkTc3p6E3N6b5NzelDTc3pC03N6bhNzen/Tc3pN03N6cNNzen+Tc3pCP///wD///8A////AP///wD///8Aa9bsE2nV7Oxn1ez/ZdTre////wBh0+tuX9Lr/l3S63P///8A////AP///wD///8A////AP///wD///8A////AE/N6QNOzemtTc3pHk3N6aVNzekHTc3p7E3N6b1NzelXTc3p9k3N6Xn///8A////AP///wD///8A////AP///wBr1uyKatXsymjV7Ff///8A////AGLT66xg0+tp////AP///wD///8A////AP///wD///8A////AP///wD///8AT87pJE7N6RJNzemsTc3pYk3N6YNNzenUTc3pME3N6XNNzek6Tc3pM03N6Rz///8A////AP///wD///8AbtfsAmzW7JZq1uwB////AP///wBl1Os/Y9PrfP///wD///8A////AP///wD///8AV9DqBVXP6k5Uz+qWUs/qp1HO6TBPzulnTs3p3E3N6XJNzeluTc3phE3N6RtNzemBTc3pyU3N6fRNzen/Tc3p/U3N6Z5NzekB////AP///wBv1+w1bdbsOWvW7AVp1ewtZ9XsQGXU6wH///8A////AP///wD///8A////AFrR6kFY0OrbVtDq/1TP6u5Tz+o3Uc7pvVDO6cdPzukxTs3pH03N6SVNzekXTc3pK03N6Qb///8ATc3pAk3N6UVNzenPTc3p/03N6VL///8A////AG/X7F9u1+wGbNbsMWrW7M9o1exF////AP///wD///8A////AP///wBc0utTWtHq/FnQ6v9X0Or/Vc/qXlPP6rRSzulwUc7pOU/O6bVOzen6Tc3p/03N6f9NzenoTc3pdE3N6RZNzelMTc3pWU3N6Q1Nzem8Tc3pjP///wD///8AcNfsdP///wD///8A////AP///wD///8A////AP///wD///8AX9LrEV3S6+5b0er/WdHq/1jQ6t1W0OpBVM/qXVPP6lNRzulpUM7pU0/N6R5OzekHTc3pH03N6VxNzem9Tc3pkf///wBNzekrTc3pqE3N6SdNzel4////AP///wBx1+yOb9fsBv///wD///8A////AP///wD///8A////AP///wBg0+ttXtLr/1zR6v9a0er/WNDqilbQ6kf///8AU8/qclLO6c9Qzuk2////AP///wD///8A////AP///wBNzelcTc3pN////wBNzelXTc3pxU3N6Qb///8A////AHHY7Ydw1+wn////AP///wD///8A////AP///wD///8A////AGHT67hf0uv/XdLr/1vR6v9Z0eqYV9DqXFXP6jVUz+pgUs/qD////wD///8A////AP///wD///8A////AP///wBNzekS////AE3N6RhNzen/Tc3pT////wD///8Actjte3DX7Fb///8A////AP///wD///8A////AP///wD///8AYtPr0mDS6/9e0uv/XNHq/1rR6v9Y0Or5VtDq2FTP6n5Tz+oE////AP///wD///8A////AP///wD///8A////AP///wD///8ATc3pCk3N6f9Nzel/////AP///wBy2O1gcdfsnv///wD///8A////AP///wD///8A////AP///wBi0+vAYNPr/17S6/9c0uv/W9Hq0lnQ6o5X0OptVc/qNlPP6mFSzul7Uc7pEf///wD///8A////AP///wD///8A////AP///wBNzelWTc3p/03N6XT///8A////AHPY7RRx2O1w////AP///wD///8A////AP///wD///8A////AGPT66xh0+v/X9Lr/13S6/9b0er/WdHq/1jQ6v9W0Or7VM/qjlPP6kxRzunUUM7pB////wD///8A////AP///wD///8ATc3pPE3N6epNzen/Tc3pSP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AZNTrv2LT6/9g0+v/XtLr/1zR6v9a0erkWNDqmVfQ6m1Vz+pqU8/qOVLO6URQzukE////AP///wD///8ATc3pME3N6b5Nzen+Tc3p/03N6fBNzekK////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGfV7Bdl1Ov2Y9Pr/2HT6/9f0uv/XdLr/1vR6uRZ0er4V9Dq8FXP6p5Uz+ofUs/qTlHO6RT///8A////AP///wBNzekBTc3pSk3N6YFNzelmTc3pgf///wD///8A////AP///wD///8A////AP///wBv1+we////AP///wBp1ewFaNXss2bU6/9k1Ov/YtPr/2DS6/9e0uv/XNHq/1rR6vhY0Or/VtDq/1TP6utTz+pMUc7p7FDO6YBPzukE////AP///wD///8A////AE3N6VVNzek1////AP///wD///8A////AP///wD///8AcdjtGG/X7OVu1+x8bNbsbmrW7M9o1ez/ZtTr/2TU6/9i0+v/YNPr/17S6/9d0uvqW9HqrFnQ6kZX0OosVc/qclTP6pZSzumYUc7p/0/O6b5OzekG////AP///wBNzeknTc3plf///wD///8A////AP///wD///8A////AP///wBx2O0KcNfs927X7P9t1uz/a9bs/2nV7P9n1ez/ZdTr9GPU621h0+vwX9Lr/13S6/9b0er/WdHq/1jQ6rVW0OohVM/qCVPP6ghRzul7UM7p70/N6XH///8ATc3pPE3N6dRNzekb////AP///wD///8A////AP///wD///8A////AP///wBx1+yEb9fs/23W7P9s1uz/atXs/mjV7JZm1Osf////AGLT6ztg0+vuXtLr/1zR6v9a0er/WNDq/1fQ6vBVz+pBU8/qZ1LO6RVQzukaT87poP///wBNzel8Tc3pPP///wD///8A////AP///wD///8A////AP///wD///8A////AHHY7QFw1+x4btfs92zW7P9r1uz/adXsiP///wD///8A////AGHT6yFf0uujXdLr+lvR6v9Z0er/V9Dq/1bQ6uBUz+o4Us/q6FHO6WVQzukcTs3pB////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBv1+wnbdbs0mvW7P9p1ez3aNXsCf///wD///8A////AP///wBe0usbXNHqjlrR6vZY0Or/VtDq/1XP6nZTz+qbUc7p/1DO6Yn///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBu1+wObNbsy2rW7P9o1exQ////AP///wD///8A////AP///wD///8AW9HqHlnQ6rtX0Or/Vc/q0lTP6llSzun/Uc7p/0/O6WH///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBt1uwpa9bs+WnV7Oxn1ezEZdTrbGPU6yxh0+sF////AP///wD///8AWtHqBljQ6rRW0Or8VM/qGFPP6shRzun/UM7p60/N6Q////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBs1uyGatXsCWjV7Etm1OuAZNTrm2LT66dg0+uDXtLrZVzR6kFa0eobWNDqD1fQ6uVVz+ocU8/qAlLO6XlQzun9T87pd////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGzW7BH///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AV9Dqe1bQ6gX///8A////AFHO6V9QzunA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBY0Oos////AP///wD///8A////AFDO6Yr///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AUc7pNv///wD///8A////AP///wD///8A/4AT//4AAP/8AAB/+AAAP/AAAA/gAAIP4A/AB8I/wA/Gf8AHjPgAAYHwAEGD4AABv8AAIZ/Aj5GfwB/Rn8Af8Z/AB/GfwAPh/8ADgf+AA4P7AADz8AAAZ/AAAEf4CABP+BwAP/4PAH//D8A//4DgH//AAB//3/mf///73////98='
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
      apiBase: '/api',
      cdnHost: 'https://gj-h5vip2-o9c-2c9-cvip.japanwest.cloudapp.azure.com'
    }
  },
  build: {
    transpile: ['unplugin-icons']
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
    },
    plugins: [
      Icons({
        compiler: 'vue3',
        customCollections: {
          icon: FileSystemIconLoader('./app/assets/icons', svg =>
            svg.replace(/<svg[^>]*>/i, '<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">')
          )
        },
        autoInstall: false
      }),
      Components({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'k',
            customCollections: ['icon'],
            enabledCollections: ['icon']
          })
        ]
      })
    ]
  }
})
