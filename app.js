/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 06:17:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 17:39:14
 */
// app.js
App({
  globalData: {
    screenWidth: 375,
    screenHeight: 667,
    statusHeight: 20,
    contentHeight: 500
  },
  onLaunch() {
    // 1.获取设备的信息
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.screenWidth = res.screenWidth
        this.globalData.screenHeight = res.screenHeight
        this.globalData.statusHeight = res.statusBarHeight
        this.globalData.contentHeight =
          res.screenHeight - res.statusBarHeight - 44
      }
    })
  }
})
