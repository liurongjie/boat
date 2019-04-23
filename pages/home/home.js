// pages/home/home.js
var app = getApp();
var that = this;
var common = require('../../common/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamid: '1',
    sign: false, //今天是否完成签到
    index: 1,
    show_flag: 'false',
    animationData: {},
    checkCodeBtnOpacity: 1,
    checkCodeOpacity: 0,
  },
  changestatus: function() {
    this.setData({
      index: common.data.index,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.index == 2) {
      this.setData({
        show_flag: "true",
        index: 2,

      })
    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.setData({
      sign: app.globalData.sign,
    })
    console.log(app.globalData.sign)
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
  sign: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        sign: app.globalData.sign,
      })

    }, 800) //延迟时间 

  },
  onGotUserInfo: function(e) {

    app.globalData.nickname = e.detail.userInfo.nickName //这个nickName1是信息获取，不能小写
    app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
    app.globalData.gender = e.detail.userInfo.gender
    app.login();


    var animation = wx.createAnimation({
      transformOrigin: "100% 20%",
      duration: 1000,
      opacity: "1 0",
      timingFunction: "ease-in",
      delay: 0
    });

    animation.opacity(1).translateY(-1200).step();



    this.setData({
      checkCodeBtnOpacity: 0,
      animationData: animation.export(),

    })




    var that = this;
    setTimeout(function() {
      console.log("等待动画运行结束")

      that.setData({
        show_flag: 'true'
      })

    }, 1000) //延迟时间 




  },
})