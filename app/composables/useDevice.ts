export function useDevice() {
  const userAgent = import.meta.server ? useRequestHeaders()['user-agent'] || '' : navigator.userAgent

  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  const isMobileScreen = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  // 优先使用 UA 判断（更准确），fallback 到屏幕宽度
  const isMobile = ref(import.meta.client ? isMobileUA || isMobileScreen : isMobileUA)

  if (import.meta.client) {
    const update = () => {
      isMobile.value = isMobileUA || window.innerWidth < 768
    }
    onMounted(() => {
      update()
      window.addEventListener('resize', update)
      onUnmounted(() => window.removeEventListener('resize', update))
    })
  }

  return { isMobile }
}
