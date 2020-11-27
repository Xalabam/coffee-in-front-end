// pages/list/list.js
Page({

  /**
   * Page initial data
   */
  data: {
 
  },
  
  /**
   * Lifecycle function--Called when page load
   */
  searchCoffee: function(e) {
    console.log(e)
    const query = e.detail.value
    const base_url = getApp().globalData.host + 'api/v1/'

    const page = this
    wx.request({
      url: base_url + 'coupons?query=' + query,
      success: function (response) {
      //  console.log('123',response)
        const coupons = response.data.coupons
        page.setData({ coupons })
      }
    })
    wx.request()
  },

  onLoad: function (options) {
    
    // const base_url = 'http://localhost:3000/api/v1/'
    // const page = this
    // wx.request({
    //   url: base_url + 'coupons',
    //   success: function (response) {
    //     // console.log(response)
    //     const coupons = response.data.coupons
    //     page.setData({ coupons })
    //   }
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  goToShow: function (event) {
    const id = event.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    
    const cafe_pics = ["https://source.unsplash.com/600x300/?cafe", "https://source.unsplash.com/600x300/?coffee", "https://source.unsplash.com/600x300/?brunch", "https://source.unsplash.com/600x300/?tea", "https://source.unsplash.com/600x300/?breakfast", "https://source.unsplash.com/600x300/?pancake", "https://source.unsplash.com/600x300/?cake"]
   
    // console.log(cafe_pic)
    // const coffee_image = 'https://source.unsplash.com/600x300/?cafe,coffee'
    const base_url = getApp().globalData.host + 'api/v1/'

    const page = this
    wx.request({
      url: base_url + 'coupons',
      success: function (response) {
      //  console.log('123',response)
        let coupons = response.data.coupons
        coupons = coupons.map(coupon => {
          let new_coupon = coupon
          new_coupon["image"] = cafe_pics[Math.floor(Math.random() * cafe_pics.length)]
          return new_coupon
        })
        console.log(111,coupons)
        page.setData({ coupons })
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