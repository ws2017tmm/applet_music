/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 06:20:53
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 15:42:29
 */
// pages/main-music/main-music.js
import { getMusicBanner, getSongMenuList } from "../../services/api/music"
import { querySelector } from "../../utils/query-selector"
import { throttle } from "underscore"

const throttleQuerySelect = throttle(querySelector, 100)

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    banners: [],
    bannerHeight: 0,
    screenWidth: 375,

    recommendSongs: [],

    // 歌单数据
    hotMenuList: [],
    recMenuList: [],
    // 巅峰榜数据
    isRankingData: false,
    rankingInfos: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 网络请求
    this.fetchNetwork()
  },

  fetchNetwork() {
    getMusicBanner().then((res) => {
      this.setData({ banners: res.banners })
    })
    getSongMenuList().then((res) => {
      this.setData({ hotMenuList: res.playlists })
    })
    getSongMenuList("华语").then((res) => {
      this.setData({ recMenuList: res.playlists })
    })
  },

  onSearchClick() {
    console.log("---search")
  },
  // 轮播图加载完毕
  onBannerImageLoad() {
    throttleQuerySelect(".banner-image").then((res) => {
      this.setData({ bannerHeight: res[0].height })
    })
  },

  onRecommendMoreClick() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {}
})
