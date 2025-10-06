// unocss.config.ts
import { defineConfig } from 'unocss'

// 方向
const tblr: Record<string, string> = { t: 'top', b: 'bottom', l: 'left', r: 'right' }
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
    [
      /^theme-bg-(.*)$/,
      ([, c]) => ({
        background: `var(--color-${c}-background)`,
        '--text': `var(--color-${c}-text)`
      })
    ],
    // 主题色
    ['vi-color', { color: 'var(--klay-vi)' }],
    ['text-color', { color: 'var(--klay-text)' }],
    ['desc-color', { color: 'var(--klay-text_nav)' }],
    ['text-dark', { color: 'var(--klay-dark)' }],
    ['bg-vi', { background: 'var(--klay-vi)' }],
    ['bg-black', { background: 'var(--klay-black)' }],
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
    // 字体大小
    [/^size(\d+)$/, ([_, n]) => ({ 'font-size': `${n}px` })],
    // 字体行高
    ['leading', { 'line-height': 1 }],
    [/^leading-(\d+)$/, ([_, n]) => ({ 'line-height': `${n}px` })],
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
    // 圆角
    [/^radius-(\d+)$/, ([_, n]) => ({ 'border-radius': n ? `${n}px` : n })],
    // 行/块
    ['inline', { display: 'inline' }],
    ['block', { display: 'block' }],
    ['inline-block', { display: 'inline-block' }],
    ['text-nowrap', { 'white-space': 'nowrap' }],
    // 盒子-行布局
    ['flex', { display: 'flex' }],
    ['flex-nowrap', { display: 'flex', 'flex-wrap': 'nowrap' }],
    ['flex-wrap', { display: 'flex', 'flex-wrap': 'wrap' }],
    ['flex-wrap-reverse', { display: 'flex', 'flex-wrap': 'wrap-reverse' }],
    // 盒子-列布局
    ['flex-row', { display: 'flex', 'flex-direction': 'row' }],
    ['flex-row-reverse', { display: 'flex', 'flex-direction': 'row-reverse' }],
    ['flex-col', { display: 'flex', 'flex-direction': 'column' }],
    ['flex-col-reverse', { display: 'flex', 'flex-direction': 'column-reverse' }],
    // 盒子-边距
    [/^gap-(\d+)$/, ([_, n]) => ({ gap: `${n}px` })],
    [/^gap-x-(\d+)$/, ([_, n]) => ({ 'column-gap': `${n}px` })],
    [/^gap-y-(\d+)$/, ([_, n]) => ({ 'row-gap': `${n}px` })],
    // 盒子-弹性布局
    ['flex-1', { flex: 1 }],
    ['shrink', { 'flex-shrink': 1 }],
    ['shrink-0', { 'flex-shrink': 0 }],
    // 显示隐藏-溢出-滚动
    ['overflow-hidden', { overflow: 'hidden' }],
    ['overflow-visible', { overflow: 'visible' }],
    ['overflow-x-auto', { 'overflow-x': 'auto' }],
    ['overflow-y-auto', { 'overflow-y': 'auto' }],
    // 图层
    [/^z-(\d+)$/, ([_, n]) => ({ 'z-index': n })],
    // 定位
    [/^top-(\d+)$/, ([_, n]) => ({ top: n ? `${n}px` : n })],
    [/^bottom-(\d+)$/, ([_, n]) => ({ bottom: n ? `${n}px` : n })],
    [/^left-(\d+)$/, ([_, n]) => ({ left: n ? `${n}px` : n })],
    [/^right-(\d+)$/, ([_, n]) => ({ right: n ? `${n}px` : n })],
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
    ['text-title', { 'font-size': '2rem', 'font-weight': 'bold', 'line-height': '1.2' }],
    ['app-tab-bar', { background: 'var(--klay-bg_nav)', color: 'var(--klay-text_nav)' }],
    ['app-tab-active', { color: 'var(--klay-vi)' }]
  ],
  preflights: [
    {
      getCSS: () => `
        .marquee-box {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 36s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `
    }
  ],
  // 开启主题（可选）
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)'
    }
  }

  // 指定哪些文件需要扫描（关键：实现“按需提取”）
  // include: [/\.vue$/, /\.vue\?vue/, /\.[tj]sx?$/, /\.md(\?vue)?/, './app.vue'],
  // exclude: ['node_modules', '.git'],
})
