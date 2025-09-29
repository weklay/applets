<script setup lang="ts">
const url = apiHome.banner()
const website = useWebsiteStore()
</script>

<template>
  <div>
    <h1 class="btn-primary">首页 {{ website.name }}</h1>
    <div style="width: 200px">
      <KuiImg :src="url || ''" />
    </div>
  </div>
</template>
