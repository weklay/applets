<script setup lang="ts">
import type { CSSProperties } from 'vue'
// 接收父组件
const props = withDefaults(
  defineProps<{
    src: string
    width?: string
    height?: string
    aspectRatio?: string
    fit?: '' | 'cover' | 'contain' | 'fill'
  }>(),
  {
    width: '',
    height: '',
    aspectRatio: '',
    fit: ''
  }
)
// 继承img未被声明的属性
// const attrs = useAttrs()
const imgRef = ref<HTMLImageElement | null>(null)

// 状态管理
const loaded = ref(false) // 加载完成
// const loaderr = ref(false) // 加载错误
const onLoad = () => {
  loaded.value = true
}
const onError = () => {
  // loaderr.value = true
  if (imgRef.value) {
    imgRef.value.style.visibility = 'hidden' // 兼容隐藏破图
  }
}
// 图片样式
const imgStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}
  if (props.width) style['width'] = props.width
  if (props.height) style['height'] = props.height
  if (props.fit) style['object-fit'] = props.fit
  if (props.aspectRatio) style['aspect-ratio'] = props.aspectRatio
  return style
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
  <img ref="imgRef" :src="src" :style="imgStyle" loading="lazy" @load="onLoad" @error="onError" />
</template>
