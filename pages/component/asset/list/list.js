// pages/component/asset/list/list.js
var app = getApp();
var common = require("../../../../common/index.js");
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
    name: '',
    pic: '',
    account: '',
    teamname: '',
    time: '',
    list: 1,
    h: '',
    h1: '',
    h2: ''
  },
  
  pageLifetimes: {
    show() {
      console.log("正在执行生命周期")
      this.setData({

        account: app.globalData.account,
      })
      // 页面被展示
    },
   
  },
  onShareAppMessage: function () {
    return {
      title: 'BOAT',
      path: 'pages/verify/verify?userid=' + app.globalData.userid,
      success: (res) => {
        console.log("转发成功", res);

      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }

  },
  ready: function() {
    console.log("beike" + app.globalData.account)
    this.setData({
      name: app.globalData.name,
      pic: app.globalData.avatarUrl,
      teamname: app.globalData.teamname,
      time: app.globalData.time,
      account: app.globalData.account,
    })
    var h = app.globalData.h;
    var h1 = h;
    h = (12 / 640) * h;
    h1 = (250 / 800) * h1;
    var h2 = h + 15;
    this.setData({
      h: h,
      h1: h1,
      h2: h2
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    b: function() {
      wx.navigateTo({
        url: '../../pan/page',
      })
    },
    chooseorderstatus: function(e) {
      common.chooseorderstatus(e.currentTarget.dataset.status);
      app.list = 2;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist2: function() {

      app.list = 1;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist4: function() {
      app.list = 3;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist5: function() {
      app.list = 4;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    },
    changelist6: function() {
      app.list = 5;
      wx.navigateTo({
        url: "/pages/setting/setting"
      })
    }
  }
})