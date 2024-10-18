// 获取assets静态资源
export const getAssetsImg = (url: string) => {
  return new URL(`../assets/img/${url}`, import.meta.url).href;
};
