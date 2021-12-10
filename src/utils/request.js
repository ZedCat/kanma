import axios from 'axios' // 封装的请求js
const request = axios.create({
  // 定义接口的基础URL地址，发起请求时只需要按需传入参数即可
  baseURL: 'http://x.ibacca.tech:3000/api/json/'
})

export default request
