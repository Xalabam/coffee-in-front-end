// pages/claims/claims.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // const id = getApp().globalData.userId
    // wx.request({
    //   url: getApp().globalData.host + `/api/v1/users/${id}/claims`,
    //   success: function(response) {
    //     const claims = response.data.claims
    //     console.log(claims)
    //     page.setData({ claims })
    //   }
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function (option) {
    const page = this
    const id = getApp().globalData.userId
    console.log(id)
    wx.request({
      url: getApp().globalData.host + `/api/v1/users/${id}/claims`,
      success: function(response) {
        const claims = response.data.claims
        console.log(claims)
        page.setData({claims})
      }
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})