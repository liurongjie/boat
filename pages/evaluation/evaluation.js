// pages/evaluation/evaluation.js


var common = require("../../common/index.js")
var evalu_number = '14';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_list: {},
    evaluation_list: {},
    remark_pic:0,
    remark_pic_array: [ { picUrl: '/static/c1.jpg' }, { picUrl: '/static/c1.jpg' }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data_list: common.currentData,
      evaluation_list: common.currentEvaluation,
      remark_pic: common.currentEvaluation
    })
    console.log("[page3]获取公共js数据", this.data)
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



  lower: function () {
    var result = common.currentEvaluation; //本地
    var result2 = [];

    //  scancomment

    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/scancomment',
      data: {
        'number': evalu_number,
        'periodid': this.data.data_list.periodid,

      },
      success: (res) => {

        console.log(res.data)
      },
    })

    var resArr = common.currentEvaluation; //云端
    for (let i = result.length; i < result.length + 5; i++) {
      result2.push(resArr[i]);
    };

    var cont = result.concat(result2);
    console.log(resArr.length);
    if (cont.length >= resArr.length) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 1000
      });
      return false;
    } else {

      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },

  
})