export const getAssetsImg = (imgName: string) => {
  return new URL(`../assets/img/${imgName}.webp`, import.meta.url).href;
};

export const checkImgExists = (url: string) => {
  return new Promise(function (resolve, reject) {
    const ImgObj = new Image();
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

import Compressor from 'compressorjs';

export function convertImageToWebP(file: File, quality: number = 0.8): Promise<Blob> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: quality,
      mimeType: 'image/webp',
      success(result: Blob) {
        resolve(result);
      },
      error(err: Error) {
        console.error('压缩出错:', err);
        reject(err);
      },
    });
  });
}
