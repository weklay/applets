<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }]
})
// 动态计算html属性
useDevice()
const useKui = kuiStore()
// 设置主题
if (import.meta.client) {
  // document.documentElement.setAttribute('data-theme', 'dark')
}
</script>

<template>
  <Head>
    <Style>
      html{font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB,
      Microsoft Yahei, sans-serif;} html,body{width: 100%;height: 100%; margin: 0; padding: 0;box-sizing: border-box;font-size: .24rem;}#__nuxt
      {width: 100%;height: 100%; overflow: hidden;}h1,h2,h3,h4,h5,h6,ul,li,dl,dt,dd,p{margin: 0; padding: 0;} a{text-decoration: none; color:
      currentColor;} ul,li,dl,dt,dd{list-style: none} i{font-style: normal;} ::-webkit-scrollbar{display: none;width: 0;}
      ::-webkit-scrollbar-track{background: rgb(255, 255, 255);border-radius: 4px;} ::-webkit-scrollbar-thumb{background: rgb(201, 201,
      202);border-radius: 4px;} ::-webkit-scrollbar-thumb:hover{background: rgb(162, 162, 163);} .scrollbar-none{ scrollbar-width: none;
      -ms-overflow-style: none;}.box-border{box-sizing: border-box;}.fixed{position: fixed}.relative{position: relative}.absolute{position:
      absolute;}.flex-rcc{display: flex; flex-direction: row; align-items: center; justify-content: center;} .flex-rcb{display: flex; flex-direction:
      row; align-items: center; justify-content: space-between;} .flex-ccc{display: flex; flex-direction: column; align-items: center;
      justify-content: center;} .flex-csb{display: flex; flex-direction: column; align-items: start; justify-content:
      space-between;}.scrollbar-none::-webkit-scrollbar, .scrollbar-none::-webkit-scrollbar-track{display: none;width: 0;}.cursor{cursor:
      pointer;}.w100{width: 100%;}.h100{height: 100%;}.scale-fade-enter-active, .scale-fade-leave-active { transition: all 0.2s;
      }.scale-fade-enter-from, .scale-fade-leave-to {opacity: 0; transform: translate(-50%, -50%) scale(0);}
    </Style>
  </Head>
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'bounce', mode: 'out-in' }" />
  </NuxtLayout>
  <transition name="scale-fade" @after-leave="() => (useKui.msgToast.show = false)">
    <KuiToast v-if="useKui.msgToast.show" v-model="useKui.msgToast" />
  </transition>
</template>

<style>
:root {
  --lay-width: 504.8725637181409px;
  --klay-bg: #1a1a1a;
  --klay-bg_nav: #0a0a0a;
  --klay-info: #333;
  --klay-vi: #d1ae52;
  --klay-black: #222;
  --klay-dark: #703904;
  --klay-danger: #ea4e3d;
  --klay-white: #fff;
  --klay-text: #e3e3e3;
  --klay-text_nav: #999;
}
/* [data-theme='dark'] {
  --color-primary: black;
} */
html[data-device='mobile'] {
  font-size: calc(100vw / 7.5);
}
html[data-ui-contain='1'] {
  max-width: var(--lay-width);
  margin: 0 auto;
  background: var(--klay-info);
  font-size: calc(var(--lay-width) / 7.5);
}
body {
  background: var(--klay-bg);
}
</style>
