/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 19:52:04
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 19:52:26
 */
import { HYEventStore } from "hy-event-store"
import { getPlaylistDetail } from "../services/api/music"

export const rankingsMap = {
  newRanking: 3779629,
  originRanking: 2884035,
  upRanking: 19723756
}

const rankingStore = new HYEventStore({
  state: {
    newRanking: {},
    originRanking: {},
    upRanking: {}
  },
  actions: {
    fetchRankingDataAction(ctx) {
      for (const key in rankingsMap) {
        const id = rankingsMap[key]
        getPlaylistDetail(id).then((res) => {
          ctx[key] = res.playlist
        })
      }
    }
  }
})

export default rankingStore
