<script setup lang="ts">
// 接收父组件
const props = withDefaults(
  defineProps<{
    value: string
  }>(),
  { value: '' }
)
</script>

<template>
  <div class="kui-badge">
    <span>{{ value }}</span>
  </div>
</template>

<style>
.kui-badge {
  display: inline-block;
  box-sizing: border-box;
  min-width: 0.32rem;
  padding: 0 0.08rem;
  color: #fff;
  height: 0.26rem;
  line-height: 0.26rem;
  text-align: center;
  background: var(--klay-danger);
  border-radius: 0.13rem 0.13rem 0.13rem 0;
  font-size: 0.18rem;
}
.kui-badge:before {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: -0.06rem;
  z-index: 20;
  left: 0;
  width: 0;
  height: 0;
  border-left: 0.079rem solid var(--klay-danger);
  border-top: 0.066rem solid transparent;
  border-bottom: 0.066rem solid transparent;
  font-size: 0;
}
</style>
