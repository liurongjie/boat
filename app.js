//app.js
App({
  list:1,
  index:1,
  buy_index:1,
  onLaunch: function () {
    var that = this;
    var information= wx.getStorageSync('information')
    if(information.status==0){
      that.globalData.status=information.status;
      that.globalData.openid=information.openid;
    }
    else{
      that.globalData.status = information.status;
      that.globalData.openid = information.openid;
      that.globalData.name=information.name;
      that.globalData.time=information.number;
      that.globalData.teamname = information.team_name;
    }
    console.log(information)
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.h=res.windowHeight;
        that.globalData.w = res.windowWidth;
      },
    });
  


   

  },



  globalData: {
    status:0,
    openid: '',
    name:'',
    teamname:'',
    time:'',

    userInfo: null,
    h:'',
    w:'',
    nickName:'',
    avatarUrl:'',
    gender:0,
    
  }
})