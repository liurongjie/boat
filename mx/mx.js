// mx/mx.js
var app = getApp()
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    et:[
      {
        date: '-2019-4-17-',
        object:'完成认证',
        number:'50'
      },
      {
        date: '-2019-4-18-',
        object: '签到',
        number: '10'
      }, {
        date: '-2019-4-18-',
        object: '签到',
        number: '10'
      }, {
        date: '-2019-4-18-',
        object: '签到',
        number: '10'
      },
      {
        date: '-2019-4-18-',
        object: '签到',
        number: '10'
      },
      {
        date: '-2019-4-18-',
        object: '签到',
        number: '10'
      },
      {
        date: '-2019-4-18-',
        object: '签到',
        number: '10'
      },
      {
        date: '-2019-4-17-',
        object: '完成认证',
        number: '50'
      },
      {
        date: '-2019-4-17-',
        object: '完成认证',
        number: '50'
      },
      {
        date: '-2019-4-17-',
        object: '完成认证',
        number: '50'
      },
      {
        date: '-2019-4-17-',
        object: '完成认证',
        number: '50'
      },
      {
        date: '-2019-4-17-',
        object: '完成认证',
        number: '50'
      },
      ],
    h: '',//高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      h: app.globalData.h
    });
    this.getdetail();
  },
  getdetail:function(){
    wx.login({
      success: res => {
        wx.request({
          url: 'https://xiaoyibang.top:8002/dajia/accountdetail',
          data: {
            'userid': app.globalData.userid,
          },
          success: (res) => {
            console.log(res.data)
          },
        })
      }
    })

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

  }
})