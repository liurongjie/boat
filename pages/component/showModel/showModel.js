// pages/component/showModel/showModel.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showModel: true,

  },


  /**
   * 组件的方法列表
   */
  methods: {
    onGotUserInfo(e) {

      console.log("正在运行login")
      app.globalData.nickname = e.detail.userInfo.nickName
      app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
      app.globalData.gender = e.detail.userInfo.gender
      this.backlogin();


    },
    //后台登陆
    backlogin: function(url) {
      var that = this;
      if (!app.globalData.userid) {
        wx.login({
          success: res => {

            wx.request({
              url: 'https://xiaoyibang.top:8002/dajia/login',
              data: {
                'nickname': app.globalData.nickname,
                'gender': app.globalData.gender,
                'code': res.code,
                'pic': app.globalData.avatarUrl
              },
              success: (res) => {
                this.setData({
                  showModel: false,
                })
                console.log("用户信息", res.data)
                var information = {
                  'userid': res.data.userid,
                  'teamname': res.data.team_name,
                  'name': res.data.name,
                  'number': res.data.number,
                  'status': res.data.status,
                  'nickname': app.globalData.nickname,
                  'avatarUrl': app.globalData.avatarUrl,
                }
                wx.setStorageSync('information', information)
                app.globalData.userid = res.data.userid;
                app.globalData.teamname = res.data.team_name;
                app.globalData.name = res.data.name;
                app.globalData.number = res.data.number;
                app.globalData.status = res.data.status;
              },
            })
          }
        })
      }

    },

  },
  ready: function() {
    if (app.globalData.userid) {
      success: (res) => {
        this.setData({
          showModel: false,
        })

      }
    }
  },
})