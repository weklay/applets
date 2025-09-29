// unocss.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({

  presets: [],
  variants: [],

  // 自定义规则（可选）
  rules: [
    // 文本显示行数
    ['ellipsis1', { 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
    ['ellipsis2', { 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'display': '-webkit-box', 'line-clamp': 2, '-webkit-line-clamp': 2, '-webkit-box-orient': 'vertical' }],
    // 禁止触发事件
    ['event-none', { 'pointer-events': 'none', 'cursor': 'not-allowed' }],
    // 文本对齐
    ['text-left', { 'text-align': 'left' }],
    ['text-center', { 'text-align': 'center' }],
    ['text-right', { 'text-align': 'right' }],
    ['text-justify', { 'text-align': 'justify' }],
    // 文本样式
    ['not-italic', { 'font-style': 'normal' }],
    ['font-normal', { 'font-weight': 'normal' }],
    ['font-bold', { 'font-weight': 'bold' }],
    // 布局
    ['box-border', { 'box-sizing': 'border-box' }],
    // 组件样式
    ['btn-primary', { 'background-color': '#007bff', color: 'white', 'padding': '8px 16px', 'border-radius': '4px' }],
    ['text-title', { 'font-size': '2rem', 'font-weight': 'bold', 'line-height': '1.2' }]
  ],

  // 指定哪些文件需要扫描（关键：实现“按需提取”）
  include: [
    /\.vue$/,
    /\.vue\?vue/,
    /\.[tj]sx?$/,
    /\.md(\?vue)?/,
    './app.vue'
  ],
  exclude: [
    'node_modules',
    '.git'
  ],

  // 开启主题（可选）
  theme: {
    colors: {
      primary: '#007bff',
      success: '#28a745',
      danger: '#dc3545'
    }
  }
})