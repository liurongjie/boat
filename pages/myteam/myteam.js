// pages/myteam/myteam.js
var app=getApp();
var common=require('../../common/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  index:1,
  showmodel:false,
   data:[
     {
      //  pic: '/static/3.png',
      //  name: '龙长飞',
      //  desc:'2016级 遥感信息工程学院',
      //  date:'2019/04/20',
      //  c:'船长'
     }
   ]
  },
se1:function(){
  this.setData({
    index:1,
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
  bac:function(){
    this.setData({
      showmodel:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // wx.request({
      //   url: app.url +'/dajia/scancomment',
      // })

      wx.request({
        url: app.url + '/dajia/getperiod',
        data: {
          'orderid': 34,
        },
        success: (res) => {
          // common.homelist = res.data;
          console.log(res.data)
        }
      })
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


  backto_teamcut:function(){
    wx.navigateBack({
      delta: 1
    });
  }
})