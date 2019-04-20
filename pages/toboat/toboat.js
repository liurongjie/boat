// pages/toboat/toboat.js

var app = getApp();
var common = require("../../common/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buy_index: "",
    latitude: 30.41,
    longitude: 114.29,
    evaluation: {},
    pay: true,
    status: 1,
    text: "我要上船",
    popup: true,
    show_model: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    console.log(common.currentData)
    this.setData({
      buy_index: app.buy_index,

    })
    this.checkorder();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  changestatus: function() {
    console.log("changed to ", app.buy_index)
    this.setData({
      buy_index: app.buy_index
    })

  },
  goback: function() {

    wx.navigateBack({
      delta: 1,
    })

  },
  buy: function() {

    if (app.globalData.status == 0) {
      wx.showToast({
        title: '未认证正在跳转',
        duration: 1000,
        icon: 'loading',
      })

      setTimeout(function() {
        wx.navigateTo({
          url: "/pages/verify/verify",
        }, 1000)
      })
    } else { //已认证的用户，跳出支付对话框，支付完成后弹出支付完成对话框。点击对话框或关闭后跳转自己的small_boat
      var that = this;
      switch (that.data.status) {

        case 3:
          //看我的船
          wx.navigateTo({
            url: "/pages/teamcut/teamcut?steamid=" + common.currentorder.steam_id + '&orderid=' + common.currentorder.orderid +
              '&avatarUrl=' + app.globalData.avatarUrl + '&nickName=' + app.globalData.nickName + '&openid=' + app.globalData.openid
          })
          break;

        case 1:
          //我要上船
          that.buyalone();
          that.checkorder();
          console.log("ddd")
          that.hidePopup(false);
          




          break;
      }
    }

  },
  checkorder: function() {

    for (var i = 0; i < common.orderlist.length; i++) {
      if (common.currentData.periodid == common.orderlist[i].period_id && common.orderlist[i].status != 0) {

        common.currentorder = common.orderlist[i];
        this.setData({
          status: 3
        })
        break;
      }
    }


  },
  buyalone: function() {
    var that = this;
    console.log(app.globalData.openid)
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/buyalone',
      data: {
        "openid": app.globalData.openid,
        "periodid": common.currentData.periodid,
      },
      success: (res) => {
        common.currentorder.steam_id = res.data.steamid;
        common.currentorder.orderid = res.data.orderid;
        app.getorderlist();

      }
    })


  },

  hidePopup(flag = true) {
    this.setData({
      "popup": flag
    });


  },

  backtopages: function(options) {
    console.log("用户提交评价后触碰页面", options)
    wx.navigateTo({
      url: "/pages/teamcut/teamcut?steamid=" + common.currentorder.steam_id + '&orderid=' + common.currentorder.orderid +
        '&avatarUrl=' + app.globalData.avatarUrl + '&nickName=' + app.globalData.nickName + '&openid=' + app.globalData.openid
    })
  },


  buytogether: function() {
    console.log("运行buytogether")
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/buytogether',
      data: {
        "openid": app.globalData.openid,
        "periodid": common.currentData.periodid,
        "steamid": common.data.steamid,
      },
      success: (res) => {

        if (res.data.success) {
          common.currentorder.steam_id = res.data.steamid;
          common.currentorder.orderid = res.data.orderid;
          that.setData({
            status: 3
          })
          app.getorderlist();

        } else {
          wx.showToast({ //如果全部加载完成了也弹一个框
            title: res.data.reason,
            icon: 'success',
            duration: 300
          });
          that.setData({
            status: 2
          })
        }


      }
    })


  }


})