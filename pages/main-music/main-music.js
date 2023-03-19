/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 06:20:53
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 17:49:36
 */
// pages/main-music/main-music.js
import { getMusicBanner, getSongMenuList } from "../../services/api/music"
import recommendStore from "../../store/recommendStore"
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

    // 推荐歌曲
    recommendStore.onState("recommendSongInfo", this.handleRecommendSongs)
    // 发起action
    recommendStore.dispatch("fetchRecommendSongsAction")
  },
  // ====================== 网络请求 ======================
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
  // ====================== 界面的事件监听方法 ======================
  onSearchClick() {
    wx.navigateTo({ url: "/pages/detail-search/detail-search" })
  },
  // 轮播图加载完毕
  onBannerImageLoad() {
    throttleQuerySelect(".banner-image").then((res) => {
      this.setData({ bannerHeight: res[0].height })
    })
  },

  onRecommendMoreClick() {},

  // ====================== 从Store中获取数据 ======================
  handleRecommendSongs(value) {
    if (!value.tracks) return
    this.setData({ recommendSongs: value.tracks.slice(0, 6) })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {}
})
