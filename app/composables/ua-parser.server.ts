/**
 * @param userAgent - 用户代理字符串-强制小写
 * @returns String
 */
export const client_ua_device = (): 'mobile' | 'tablet' | '' => {
  const ua = (useRequestHeaders(['user-agent'])['user-agent'] || '').toLowerCase()

  // 1. 先检测 tablet(优先级高于 mobile)
  // ua-parser-js 的 tablet 正则(简化版)
  if (/(tablet|ipad|playbook|silk|kindle|gt-p1000|gt-p7510|sch-i800|nexus 7|nexus 9|sm-t[0-9]{3,4}|pixel c)/i.test(ua)) {
    return 'tablet'
  }

  // 2. 特殊处理 iOS 13+ iPad(伪装成 Mac)
  // ua-parser-js 使用以下逻辑：
  // - 是 Mac
  // - 是 Safari
  // - 不是 Chrome/Chromium/Edge
  // - 支持触摸(但 UA 无法判断，所以依赖常见模式)
  // 社区共识：Mac + Safari + Version/ → 很可能是 iPad
  if (/macintosh/.test(ua) && /safari/.test(ua) && !/chrome|chromium|edg|fxios/.test(ua) && /version\/\d+/.test(ua)) {
    return 'tablet'
  }

  // 3. 检测 mobile(排除 iPad)
  if (/(mobile|android|iphone|ipod|iemobile|opera mini|blackberry|webos|nokia|samsung|lg|htc|motorola)/i.test(ua) && !/ipad/.test(ua)) {
    return 'mobile'
  }

  // 4. 默认：桌面或其他设备
  return ''
}
