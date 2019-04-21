// pages/pro_map/pro_map.js

var app=getApp();
var common = require("../../common/index.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      // iconPath: '/resources/others.png',
      id: 0,
      latitude: "",
      longitude: "",
   
      height: "",
    }],
    data_list: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data_list: common.currentData,
    })
    console.log("地图页信息：", this.data.data_list)

    this.setData({
      height: app.globalData.h,
      markers: [{
        latitude: this.data.data_list.production__merchant__latitude,
        longitude: this.data.data_list.production__merchant__longitude,
      }],

    })
    console.log("map_height",this.data.height)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  back: function () {
    var app = getApp();
    app.buy_index = 1;
    wx.navigateTo({
      url: '/pages/toboat/toboat',
    })
  },
})