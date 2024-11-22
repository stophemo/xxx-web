export const getAssetsImg = (imgName: string) => {
  return new URL(`../assets/img/${imgName}.webp`, import.meta.url).href;
};

export const checkImgExists = (url: string | undefined) => {
  return new Promise(function (resolve, reject) {
    const ImgObj = new Image();
    if (url === undefined) {
      reject("url 为空")
    } else {
      ImgObj.src = url;
      ImgObj.onload = function (res) {
        resolve(res);
      };
      ImgObj.onerror = function (err) {
        console.log(`图片无法加载：${url}`)
        reject(err);
      };
    }
  });
};

// 获取web图片
export const getWebImg = (url: string | undefined, defualtUrl: string) => {
  checkImgExists(url)
    .then(() => {})
    .catch(() => {
      url = defualtUrl;
    });
  return url;
}

import Compressor from 'compressorjs';

export function compressAndConvertToWebP(file: File, quality: number = 0.8): Promise<Blob> {
  return new Promise((resolve, reject) => {
    // 1. 校验文件类型是否为图片
    if (!file || !file.type.startsWith('image/')) {
      return reject(new Error('输入的文件不是图片'));
    }

    // 2. 校验质量参数是否在合理范围内 (0 到 1)
    if (quality < 0 || quality > 1) {
      return reject(new Error('质量参数必须在 0 到 1 之间'));
    }

    // 3. 使用 Compressor 进行图片压缩
    new Compressor(file, {
      quality: quality,
      convertSize: 1000000, // 限制最大文件大小 5MB
      mimeType: 'image/webp', // 强制转换为 WebP 格式
      success(result: Blob) {
        // 4. 获取原始文件名和替换后缀
        const originalName = file.name;
        const newName = originalName.replace(/\.[^/.]+$/, '') + '.webp';

        // 5. 创建一个新的 Blob 文件对象，包含新的文件名
        const webpFile = new File([result], newName, { type: 'image/webp' });

        // 6. 返回新的文件对象
        resolve(webpFile);
      },
      error(err: Error) {
        // 7. 错误处理
        console.error('压缩出错:', err);
        reject(new Error(`压缩失败: ${err.message}`));
      }
    });
  });
}

