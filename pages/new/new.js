// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // New Coupon Submission
  formSubmit: function (e) {
    //...
    console.log('data', e)
    let shop_name = e.detail.value.shop_name;
    let address = e.detail.value.address;
    let contacts = e.detail.value.contacts;
    let name = e.detail.value.name;
    let offer = e.detail.value.offer;
    let validity = e.detail.value.validity;
    let shop_info = e.detail.value.shop_info;

    let coupon = {
      shop_name: shop_name,
      address: address,
      contacts: contacts,
      name: name,
      offer: offer,
      validity: validity,
      shop_info: shop_info,
      user_id: getApp().globalData.userId
    }

    // Post data to API
    wx.request({
      // url: `https://coffee-in-xalabam.herokuapp.com/api/v1/coupons`,
      url: `http://localhost:3000/api/v1/coupons`,
      method: 'POST',
      data: {coupon: coupon},
      success() {
        // redirect to index page when done
        wx.reLaunch({
          url: '/pages/coupons/coupons'
        });
      }
    })
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

  }
})