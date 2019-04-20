//app.js
var common=require("/common/index.js")
App({
  list:1,
  buy_index:1,
  onLaunch: function () {
    var that=this;
    //身份信息获取
    
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
   


    //获取屏幕尺寸
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.h=res.windowHeight;
        that.globalData.w = res.windowWidth;
      },
    });
    that.getuserinformation();
    that.getorderlist();
    this.sign();
    
  },
  sign:function(){
    var information=wx.getStorageSync('sign')
    var date=new Date();
    var day=date.getDate();
    console.log(information)
    console.log(day)
    if(information){
      if(information.day!=day){
        this.globalData.sign=false;
        if(day-information.date==1){
          this.globalData.lastday=information.lastday;
          
        }
        else{
          this.globalData.lastday=0;
        }

      }
      else{
        this.globalData.sign=true;
      }
    }
    else{
      this.globalData.sign = false;
      this.globalData.lastday = 0;
    }

  },
  login:function(){
    var that=this;
    if (!that.globalData.openid) {
      wx.login({
        success: res => {

          wx.request({
            url: 'https://xiaoyibang.top:8001/dajia/login',
            data: {
              'nickname': that.globalData.nickName,
              'gender': that.globalData.gender,
              'code': res.code,
              'pic': that.globalData.avatarUrl
            },
            success: (res) => {
              wx.setStorageSync('information', res.data)
              this.getuserinformation(); 
            },
          })
        }
      })
    }
   
  },
  getuserinformation:function(){
    var information = wx.getStorageSync('information')
    if (information.status == 0) {
      this.globalData.status = information.status;

      this.globalData.openid = information.openid;
    }
    else {
      this.globalData.status = information.status;
      this.globalData.openid = information.openid;
      this.globalData.name = information.name;
      this.globalData.time = information.number;
      this.globalData.teamname = information.team_name;
    }
  },
  getorderlist:function(){
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/orderlist',
      data: {
        'openid': that.globalData.openid,
      },
      success: (res) => {

        if (res.data.response) {
          console.log(res.data.period);
          common.orderlist = res.data.period;
        }
      }
    })
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



    sign:true,//是否签到
    lastday:0,//连续签到天数
   
    
  }
})