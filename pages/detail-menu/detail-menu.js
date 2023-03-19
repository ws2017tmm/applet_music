/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 17:47:52
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 20:21:58
 */
// pages/detail-menu/detail-menu.js
import { getSongMenuTag, getSongMenuList } from "../../services/api/music"

Page({
  data: {
    songMenus: []
  },
  onLoad() {
    this.fetchAllMenuList()
  },
  // 发送网络请求
  async fetchAllMenuList() {
    // 1.获取tags
    const tagRes = await getSongMenuTag()
    const tags = tagRes.tags

    // 2.根据tags去获取对应的歌单
    const allPromises = []
    for (const tag of tags) {
      const promise = getSongMenuList(tag.name)
      allPromises.push(promise)
    }

    // 3.获取到所有的数据之后, 调用一次setData
    Promise.all(allPromises).then((res) => {
      this.setData({ songMenus: res })
    })
  }
})
