<script setup lang="ts">
// 接收父组件
withDefaults(
  defineProps<{
    active?: string
  }>(),
  { active: '1' }
)
</script>

<template>
  <footer class="pt-15 pb-25 app-tab-bar">
    <div class="w100 flex-rcb size24">
      <NuxtLink to="/" class="flex-ccc w100 cursor" :class="{ 'app-tab-active': active === '1' }">
        <div class="flex-col relative size48">
          <k-icon-home />
          <k-icon-home_0 class="vi-color absolute top-0 left-0" />
        </div>
        <p class="bg-primary">首页</p>
      </NuxtLink>
      <NuxtLink to="/home/event" class="flex-ccc w100 cursor" :class="{ 'app-tab-active': active === '2' }">
        <div class="flex-col relative size48">
          <k-icon-gift />
          <k-icon-gift_0 class="vi-color absolute top-0 left-0" />
        </div>
        <p>优惠</p>
      </NuxtLink>
      <li class="flex-ccc w100 cursor">
        <div class="flex-col relative size48">
          <k-icon-come />
          <k-icon-come_0 class="vi-color absolute top-0 left-0" />
        </div>
        <p>登录</p>
      </li>
      <li class="flex-ccc w100 cursor">
        <div class="flex-col relative size48">
          <k-icon-user />
          <k-icon-user_0 class="vi-color absolute top-0 left-0" />
        </div>
        <p>注册</p>
      </li>
      <li class="flex-ccc w100 cursor">
        <div class="flex-col relative size48">
          <k-icon-my />
          <k-icon-my_0 class="vi-color absolute top-0 left-0" />
        </div>
        <p>我的</p>
      </li>
    </div>
  </footer>
</template>
