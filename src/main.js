import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import 'animate.css/animate.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* Vue.axios.interceptors.request.use(config => {
  // eslint-disable-next-line no-debugger
  debugger;
  if (localStorage.JWT_TOKEN) {
    config.headers.authorization = `Bearer ${localStorage.JWT_TOKEN}`
  } else {
    if (config.url !== '/api/signIn') {
      config.headers.authorization = `dummy` // 为了防止webflux的默认拦截器发送www-authenticate强制弹窗
    }
  }
  return config
}, error => {
  return Promise.reject(error.request)
})

Vue.axios.interceptors.response.use(res => {
  localStorage.JWT_TOKEN = res.headers.authorization
  
  return res
}, error => {
  // eslint-disable-next-line no-debugger
  debugger
  if (error.request.responseURL.indexOf('/api/signIn') > 0) {
    return Promise.reject(error)
  } else if (error.response.status === 401 || error.response.status === 403 || error.response.status === 500) {
    localStorage.JWT_TOKEN = ''
    instance.$alert('您没有操作权限，请登录后重试', '警告', {
      confirmButtonText: '确定',
      type: 'error',
      callback: () => {
        instance.$router.push({ path: '/' })
      }
    })
  }
  return Promise.reject(error)
}) */