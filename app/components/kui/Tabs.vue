<script setup lang="ts">
// 接收父组件
const props = withDefaults(
  defineProps<{
    list: string[]
    modelValue?: number
  }>(),
  {
    list: () => [],
    modelValue: 0
  }
)
// 更新父组件值
const emit = defineEmits<{ (e: 'update:modelValue', index: number): void }>()
const activeIndex = ref(props.modelValue)
// dom节点
const tabsContainer = ref<HTMLElement | null>(null)
const tabRefs = ref<HTMLElement[]>([])
// 切换 tab
function setActive(index: number) {
  activeIndex.value = index
  emit('update:modelValue', index)
  updateLinePosition()
}
const initAnimate = ref(false)
const lineStyle = ref({
  width: '0',
  transform: 'translateX(0)',
  'transition-duration': '0'
})
// 更新滑块位置
async function updateLinePosition() {
  await nextTick() // 确保 DOM 已更新

  const activeTab = tabRefs.value[activeIndex.value]
  if (!activeTab || !tabsContainer.value) return

  const tabRect = activeTab.getBoundingClientRect()
  const containerRect = tabsContainer.value.getBoundingClientRect()

  const left = tabRect.left - containerRect.left

  lineStyle.value = {
    width: `${tabRect.width}px`,
    transform: `translateX(${left}px)`,
    'transition-duration': initAnimate.value ? '0.3s' : '0'
  }
  initAnimate.value = true
}
// 响应式更新（如窗口 resize）
onMounted(() => {
  updateLinePosition()
  window.addEventListener('resize', updateLinePosition)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateLinePosition)
})
</script>

<template>
  <div ref="tabsContainer" class="kui-tabs">
    <div v-for="(item, index) in list" :key="index" class="kui-tabs_item" :class="{ 'vi-color': activeIndex === index }" @click="setActive(index)">
      <span ref="tabRefs">{{ item }}</span>
    </div>
    <div class="kui-tabs_line" :style="lineStyle" />
  </div>
</template>

<style>
.kui-tabs {
  position: relative;
}
.kui-tabs_item {
  display: inline-block;
  text-align: center;
  flex: 1;
  height: 0.7rem;
  line-height: 0.7rem;
  cursor: pointer;
}
.kui-tabs_line {
  position: absolute;
  bottom: 0;
  width: 0.55rem;
  height: 0.04rem;
  background: var(--klay-vi);
}
</style>
