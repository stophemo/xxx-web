// 在项目中创建一个全局声明文件，例如 `global.d.ts`
declare global {
  interface Window {
    conf: any;
  }
}

export function _window(key: string): any | null {
  if (window.conf && Object.prototype.hasOwnProperty.call(window.conf, key)) {
    return window.conf[key];
  }
  return null;
}

export function getProperty(key: string): any | null {
  return _window(key);
}
