<template>
  <div ref="carouselRef" class="banner-carousel" @mousedown="onDragStart" @touchstart="onDragStart" @mouseleave="handleMouseLeave">
    <!-- 轮播轨道 -->
    <div
      ref="trackRef"
      class="banner-carousel__track"
      :style="{
        transform: `translateX(${-currentIndex * 100}%)`,
        transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
      }"
    >
      <div class="banner-carousel__slide">
        <template v-for="(item, index) in banners" :key="index">
          <img v-if="item" :src="item" loading="lazy" draggable="false" />
        </template>
        <slot />
      </div>
    </div>

    <!-- 指示器 -->
    <div class="banner-carousel__dots">
      <button v-for="(_, i) in total || banners" :key="i" :class="{ active: i === currentIndex }" class="dot" @click="goTo(i)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, onDeactivated, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    banners?: string[]
    total?: number
    autoPlay?: boolean
    interval?: number
  }>(),
  {
    banners: () => [],
    total: 0,
    autoPlay: true,
    interval: 4000
  }
)

const emit = defineEmits<{
  (e: 'update:currentIndex', index: number): void
}>()

const carouselRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)

const currentIndex = ref(0)
const isDragging = ref(false)
const startPos = ref(0)
let autoPlayTimer: ReturnType<typeof setTimeout> | null = null

// 自动播放
function startAutoPlay() {
  if (!props.autoPlay || props.banners.length <= 1) return
  autoPlayTimer = setTimeout(() => {
    next()
    startAutoPlay()
  }, props.interval)
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer)
    autoPlayTimer = null
  }
}

// 导航
function goTo(index: number) {
  currentIndex.value = index
  emit('update:currentIndex', index)
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.banners.length
  emit('update:currentIndex', currentIndex.value)
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.banners.length) % props.banners.length
  emit('update:currentIndex', currentIndex.value)
}

// 安全获取 clientX
function getClientX(e: MouseEvent | TouchEvent): number | null {
  if ('clientX' in e) {
    // MouseEvent
    return e.clientX
  }

  // TouchEvent
  if ('touches' in e && e.touches.length > 0) {
    return e.touches[0]?.clientX || null
  }
  if ('changedTouches' in e && e.changedTouches.length > 0) {
    return e.changedTouches[0]?.clientX || null
  }

  return null
}

// 拖拽开始
function onDragStart(e: MouseEvent | TouchEvent) {
  if (props.banners.length <= 1) return

  stopAutoPlay()
  isDragging.value = true

  const clientX = getClientX(e)
  if (clientX === null) {
    isDragging.value = false
    return
  }

  startPos.value = clientX

  // 添加全局监听（防止鼠标移出容器丢失事件）
  document.addEventListener('mousemove', onDragMove)
  document.addEventListener('touchmove', onDragMove, { passive: false })
  document.addEventListener('mouseup', onDragEnd)
  document.addEventListener('touchend', onDragEnd)
  document.addEventListener('touchcancel', onDragEnd)
}

// 拖拽中
function onDragMove(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return
  e.preventDefault?.() // 阻止滚动等默认行为
}

// 拖拽结束
function onDragEnd(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return

  const endX = getClientX(e)
  if (endX === null) {
    isDragging.value = false
    cleanupListeners()
    if (props.autoPlay) startAutoPlay()
    return
  }

  const diff = startPos.value - endX
  const threshold = 50 // 滑动阈值

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      next()
    } else {
      prev()
    }
  }

  isDragging.value = false
  cleanupListeners()

  if (props.autoPlay) {
    startAutoPlay()
  }
}

function handleMouseLeave() {
  if (isDragging.value) return
  // 可选：鼠标离开时不停止自动播放，除非你希望暂停
}

function cleanupListeners() {
  document.removeEventListener('mousemove', onDragMove)
  document.removeEventListener('touchmove', onDragMove)
  document.removeEventListener('mouseup', onDragEnd)
  document.removeEventListener('touchend', onDragEnd)
  document.removeEventListener('touchcancel', onDragEnd)
}

// 生命周期
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
  cleanupListeners()
})

onDeactivated(() => {
  stopAutoPlay()
})

// 监听 banners 变化
watch(
  () => props.banners,
  () => {
    currentIndex.value = 0
    stopAutoPlay()
    if (props.autoPlay) startAutoPlay()
  }
)
</script>

<style scoped>
.banner-carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
}

.banner-carousel__track {
  display: flex;
  width: 100%;
  height: 100%;
}

.banner-carousel__slide {
  display: flex;
  width: 100%;
  height: 100%;
}

.banner-carousel__slide img {
  flex-shrink: 0;
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* 指示器 */
.banner-carousel__dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: white;
}
</style>
