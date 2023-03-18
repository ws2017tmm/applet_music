/*
 * @Description: pages/main-video/main-video.js
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 06:23:30
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 07:24:22
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
  /**
   * 网络请求获取数据
   */
  async fetchTopMV() {
    // 1.获取数据
    const res = await getTopMV(this.data.offset)
    // 2.将新的数据追加到原来数据的后面
    const newVideoList = [...this.data.videoList, ...res.data]

    // 3.设置全新的数据
    this.setData({ videoList: newVideoList })
    this.data.offset = this.data.videoList.length
    this.data.hasMore = res.hasMore
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})
