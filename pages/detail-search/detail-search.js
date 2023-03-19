/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-03-19 17:51:11
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-03-19 21:28:38
 */
// pages/detail-search/detail-search.js
import {
  getHotSearch,
  getSuggestSearch,
  getSearchResult
} from "../../services/api/search"
import mainStore from "../../store/main"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hots: [],
    isSearch: false,

    searchValue: "",
    suggestSongs: [],

    searchSongs: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getHotSearch().then((res) => {
      this.setData({
        hots: res.result.hots
      })
    })
  },

  handleSearchFocus() {
    this.setData({ isSearch: true })
  },
  handleSearchCancel() {
    this.setData({ isSearch: false })
    this.setData({ searchSongs: [] })
  },
  handleSearchChange(event) {
    const searchValue = event.detail
    this.setData({ searchValue })
    if (searchValue.length <= 0) return
    getSuggestSearch(searchValue).then((res) => {
      if (!res.result) return
      const result = res.result
      const order = res.result.order
      let suggestSongs = []
      for (const type of order) {
        const typeResult = result[type]
        suggestSongs = suggestSongs.concat(typeResult)
      }
      this.setData({
        suggestSongs: suggestSongs
      })
    })
  },

  handleTagClick(event) {
    const value = event.target.dataset.value
    this.setData({ searchValue: value }, () => {
      this.handleSearchAction()
    })
  },
  handleItemSelect(event) {
    const name = event.currentTarget.dataset.name
    this.setData(
      {
        searchValue: name
      },
      () => {
        this.handleSearchAction()
      }
    )
  },
  handleSearchAction() {
    getSearchResult(this.data.searchValue).then((res) => {
      this.setData({ searchSongs: res.result.songs })
    })
  },

  handleSongItemClick(event) {
    const index = event.currentTarget.dataset.index
    const item = event.currentTarget.dataset.item

    mainStore.setState("playList", this.data.searchSongs)
    mainStore.setState("playIndex", index)
    // wx.navigateTo({
    //   url: "/pages/music-player/index?id=" + item.id
    // })
  }
})
