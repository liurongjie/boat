// pages/myteam/myteam.js

var util = require("../../utils/util.js");
var app = getApp();
var common = require('../../common/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member_number: 1,
    index: 1,
    showmodel: false,
    data: [{}],
    //  ,
    //  {
    //    pic: '/static/c3.jpg',
    //    name: 'gengji',
    //    desc: '2016级 遥感信息工程学院',
    //    date: '2019/04/20',
    //    c: '大副'
    //  },


  },
  se1: function () {
    this.setData({
      index: 1,
      showmodel: true
    })
  },
  se2: function () {
    this.setData({
      index: 2,
      showmodel: true
    })
  },
  se3: function () {
    this.setData({
      index: 3,
      showmodel: true
    })
  },
  se4: function () {
    this.setData({
      index: 4,
      showmodel: true
    })
  },
  se5: function () {
    this.setData({
      index: 5,
      showmodel: true
    })
  },
  bac: function () {
    this.setData({
      showmodel: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: app.url +'/dajia/scancomment',
    // })
    // console.log(options)
    // wx.request({
    //   url: app.url + '/dajia/orderdetail',
    //   data: {
    //     'steamid': options.steamid,
    //   },
    //   success: (res) => {
    //     // common.homelist = res.data;
    //     console.log("团员",res.data)
    //     this.setData({
    //       data:res.data.onecut,
    //       member_number: res.data.onecut.length
    //     })

    //   }
    // })
    this.setData({
      data: common.onecut,
      member_number: common.onecut.length
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //需要写在这个函数中
    //这个data不敢改了，tql
    let data = this.data.data
    for (var i = 0; i < data.length; i++) {
      data[i].membership__time = util.js_date_time1(this.data.data[i].membership__time)

      if (i == 0)
        data[i].c = '船长'
      else if (i == 1)
        data[i].c = '大副'
      else if (i == 2)
        data[i].c = '二副'
      else if (i == 3)
        data[i].c = '水手长'
      else if (i == 4)
        data[i].c = '轮机长'

      this.setData({ data })
    }
    console.log("船员", this.data.data)

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


  backto_teamcut: function () {
    wx.navigateBack({
      delta: 1
    });
  }
})