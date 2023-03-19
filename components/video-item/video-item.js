/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 08:02:48
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 08:21:14
 */
// components/video-item/video-item.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  methods: {
    onItemTap() {
      const item = this.properties.itemData
      wx.navigateTo({
        url: `/pages/detail-video/detail-video?id=${item.id}`
      })
    }
  }
})
