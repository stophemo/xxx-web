// 获取assets图片
export const getAssetsImg = (imgName: string) => {
  return new URL(`../assets/img/${imgName}.webp`, import.meta.url).href;
};

export const checkImgExists = (url: string) => {
  return new Promise(function (resolve, reject) {
    let ImgObj = new Image();
    ImgObj.src = url;
    ImgObj.onload = function (res) {
      resolve(res);
    };
    ImgObj.onerror = function (err) {
      reject(err);
    };
  });
};

// 获取web图片
export const getWebImg = (url: string, defualtUrl: string) => {
  checkImgExists(url)
    .then(() => {})
    .catch(() => {
      url = defualtUrl;
    });
  return url;
}
