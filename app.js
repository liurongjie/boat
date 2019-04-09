//app.js
var common=require("/common/index.js")
App({
  list:1,
  index:1,
  buy_index:1,
  onLaunch: function () {
    var that = this;
    //身份信息获取
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
    //首页商品信息
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/home',
      data: {
        'teamid':"0000000",
      },
      success: (res) => {
        common.homelist = res.data;
       
      }
    })
    //订单信息
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/orderlist',
      data:{
        'openid':that.globalData.openid,
      },
      success:(res)=>{
        
        if(res.data.response){
          console.log(res.data.period);
          common.orderlist=res.data.period;
        }
      }
    })





    //获取屏幕尺寸
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.h=res.windowHeight;
        that.globalData.w = res.windowWidth;
      },
    });
  


   

  },


  //全局变量
  globalData: {
    status:0,
    openid: '',
    name:'',
    teamname:'',
    time:'',


    nickName: '',
    avatarUrl: '',
    gender: 0,

    
    userInfo: null,
    h:'',
    w:'',
   
    
  }
})