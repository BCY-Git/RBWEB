import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

// 定义接口返回的通用格式，根据后端实际情况调整
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量获取
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：获取 token 并添加到 headers 中
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    // 如果后端返回的状态码不是 200，可以在这里抛出错误
    // 假设后端返回结构为 { code: 200, data: ..., message: ... }
    const res = response.data;
    
    // 这里可以根据实际情况判断业务状态码
    // if (res.code !== 200) {
    //   // 处理错误，如 token 过期等
    //   return Promise.reject(new Error(res.message || 'Error'));
    // }

    return res;
  },
  (error: any) => {
    // 对响应错误做点什么
    console.error('Response Error:', error);
    
    // 这里可以处理 HTTP 状态码错误
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转登录页或清除 token
          console.log('Unauthorized, redirecting to login...');
          // window.location.href = '/login';
          break;
        case 403:
          console.log('Forbidden');
          break;
        case 404:
          console.log('Not Found');
          break;
        case 500:
          console.log('Server Error');
          break;
        default:
          console.log(`Error: ${error.response.status}`);
      }
    }
    
    return Promise.reject(error);
  }
);

// 封装常用请求方法
const request = {
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.get(url, { params, ...config });
  },

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.post(url, data, config);
  },

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.put(url, data, config);
  },

  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.delete(url, { params, ...config });
  },
  
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.patch(url, data, config);
  },
  
  // 暴露原始实例以备不时之需
  instance: service,
};

export default request;
