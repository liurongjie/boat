// pages/home/home.js
var app=getApp();
var that=this;
var common=require('../../common/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamid:'0000000',
    index:1,
    show_flag: 'false',
    animationData:{},
    checkCodeBtnOpacity:1,
    checkCodeOpacity:0,
  },
  changestatus:function(){
    this.setData({
      index: common.data.index,
    })
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
    this.setData({index:app.index});
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

  onGotUserInfo: function (e) {
    var code;
    app.globalData.nickName = e.detail.userInfo.nickName
    app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
    app.globalData.gender = e.detail.userInfo.gender
    if(!app.globalData.openid){
      wx.login({
        success: res => {
          code = res.code;
          wx.request({
            url: 'https://xiaoyibang.top:8001/dajia/login',
            data: {
              'nickname': app.globalData.nickName,
              'gender': app.globalData.gender,
              'code': res.code,
              'pic': app.globalData.avatarUrl
            },
            success: (res) => {
              wx.setStorage({
                key: 'information',
                data: res.data,
              })

            },
          })
        }
      })
    }
    

    var animation =wx.createAnimation({
      transformOrigin:"100% 20%",
      duration:1000,
      opacity:"1 0",
      timingFunction:"ease-in",
      delay:0
    });

    animation.opacity(1).translateY(-1200).step();

    

    this.setData({
      checkCodeBtnOpacity:0,
      animationData:animation.export(),
      
    })




    var that =this;
    setTimeout(function () {
      console.log("等待动画运行结束")

      that.setData({
        show_flag: 'true'
      })

    }, 500) //延迟时间 


    

  },
})