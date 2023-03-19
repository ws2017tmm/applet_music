/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 20:06:54
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 20:07:32
 */
// components/song-item-v2/song-item-v2.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: -1
    }
  },
  methods: {
    onSongItemTap() {
      const id = this.properties.itemData.id
      // wx.navigateTo({
      //   url: `/pages/music-player/music-player?id=${id}`
      // })
    }
  }
})
