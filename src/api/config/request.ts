import axios from 'axios';
import { ElMessage, ElLoading } from 'element-plus';
import router from '@/router';
import { getProperty } from '@/util/getConfig';
import { useUserStore } from '@/stores/userStore'

// 创建axios实例
const service = axios.create({
  baseURL: getProperty('baseUrl'),
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
const userStore = useUserStore();

let loading: any;
// 正在请求的数量
let requestCount: number = 0;
// 显示loading
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    //加载中显示样式可以自行修改
    loading = ElLoading.service({
      text: '拼命加载中，请稍后...',
      background: 'rgba(0, 0, 0, 0.7)',
      spinner: 'el-icon-loading',
    });
  }
  requestCount++;
};
// 隐藏loading
const hideLoading = () => {
  requestCount--;
  if (requestCount == 0) {
    loading.close();
  }
};

// 请求拦截
service.interceptors.request.use(
  (config) => {
    showLoading();
    const token = userStore.token;
    if (token) {
      config.headers['satoken'] = token; // 设置 token 到请求头
    }
    return config;
  },
  (error) => {
    console.log("request interceptor: \n", error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    hideLoading();
    // 未设置状态码则默认成功状态
    const code = res.data['code'] || 200;
    // 获取错误信息
    const msg = res.data['message'];
    if (code === 200) {
      return Promise.resolve(res.data);
    } else if (code === 1009 || code === 1017 || code === 1018) {
      ElMessage.error(msg);
      router.push('/login').catch((err) => {
        console.error('路由跳转失败:', err);
      });
      return Promise.resolve(res.data);
    } else {
      ElMessage.error(msg);
      return Promise.reject(res.data);
    }
  },
  (error) => {
    console.log("response interceptor: \n", error);
    hideLoading();
    let { message } = error;
    if (message == 'Network Error') {
      message = '后端接口连接异常';
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时';
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.slice( - 3) + '异常';
    }
    ElMessage.error({
      message: message,
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
