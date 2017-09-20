/* global __ENV__ */
import axios from 'axios'
import CONFIG from 'app_src/config/config'

axios.defaults.timeout = 5000
axios.interceptors.request.use(
  config => {
    let url = config.url
    let apiHost = CONFIG[__ENV__].apiHost || ''
    if (!/[http|https]:\/\//gi.test(url)) {
      if (__ENV__ === 'development') { // 开发环境
        config.url = window.location.origin + url
      } else {
        config.url = apiHost + url
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
