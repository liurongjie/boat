// pages/teamcut/teamcut.js
var app = getApp();
var jsonData = require('../../data/teamcut.js');
let loadingMore = false
let lastScollTop = 0;
let lastRequestTime = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
    process:40,//0到90
    day: '14',
    hour: '20',
    minute: '43',
    second: '10',

    list: [],
    hasMore: true,//列表是否有数据未加载
    page: 1,
    size: 8,//每页8条数据
    
  },
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  mySelect: function (e) {

    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  back:function(){
    wx.navigateBack({
      delta: 1
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: '',
      data: {

      },
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({ lists: res.data })
      },
      fail: function () {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({ lists: jsonData.dataList })

      }
    });

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

  }
})