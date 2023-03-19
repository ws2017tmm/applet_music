/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 17:17:17
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 17:30:10
 */
import { HYEventStore } from "hy-event-store"
import { getPlaylistDetail } from "../services/api/music"

const recommendStore = new HYEventStore({
  state: {
    recommendSongInfo: {}
  },
  actions: {
    fetchRecommendSongsAction(ctx) {
      getPlaylistDetail(3778678).then((res) => {
        console.log(res, "---res")
        ctx.recommendSongInfo = res.playlist
      })
    }
  }
})

export default recommendStore
