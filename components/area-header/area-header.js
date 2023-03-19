/*
 * @Description: 
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 15:39:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 15:40:28
 */
// components/area-header/area-header.js
Component({
  properties: {
    title: {
      type: String,
      value: "默认标题"
    },
    hasMore: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onMoreTap() {
      this.triggerEvent("moreclick")
    }
  }
})
