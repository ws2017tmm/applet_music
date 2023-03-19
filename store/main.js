/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 21:24:28
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 21:29:11
 */
import { HYEventStore } from "hy-event-store"

const mainStore = new HYEventStore({
  state: {
    playList: [],
    playIndex: 0,
    playMode: 0 // 0: 顺序播放 1: 随机播放 2: 单曲循环
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

export default mainStore
