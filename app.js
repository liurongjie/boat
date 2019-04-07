//app.js
App({
  list:1,
  index:1,
  buy_index:1,
  order_state:0,
  onLaunch: function () {

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.windowWidth);
        // console.log(res.windowHeight);
        
        that.globalData.h=res.windowHeight;
        that.globalData.w = res.windowWidth;
      },
    });
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    
   

   

  },



  globalData: {
    userInfo: null,
    h:'',
    w:'',
    nickName:'',
    avatarUrl:'',
    gender:0,
  }
})