/*
 * @Description: pages/main-video/main-video.js
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 06:23:30
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 08:39:20
 */
import { getTopMV } from "../../services/api/video"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoList: [],
    offset: 0,
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 发送网络请求
    this.fetchTopMV()
  },
  // =================  发送网络请求的方法 =================
  /**
   * 网络请求获取数据
   */
  async fetchTopMV() {
    // 1.获取数据
    const res = await getTopMV(this.data.offset)
    // 2.将新的数据追加到原来数据的后面
    const newData = res.data || []
    const newVideoList = [...this.data.videoList, ...newData]

    // 3.设置全新的数据
    this.setData({ videoList: newVideoList })
    this.data.offset = this.data.videoList.length
    this.data.hasMore = res.hasMore
  },
  // =================  监听上拉和下拉功能  =================
  onReachBottom() {
    // 1.判断是否有更多的数据
    if (!this.data.hasMore) return

    // 2.如果有更多的数据, 再请求新的数据
    this.fetchTopMV()
  },
  async onPullDownRefresh() {
    // 1.清空之前的数据
    this.setData({ videoList: [] })
    this.data.offset = 0
    this.data.hasMore = true

    // 2.重新请求新的数据
    await this.fetchTopMV()

    // 3.停止下拉刷新
    wx.stopPullDownRefresh()
  },
  onVideoItemTap(event) {}
})
