import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, removeToken } from '../utils/auth'
import store from '../store'
import router from '../router'
import { MessageBox, Message } from 'element-ui'

NProgress.configure({
  showSpinner: false
});

const requests = axios.create({
  //baseURL: '/api',
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
});

// 添加请求拦截器
requests.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  NProgress.start()
  if (getToken()) {
    config.headers['X-Token'] = getToken()
  }
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  NProgress.done()
  return response;
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  if (error === undefined || error.code === 'ECONNABORTED') {
    Message.warning('服务请求超时')
    return Promise.reject(error)
  }

  const { response } = error
  if (response.status === 401) {

    MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      removeToken()
      router.push("/")
    })
  }
  if (response.status === 403) {
    // Notification.warning({
    //     title: '禁止',
    //     message: info.message,
    //     type: 'error',
    //     duration: 2 * 1000,
    // })
  }
  if (response.status === 504) {
    // Message({
    //     message: '后端服务异常，请联系管理员！',
    //     type: 'error',
    //     duration: 5 * 1000,
    // })
  }

  NProgress.done()
  return Promise.reject(error);

});

export default requests