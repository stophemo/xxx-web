// 从 window 对象获取配置
// 因为动态配置挂载在 window 的 admin.config 属性
export function _window(key: string) {
  if (window.hasOwnProperty('conf')) {
    return window.conf[key]
  }

  return null
}

// 获取 base_url
export function getProperty(key: string) {
  return _window(key);
}
