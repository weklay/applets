function mediaScreen() {
  const e = navigator.userAgent
  const isPad = /iPad/.test(e) || (!/iPhone OS \d+_/i.test(e) && window.screen.height > window.screen.width && /Macintosh|Mac OS X/i.test(e))
  const isPhone =
    /iPhone|Android.+Mobile/.test(e) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 1 && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e))

  // 2. 定义设计稿的宽高比（750px 宽 / 1334px 高 ≈ 0.562）
  const a = 750 / 1334
  // 3. 默认设备类型为 "mobile"
  const dev = isPhone ? 'mobile' : 'desktop'
  // 4. 默认 uiContain = "0"（表示“不 containment”，即全宽）
  var d = '0'
  // 5. 计算“内容区域的最大有效宽度”
  // 如果当前屏幕宽高比 > 设计稿宽高比（即屏幕更“宽”），
  // 则按高度反推最大宽度（保持比例）；否则就用当前宽度。
  var c = window.innerWidth / window.innerHeight > a ? a * window.innerHeight : window.innerWidth
  // 6. 判断是否进入“UI containment 模式”（即限制最大宽度）
  //    条件：屏幕宽度 > 450px 且 不是平板 → 认为是“大屏手机或桌面”
  d = window.innerWidth > 450 && !isPad ? '1' : '0' // 启用 containment

  // 7. 获取 <html> 元素
  var s = document.querySelector('html')
  // 8. 如果存在 <html>，就设置 CSS 变量和 data 属性
  if (s) {
    // 设置最大内容宽度：
    // - 如果 d === "1"（大屏模式），则用计算出的 c（如 504px）
    // - 否则用 100%（小屏全宽）
    s.style.setProperty('--lay-width', '1' === d ? c + 'px' : '100%')

    // 设置动态 vh（解决 iOS 地址栏导致的 100vh 不准问题）
    // 1vh = 1% of real viewport height
    // s.style.setProperty('--lay-vh', 0.01 * window.innerHeight + 'px')

    // 设置设备类型（始终为 "mobile"，可能后续扩展）
    s.setAttribute('data-device', 'mobile')

    // 标记是否启用 containment 布局
    s.setAttribute('data-ui-contain', d)
  }
}

export function useDevice() {
  if (import.meta.client) {
    const update = () => {
      mediaScreen()
    }
    onMounted(() => {
      update()
      window.addEventListener('resize', update)
      onUnmounted(() => window.removeEventListener('resize', update))
    })
  }
}
