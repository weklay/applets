<script setup lang="ts">
import type { CSSProperties } from 'vue'
// 接收父组件
const props = withDefaults(
  defineProps<{
    text: string
    plain?: boolean
  }>(),
  { text: '', plain: false }
)
</script>

<template>
  <div class="kui-btn flex-rcc">
    <span>{{ text }}</span>
  </div>
</template>

<style>
.kui-btn {
  cursor: pointer;
  text-align: center;
  border: 1px solid var(--klay-vi);
  box-sizing: border-box;
}
</style>
