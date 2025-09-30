// unocss.config.ts
import { defineConfig } from 'unocss'

// 方向
const tblr = { t: 'top', b: 'bottom', l: 'left', r: 'right' }
// 设计稿适配750px: 1rem = 100px
const remUnit = 100

// px 转 rem 函数
function pxToRem(px: number): string {
  if (px === 1) return '1px'
  return (px / remUnit).toFixed(4).replace(/\.?0+$/, '') + 'rem'
}

export default defineConfig({
  layers: {},
  shortcuts: [],
  presets: [],
  postprocess: [
    // 将生成的 CSS 中的 px 转为 rem
    util => {
      util.entries.forEach(([selector, declaration], index) => {
        if (typeof declaration === 'string') {
          if (/^\d+(\.\d+)?px$/.test(declaration)) {
            // 完全匹配 px 值，如 '60px'
            const pxValue = parseFloat(declaration)
            util.entries[index] = [selector, pxToRem(pxValue)]
          } else if (/\d+(\.\d+)?px/.test(declaration)) {
            // 包含 px 的复合值，如 'margin: 10px 20px'
            const newValue = declaration.replace(/(\d+(\.\d+)?)px/g, (_, pxVal) => {
              return pxToRem(parseFloat(pxVal))
            })
            util.entries[index] = [selector, newValue]
          }
        }
      })
    }
  ],
  variants: [],

  // 自定义规则（可选）
  rules: [
    // 文本显示行数
    ['ellipsis1', { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
    [
      'ellipsis2',
      {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        'line-clamp': 2,
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical'
      }
    ],
    // 禁止触发事件
    ['event-none', { 'pointer-events': 'none', cursor: 'not-allowed' }],
    // 文本对齐
    ['text-left', { 'text-align': 'left' }],
    ['text-center', { 'text-align': 'center' }],
    ['text-right', { 'text-align': 'right' }],
    ['text-justify', { 'text-align': 'justify' }],
    // 文本样式
    ['not-italic', { 'font-style': 'normal' }],
    ['font-normal', { 'font-weight': 'normal' }],
    ['font-bold', { 'font-weight': 'bold' }],
    // 字体颜色
    ['c999', { color: '#999' }],
    // 字体大小
    [/^size(\d+)$/, ([_, n]) => ({ 'font-size': `${n}px` })],
    // 线条方向: 支持 border-t, border-t-2
    ['border', { 'border-width': '1px' }],
    [/^border-(t|b|l|r)(?:-(\d+))?$/, ([_, dir, n]) => ({ [`border-${tblr[dir]}-width`]: n ? `${n}px` : '1px' })],
    ['border-t', { 'border-top-width': '1px' }],
    ['border-b', { 'border-bottom-width': '1px' }],
    ['border-l', { 'border-left-width': '1px' }],
    ['border-r', { 'border-right-width': '1px' }],
    // 边框样式-所有边
    ['border-solid', { 'border-style': 'solid' }],
    ['border-dashed', { 'border-style': 'dashed' }],
    ['border-dotted', { 'border-style': 'dotted' }],
    ['border-double', { 'border-style': 'double' }],
    ['border-none', { 'border-style': 'none' }],
    // 边框样式-指定边
    [/^border-(t|r|b|l)-solid$/, ([_, dir]) => ({ [`border-${tblr[dir]}-style`]: 'solid' })],
    [/^border-(t|r|b|l)-dashed$/, ([_, dir]) => ({ [`border-${tblr[dir]}-style`]: 'dashed' })],
    [/^border-(t|r|b|l)-dotted$/, ([_, dir]) => ({ [`border-${tblr[dir]}-style`]: 'dotted' })],
    [/^border-(t|r|b|l)-double$/, ([_, dir]) => ({ [`border-${tblr[dir]}-style`]: 'double' })],
    [/^border-(t|r|b|l)-none$/, ([_, dir]) => ({ [`border-${tblr[dir]}-style`]: 'none' })],
    // 边框颜色
    ['border-none', { 'border-style': 'none' }],
    ['border-c333', { 'border-color': '#333' }],
    // 图层
    [/^z-(\d+)$/, ([_, n]) => ({ 'z-index': n })],
    // 宽度/高度
    [/^w-(\d+)$/, ([_, n]) => ({ width: `${n}px` })],
    [/^h-(\d+)$/, ([_, n]) => ({ height: `${n}px` })],
    // 内边距
    [/^p-(\d+)$/, ([_, n]) => ({ padding: `${n}px` })],
    [/^px-(\d+)$/, ([_, n]) => ({ padding: `0 ${n}px` })],
    [/^py-(\d+)$/, ([_, n]) => ({ padding: `${n}px 0` })],
    // 内边距-上下左右
    [/^pt-(\d+)$/, ([_, n]) => ({ 'padding-top': `${n}px` })],
    [/^pb-(\d+)$/, ([_, n]) => ({ 'padding-bottom': `${n}px` })],
    [/^pl-(\d+)$/, ([_, n]) => ({ 'padding-left': `${n}px` })],
    [/^pr-(\d+)$/, ([_, n]) => ({ 'padding-right': `${n}px` })],
    // 外边距
    [/^m-(\d+)$/, ([_, n]) => ({ margin: `${n}px` })],
    [/^mx-(\d+)$/, ([_, n]) => ({ margin: `0 ${n}px` })],
    [/^my-(\d+)$/, ([_, n]) => ({ margin: `${n}px 0` })],
    // 外边距-上下左右
    [/^mt-(\d+)$/, ([_, n]) => ({ 'margin-top': `${n}px` })],
    [/^mb-(\d+)$/, ([_, n]) => ({ 'margin-bottom': `${n}px` })],
    [/^ml-(\d+)$/, ([_, n]) => ({ 'margin-left': `${n}px` })],
    [/^mr-(\d+)$/, ([_, n]) => ({ 'margin-right': `${n}px` })],
    // 组件样式
    ['btn-primary', { 'background-color': '#007bff', color: 'white', padding: '8px 16px', 'border-radius': '4px' }],
    ['text-title', { 'font-size': '2rem', 'font-weight': 'bold', 'line-height': '1.2' }]
  ],

  // 指定哪些文件需要扫描（关键：实现“按需提取”）
  include: [/\.vue$/, /\.vue\?vue/, /\.[tj]sx?$/, /\.md(\?vue)?/, './app.vue'],
  exclude: ['node_modules', '.git'],

  // 开启主题（可选）
  theme: {
    colors: {
      primary: '#007bff',
      success: '#28a745',
      danger: '#dc3545'
    }
  }
})
