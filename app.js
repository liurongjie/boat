//app.js
var common = require("/common/index.js")
App({
  list: 1,
  url: 'https://xiaoyibang.top:8002', //后台
  buy_index: 1,
  getInfo_flash: 1, //1是需要上船动画，0是不需要
  onLaunch: function() {
    var that = this;
    //身份信息获取



    
    //获取屏幕尺寸
    that.getsystem();0
    that.gethomelist(this.url + '/dajia/home');
    that.getuserinformation();
    that.getorderlist();
    this.sign();

  },
  getsystem() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.globalData.h = res.windowHeight;
        that.globalData.w = res.windowWidth;
        let reg = /ios/i;
        if (reg.test(res.system)) {
          that.globalData.pt = res.statusBarHeight;
          that.globalData.sh = 44;
        } else {
          that.globalData.pt = res.statusBarHeight;
          that.globalData.sh = 48;
        }
      },
    });

  },
  gethomelist: function(url) {
    //首页商品信息
    wx.request({
      url: url,
      data: {
        'teamid': 1,
      },
      success: (res) => {
        common.homelist = res.data;
        console.log(common.homelist)
      }
    })
  },
  sign: function() {
    var information = wx.getStorageSync('sign')
    var date = new Date();
    var day = date.getDate();
    // console.log(information)
    // console.log(day)
    if (information) {
      if (information.day != day) {
        this.globalData.sign = false;
        if (day - information.date == 1) {
          this.globalData.lastday = information.lastday;

        } else {
          this.globalData.lastday = 0;
        }

      } else {
        this.globalData.sign = true;
      }
    } else {
      this.globalData.sign = false;
      this.globalData.lastday = 0;
    }

  },
  //登陆接口，输入code返回用户相关信息
  login: function(url) {
    var that = this;
    // if (!that.globalData.userid) {
    wx.login({
      success: res => {
        wx.request({
          url: 'https://xiaoyibang.top:8002/dajia/login',
          data: {
            'nickname': that.globalData.nickname,
            'gender': that.globalData.gender,
            'code': res.code,
            'pic': that.globalData.avatarUrl
          },
          success: (res) => {
            console.log("用户信息", res.data)
            var information = {
              'userid': res.data.userid,
              'teamname': res.data.team_name,
              'name': res.data.name,
              'number': res.data.number,
              'status': res.data.status,
              'nickname': that.globalData.nickname,
              'avatarUrl': that.globalData.avatarUrl,
              'account': res.data.account,
            }
            wx.setStorageSync('information', information)
            this.getuserinformation();
          },
        })
      }
    })
    // }

  },
  //从缓存中提取用户信息
  getuserinformation: function() {
    var information = wx.getStorageSync('information')
    if (information.status == 0) {
      this.globalData.status = information.status;
      this.globalData.userid = information.userid;
      this.globalData.avatarUrl = information.avatarUrl;
      this.globalData.nickname = information.nickname;
    } else {
      this.globalData.status = information.status;
      this.globalData.userid = information.userid;
      this.globalData.name = information.name;
      this.globalData.avatarUrl = information.avatarUrl;
      this.globalData.time = information.number;
      this.globalData.teamname = information.teamname;
      this.globalData.account = information.account;
    }
    console.log("用户信息", this.globalData)
  },
  //获取用户订单信息
  getorderlist: function() {
    var url = this.url + '/dajia/orderlist';
    var that = this;
    wx.request({
      url: url,
      data: {
        'userid': that.globalData.userid,
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
    status: 0, //是否实名认证
    userid: '',
    name: '',
    account: 0, //账户贝壳
    teamname: '',
    time: '',



    nickname: '',
    avatarUrl: '',
    gender: 0,


    userInfo: null,
    h: '',
    w: '',
    pt: 20, //导航状态栏上内边距
    sh: 44, //导航状态栏高度


    sign: true, //是否签到
    lastday: 0, //连续签到天数


  }
})