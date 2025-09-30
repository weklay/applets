<script setup lang="ts">
// 接收父组件
const props = withDefaults(
  defineProps<{
    modelValue?: MsgToastInter
  }>(),
  { modelValue: () => ({ text: '' }) }
)
// 更新父组件值
const emit = defineEmits(['update:modelValue'])
setTimeout(() => {
  emit('update:modelValue', { false: false })
}, props.modelValue.duration || 2000)
</script>

<template>
  <div class="kui-toast flex-rcc" :class="['toast-' + (modelValue.type || 'success')]">
    <i :class="['icom-' + (modelValue.type || 'success')]"></i>
    <p>{{ modelValue.text }}</p>
  </div>
</template>

<style>
.kui-toast {
  position: fixed;
  z-index: 1999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  padding: 12px 20px;
  border-radius: 4px;
  overflow: hidden;
  &.toast-success {
    color: #fff;
    border: 1px solid #666;
    background: #666;
  }
  &.toast-error {
    color: #df107d;
    border: 1px solid #fde2e2;
    background: #fde2e2;
  }
  i {
    padding-right: 6px;
  }
  p {
    font-size: 14px;
    line-height: 1;
  }
}
</style>
