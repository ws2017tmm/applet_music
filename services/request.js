/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 06:49:53
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 07:06:27
 */
import { BASE_URL } from "./config/config"
class WSRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
  request(options) {
    const { url } = options
    return new Promise((reslove, reject) => {
      wx.request({
        ...options,
        url: this.baseURL + url,
        success: (res) => {
          reslove(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
  get(options) {
    return this.request({ ...options, method: "get" })
  }
  post(options) {
    return this.request({ ...options, method: "post" })
  }
}

export default new WSRequest(BASE_URL)
