/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 20:52:12
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 21:37:26
 */
import { wsRequest } from "../request"

export function getHotSearch() {
  return wsRequest.get({
    url: "/search/hot"
  })
}

export function getSuggestSearch(value) {
  return wsRequest.get({
    url: "/search/suggest",
    data: {
      keywords: value
    }
  })
}

export function getSearchResult(value) {
  return wsRequest.get({
    url: "/search",
    data: {
      keywords: value
    }
  })
}
