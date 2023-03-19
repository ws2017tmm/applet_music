/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 09:54:46
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 10:35:40
 */
// pages/video-detail/video-detail.js
import { getMVURL, getMVDetail, getMVRelated } from "../../services/api/video"

Page({
  data: {
    mvURL: {},
    mvInfo: {},
    relatedVideo: []
  },
  onLoad(options) {
    // 1.获取id
    const id = options.id

    // 2.请求数据
    this.getVideoInfo(id)
  },

  getVideoInfo: function (id) {
    // 1.mv detail
    getMVDetail(id).then((res) => {
      this.setData({ mvInfo: res.data })
    })

    // 2.mv url
    getMVURL(id).then((res) => {
      this.setData({ mvURL: res.data.url })
    })

    // 3.related mv
    getMVRelated(id).then((res) => {
      this.setData({ relatedMV: res.data })
    })
  }
})
