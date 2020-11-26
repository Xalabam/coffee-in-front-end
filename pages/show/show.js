// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // name: 
    // validity:
    // offer:
    // address:
    // shop_name:
    // shop_info:
    // contact: 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({id: options.id})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const page = this
    console.log(page.data)
    wx.request({
    
      url: getApp().globalData.host + `/api/v1/coupons/${page.data.id}`,
      success: function(res) {
        const coupon = res.data
        console.log(coupon)
        page.setData(coupon)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  claimThisCoupon: function (event) {
    const id = event.currentTarget.dataset.id;
      // let user = event.detail.value.user_id;
      let user = getApp().globalData.userId;
    console.log(user)
      let coupon = event.currentTarget.dataset.id;
    console.log(coupon)

      let claim = {
        user_id: user,
        coupon_id: coupon
      }
      wx.request({
        url: getApp().globalData.host + `/api/v1/claims`,
        method: 'POST',
        data: claim,
        success() {
          wx.switchTab({
          url: `/pages/claims/claims`,
          })
        },
      })
  },
})