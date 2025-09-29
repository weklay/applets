<script setup lang="ts">
// const { data } = await useAsyncData(() => $fetch('/api/app/banner', { method: 'get' }))
// const { data } = await useApi(new Date().getTime() + '', '/app/banner', { params: { a: typeof window !== 'undefined' ? '客户端' : '服务端' } })
const { data } = await apiHome.banner()
</script>

<template>
  <div>
    <h1 class="btn-primary">首页</h1>
    <div style="width: 200px">
      <KuiImg :src="data?.data.url || ''" />
    </div>
  </div>
</template>
