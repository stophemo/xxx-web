import type { DirectiveBinding } from 'vue';

interface ClickOutsideElement extends HTMLElement {
  clickOutsideHandler: (event: MouseEvent) => void; // 强制定义类型
}

export default {
  mounted(el: ClickOutsideElement, binding: DirectiveBinding) {
    // 定义事件处理函数，并绑定到元素上
    el.clickOutsideHandler = (event: MouseEvent) => {
      // 判断点击是否在元素外部
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event); // 调用指令绑定的回调函数
      }
    };
    // 监听点击事件
    setTimeout(() => {
      document.addEventListener('click', el.clickOutsideHandler);
    }, 0); // 使用 setTimeout 确保在 Vue 完成 DOM 更新后绑定事件
  },
  unmounted(el: ClickOutsideElement) {
    // 确保在移除时清理事件监听
    document.removeEventListener('click', el.clickOutsideHandler);
  },
};
