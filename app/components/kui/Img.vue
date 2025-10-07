<script setup lang="ts">
import type { CSSProperties } from 'vue'
// 接收父组件
const props = withDefaults(
  defineProps<{
    src: string
    width?: string
    height?: string
    aspectRatio?: string
    lazy?: boolean
    draggable?: boolean
    fit?: '' | 'cover' | 'contain' | 'fill'
    skelBg?: string
  }>(),
  {
    width: '',
    height: '',
    aspectRatio: '',
    lazy: true,
    draggable: false,
    fit: ''
  }
)
// 继承img未被声明的属性
// const attrs = useAttrs()
const imgRef = ref<HTMLImageElement | null>(null)

// 状态管理
const loaded = ref(false) // 加载完成
const onLoad = () => {
  loaded.value = true
}
const onError = () => {
  // 兼容隐藏破图
  if (imgRef.value) imgRef.value.style.visibility = 'hidden'
}
// 设置骨架屏
const skelStyle = computed(() => {
  if (props.skelBg && !loaded.value) {
    return { style: { background: props.skelBg, 'border-radius': '8px' } }
  }
  return {}
})
// 图片样式
const imgStyle = computed(() => {
  // html属性
  const attr: Record<string, string> = { draggable: props.draggable + '' }
  if (props.lazy) attr['loading'] = 'lazy'
  // 样式
  const style: CSSProperties = {}
  if (props.width) style['width'] = props.width
  if (props.height) style['height'] = props.height
  if (props.fit) style['object-fit'] = props.fit
  if (props.aspectRatio) style['aspect-ratio'] = props.aspectRatio
  return Object.keys(style).length ? { ...attr, style } : attr
})
// 兼容缓存中读取
onMounted(() => {
  if (imgRef.value && imgRef.value.complete) {
    if (imgRef.value.naturalWidth === 0) {
      onError()
    } else {
      onLoad()
    }
  }
})

// 懒加载
// let observer: IntersectionObserver | null = null
// onMounted(() => {
//   // 创建 IntersectionObserver
//   observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         if (imgRef.value) imgRef.value.src = props.src
//         observer?.unobserve(entry.target)
//       }
//     })
//   }, {
//     rootMargin: '50px' // 提前 50px 开始加载
//   })
//   // 观察当前 img 元素
//   if (imgRef.value) observer.observe(imgRef.value)
// })
// onUnmounted(() => {
//   if (observer && imgRef.value) observer.unobserve(imgRef.value)
// })
</script>

<template>
  <div v-bind="skelStyle" class="inline-block">
    <img ref="imgRef" :src="src" v-bind="imgStyle" class="kui-img" @load="onLoad" @error="onError" />
  </div>
</template>
