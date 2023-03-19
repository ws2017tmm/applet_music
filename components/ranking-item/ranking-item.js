/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 19:45:05
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 19:46:31
 */
// components/ranking-item/ranking-item.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    },
    key: {
      type: String,
      value: "newRanking"
    }
  },
  methods: {
    onRankingItemTap() {
      const key = this.properties.key
      wx.navigateTo({
        url: `/pages/detail-song/detail-song?type=ranking&key=${key}`
      })
    }
  }
})
