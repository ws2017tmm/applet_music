/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 17:40:10
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 17:41:17
 */
// components/menu-item/menu-item.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  methods: {
    onMenuItemTap() {
      const id = this.properties.itemData.id
      wx.navigateTo({
        url: `/pages/detail-song/detail-song?type=menu&id=${id}`
      })
    }
  }
})
