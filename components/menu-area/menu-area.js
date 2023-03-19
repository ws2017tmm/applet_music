/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 17:37:27
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 17:38:57
 */
// components/menu-area/menu-area.js
const app = getApp()

Component({
  properties: {
    title: {
      type: String,
      value: "默认歌单"
    },
    menuList: {
      type: Array,
      value: []
    }
  },
  data: {
    screenWidth: 375
  },

  lifetimes: {
    attached() {
      this.setData({ screenWidth: app.globalData.screenWidth })
    }
  },

  methods: {
    onMenuMoreClick() {
      wx.navigateTo({
        url: "/pages/detail-menu/detail-menu"
      })
    }
  }
})
