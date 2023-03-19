/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 07:03:35
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 10:30:00
 */
import { wsRequest } from "../request"

export function getTopMV(offset = 0, limit = 20) {
  return wsRequest.get({
    url: "/top/mv",
    data: {
      limit,
      offset
    }
  })
}

export function getMVURL(id) {
  return wsRequest.get({
    url: "/mv/url",
    data: {
      id
    }
  })
}

export function getMVDetail(mvid) {
  return wsRequest.get({
    url: "/mv/detail",
    data: {
      mvid
    }
  })
}

export function getMVRelated(id) {
  return wsRequest.get({
    url: "/related/allvideo",
    data: {
      id
    }
  })
}
