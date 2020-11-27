// pages/coupons/coupons.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToNewCoupon: function () {
    wx.navigateTo({
      url: `/pages/new/new`,
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  deleteCoupon: function (e) {
    // console.log(e)
    // let coupon = e.currentTarget.dataset.id;
      const id = e.currentTarget.dataset;
      const page = this
    console.log(id)
      // make a DELETE request
      wx.request({
        url: getApp().globalData.host + `api/v1/coupons/${id.id}`,
        method: 'DELETE',
        success() {
          // redirect to index page when done
          page.onShow()
          // wx.switchTab({
          //   url: '/pages/coupons/coupons'
          // });
        }
      });
  },

  onLoad: function (options) {  
    // const page = this
    // const id = getApp().globalData.userId
    // console.log(id)
    // wx.request({
    //   url: getApp().globalData.host + `api/v1/users/${id}/coupons`,
    //   success: function (res) {
    //     const coupons = res.data
    //     page.setData(coupons)
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
  onShow: function () {  
    const page = this
    const id = getApp().globalData.userId
    console.log(id)
    wx.request({
      url: getApp().globalData.host + `api/v1/users/${id}/coupons`,
      success: function (res) {
        const coupons = res.data
        page.setData(coupons)
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