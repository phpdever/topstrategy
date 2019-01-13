import axios from 'axios'
// import router from '../router'

// axios初始化配置
axios.defaults.timeout = 15000
axios.defaults.baseURL = process.env.BASE_API

// // http response 服务器响应拦截器
// axios.interceptors.response.use(
//   response => {
//     console.log(response, 'ressssss---1')
//     if (response.data.message === '请登录') {
//       window.localStorage.removeItem('USERID')
//       window.localStorage.removeItem('USERNAME')
//       router.replace({
//         path: '/login'
//         // query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
//       })
//     }
//   }
// )

// post请求
export const _post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, json2Form(params))
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// get请求
export const _get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// 参数封装
function json2Form (json) {
  var str = []
  for (var p in json) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
  }
  return str.join('&')
}
