//app.js
var common=require("/common/index.js")
App({
  list:0,
  index:1,
  buy_index:1,
  order_state:0,
  onLaunch: function () {
    var that = this;
    var information= wx.getStorageSync('information')
    console.log(information)
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
    
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/orderlist',
      data:{
        'openid':that.globalData.openid,
      },
      success:(res)=>{
        if(res.data.response){
          common.orderlist=res.data.period;
        }
        console.log(res.data)
      }
    })






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