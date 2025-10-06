<template>
  <div
    ref="bannerRef"
    class="banner-swiper"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
    @pointerleave="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <!-- 轮播轨道 -->
    <div
      ref="trackRef"
      class="banner-track"
      :style="{
        transform: `translate3d(${trackOffset}px, 0, 0)`,
        transition: isDragging ? 'none' : 'transform 0.4s'
      }"
    >
      <template v-for="(item, index) in virtualData" :key="index">
        <KuiImg :src="getCdn(item.url)" class="w100 h-209 shrink-0 radius-16" />
      </template>
    </div>

    <!-- 指示器 -->
    <div class="banner-dots">
      <span v-for="(_, i) in list.length" :key="i" :class="{ 'banner-dots_active': i === currentIndex }" class="banner-dots_item" @click="goTo(i)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    list: { url: '' }[]
    autoPlay?: number
  }>(),
  {
    autoPlay: 5000
  }
)
// 虚拟列表（循环用）
const virtualData = ref([...props.list])
// dom
const bannerRef = ref()
const trackRef = ref()
// 当前下标
const currentIndex = ref(0) // 真实索引
const virtualIndex = ref(0) // 虚拟索引
let offsetCount = 0
const trackOffset = ref(0)
// 拖拽状态
const isDragging = ref(false)
let slideWidth = 0
let startPos = 0
let startOffset = 0 // 慢速拖动 → 超过一半宽度才切换
let startTime = 0 // 快速拖动（即使距离不足） → 也切换
// 1. 开始拖拽
const onPointerDown = (e: PointerEvent) => {
  isDragging.value = true
  startPos = e.clientX
  startOffset = trackOffset.value
  startTime = Date.now()
  // 防止图片拖拽/选中
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault()
  }
}
// 2. 持续监听滑动距离
const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  // 只有移动超过阈值
  const deltaX = e.clientX - startPos
  if (Math.abs(deltaX) >= 5) {
    // if (deltaX > 0 && !(offsetCount + virtualIndex.value)) {
    //   // offsetCount--
    //   virtualData.value.unshift(virtualData.value.pop() || { url: '' })
    //   startOffset = -slideWidth
    // }
    trackOffset.value = startOffset + deltaX
  }
}
// 3. 结束拖拽
const onPointerUp = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const now = Date.now()
  const duration = now - startTime
  const delta = trackOffset.value - startOffset // 拖动距离(负=左, 正=右)
  const absDelta = Math.abs(delta)

  // 距离阈值比例(50%)
  const distanceThreshold = slideWidth * 0.5
  // 计算速度(避免除零): px/ms，约 800px/s
  const velocity = duration > 0 ? absDelta / duration : 0
  if (absDelta > distanceThreshold || velocity > 0.8) {
    if (delta > 0) {
      goTo(currentIndex.value ? currentIndex.value - 1 : props.list.length - 1)
    } else {
      goTo(currentIndex.value === props.list.length - 1 ? 0 : currentIndex.value + 1)
    }
  } else {
    trackOffset.value = startOffset
  }
}
// 跳转
const goTo = (index: number) => {
  currentIndex.value = index
  updateSlideSize()
}
// 更新 slide 宽度（响应式）
const updateSlideSize = () => {
  if (bannerRef.value) {
    slideWidth = bannerRef.value.clientWidth
    trackOffset.value = (-currentIndex.value + offsetCount) * slideWidth
  }
}
// 初始化 & 响应式
onMounted(() => {
  updateSlideSize()
  window.addEventListener('resize', updateSlideSize)
  // 绑定全局 move/up（确保拖出容器也能响应）
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlideSize)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
})
</script>

<style>
.banner-swiper {
  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y; /* 禁止浏览器处理水平手势, 避免提前结束 pointer 事件 */
}
.banner-track {
  display: flex;
  width: 100%;
  height: 100%;
  cursor: grab;
}
/* 指示器 */
.banner-dots {
  position: absolute;
  bottom: 0.1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.banner-dots_item {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}
.banner-dots_active {
  width: 0.24rem;
  border-radius: 0.06rem;
  background: white;
}
</style>
