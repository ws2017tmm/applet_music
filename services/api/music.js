/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 07:03:29
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 07:15:58
 */
import { wsRequest } from "../request"

export function getMusicBanner(type = 0) {
  return wsRequest.get({
    url: "/banner",
    data: {
      type
    }
  })
}

export function getPlaylistDetail(id) {
  return wsRequest.get({
    url: "/playlist/detail",
    data: {
      id
    }
  })
}

export function getSongMenuList(cat = "全部", limit = 6, offset = 0) {
  return wsRequest.get({
    url: "/top/playlist",
    data: {
      cat,
      limit,
      offset
    }
  })
}

export function getSongMenuTag() {
  return wsRequest.get({
    url: "/playlist/hot"
  })
}
