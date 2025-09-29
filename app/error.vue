<!-- pages/.error.vue -->
<template>
  <div class="custom-error-page">
    <h1>{{ error.statusCode === 404 ? '404 - 页面未找到' : '出错了' }}</h1>
    <p>{{ error.statusMessage || '抱歉，发生了一些问题。' }}</p>
    <button @click="handleBack">返回首页</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleBack = () => {
  clearError({ redirect: '/' })
}
</script>
