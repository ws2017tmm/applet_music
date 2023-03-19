/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 17:21:36
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 17:42:42
 */
// components/song-item-v1/song-item-v1.js
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
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
