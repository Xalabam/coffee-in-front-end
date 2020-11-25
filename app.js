App({
  onLaunch: function() {
    const host = 'http://localhost:3000/'
    let page = this
    console.log('beginning login')
    wx.login({
      success: (res) => {
        console.log(res)
      // insert next code here
      wx.request({
        url: host + 'login',
        method: 'post',
        data: {
          code: res.code
        },
      // insert next code here
      success: (res) => {
        console.log(res.data)
        this.globalData.userId = res.data.user.id
        console.log(this)
      }
      
      
      })
      }
    })
  },
  globalData: {}

})

