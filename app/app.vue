<script setup lang="ts">
// 动态计算html属性
const { isMobile } = useDevice()
// 使用 reactive + watch 实现响应式更新
const htmlAttrs = reactive({ 'data-device': 'desktop', 'data-ui-contain': '1' })

watch(
  isMobile,
  mobile => {
    htmlAttrs['data-device'] = mobile ? 'mobile' : 'desktop'
  },
  { immediate: true }
)
useHead({
  htmlAttrs: htmlAttrs,
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }]
})
const useKui = kuiStore()
</script>

<template>
  <Head>
    <Style>
      html,body{width: 100%;height: 100%; margin: 0; padding: 0;box-sizing: border-box;font-size: .24rem;}#__nuxt {width: 100%;height: 100%; overflow:
      hidden;}h1,h2,h3,h4,h5,h6,ul,li,dl,dt,dd,p{margin: 0; padding: 0;} ul,li,dl,dt,dd{list-style: none} i{font-style: normal;}
      ::-webkit-scrollbar{width: 6px;height: 6px;} ::-webkit-scrollbar-track{background: rgb(255, 255, 255);border-radius: 4px;}
      ::-webkit-scrollbar-thumb{background: rgb(201, 201, 202);border-radius: 4px;} ::-webkit-scrollbar-thumb:hover{background: rgb(162, 162, 163);}
      .scrollbar-none{ scrollbar-width: none; -ms-overflow-style: none;}.box-border{box-sizing: border-box;}.relative{position:
      relative}.absolute{position: absolute;}.top-0{top: 0;}.bottom-0{bottom: 0;}.left-0{left: 0;}.right-0{right: 0;}.hidden{overflow:
      hidden;}.flex{display: flex;} .flex-col{display: flex;flex-direction: column;} .flex-rcc{display: flex; flex-direction: row; align-items:
      center; justify-content: center;} .flex-rcb{display: flex; flex-direction: row; align-items: center; justify-content: space-between;}
      .flex-ccc{display: flex; flex-direction: column; align-items: center; justify-content: center;} .flex-csb{display: flex; flex-direction: column;
      align-items: start; justify-content: space-between;}.scrollbar-none::-webkit-scrollbar, .scrollbar-none::-webkit-scrollbar-track{display:
      none;width: 0;}.cursor{cursor: pointer;}.w100{width: 100%;}.h100{height: 100%;}.scale-fade-enter-active, .scale-fade-leave-active { transition:
      all 0.2s; }.scale-fade-enter-from, .scale-fade-leave-to {opacity: 0; transform: translate(-50%, -50%) scale(0);}
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
html[data-ui-contain='1'] {
  max-width: 504.8725637181409px;
  margin: 0 auto;
  background: #333;
  font-size: calc(504.8725637181409px / 7.5);
}
html[data-device='mobile'] {
  font-size: calc(100vw / 7.5);
}
body {
  background: #1a1a1a;
}
</style>
