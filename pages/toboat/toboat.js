// pages/toboat/toboat.js

var app = getApp();
var common = require("../../common/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',//后台
    buy_index: "",
    latitude: 30.41,
    longitude: 114.29,
    evaluation: {},
    pay: true,
    status: 1,
    text: "我要上船",
    popup: true,
    show_model: true,
   picture_production: [],
    start_time: '',
    end_time: '',
    now:'',
    date_day:"",
    date_hour: "",
    date_minute: "",
    date_second: "",
    // evaluationlist :[],
    data_list:{},
    pic_producation:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    console.log(common.currentData)
    this.setData({
      buy_index: app.buy_index,
      url:app.url,

    })
    this.checkorder();
    this.setData({
      data_list: common.currentData,
      start_time: common.currentData.starttime,
      end_time: common.currentData.endtime,
    })



    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var temp;
    temp = Math.ceil((timestamp - this.data.start_time) / (this.data.end_time - this.data.start_time) * 100);
    var date = this.data.end_time - timestamp;
    var date_day = parseInt(date / 3600 / 24);
    var date_hour = parseInt((date - date_day * 24 * 3600) / 3600);
    var date_min = parseInt((date - date_hour * 3600 - date_day * 3600 * 24) / 60);
    var date_sec = parseInt(date - date_hour * 3600 - date_day * 3600 * 24 - date_min * 60);
    this.setData({
      now: timestamp,
      percent: temp,
      date_day: date_day,
      date_hour: date_hour,
      date_minute: date_min,
      date_second: date_sec,
      pic_producation: 'https://xiaoyibang.top:8002/uploads/' + this.data.data_list.production__introductionpic,
    })


    var that = this
    wx.request({
      url: 'https://xiaoyibang.top:8002/dajia/firstcomment',
      data: {
        'productionid': common.currentData.production,
        // this.pro_data.production_id
      },
      success: (res) => {
        that.setData({
          evaluationlist: res.data.data
        })
        common.currentEvaluation = this.data.evaluationlist
      }
    })




    var picture_production_url = [];

    var url_temp1 = 'https://xiaoyibang.top:8002/uploads/' + this.data.data_list.production__merchant__pic1
    picture_production_url.push(url_temp1)
    var url_temp2 = 'https://xiaoyibang.top:8002/uploads/' + this.data.data_list.production__merchant__pic2
    picture_production_url.push(url_temp2)
    var url_temp3 = 'https://xiaoyibang.top:8002/uploads/' + this.data.data_list.production__merchant__pic3
    picture_production_url.push(url_temp3)

    this.setData({
      picture_production: picture_production_url
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var util = require("../../utils/util.js");
    let evaluationlist = this.data.evaluationlist
    evaluationlist[0].time = util.js_date_time(this.data.evaluationlist[0].time)
    this.setData({ evaluationlist })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.checkorder();

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
  //检查是否购买
  checkorder: function () {
    for (var i = 0; i < common.orderlist.length; i++) {
      if (common.currentData.periodid == common.orderlist[i].period_id && common.orderlist[i].status != 0) {
        common.currentorder = common.orderlist[i];
        this.setData({
          status: 2
        })
        break;
      }
    }


  },
  goback: function() {

    wx.navigateBack({
      delta: 1,
    })

  },
  buy: function () {
    //是否实名认证
    if (app.globalData.status == 0) {
      wx.showToast({
        title: '未认证正在跳转',
        duration: 1000,
        icon: 'loading',
      })

      setTimeout(function () {
        wx.navigateTo({
          url: "/pages/verify/verify",
        }, 1000)
      })
    } else { //已认证的用户，跳出支付对话框，支付完成后弹出支付完成对话框。点击对话框或关闭后跳转自己的small_boat
      var that = this;
      switch (that.data.status) {

        case 1:
          //我要上船
          that.buyalone(this.data.url + '/dajia/buyalone');
          that.hidePopup(false);
          break;
        case 2:
          //看我的船
          wx.navigateTo({
            url: "/pages/teamcut/teamcut?steamid=" + common.currentorder.steam_id + '&orderid=' + common.currentorder.orderid +
              '&avatarUrl=' + app.globalData.avatarUrl + '&nickName=' + app.globalData.nickName + '&openid=' + app.globalData.openid
          })
          break;

      }
    }

  },
  
  buyalone: function(url) {
    var that = this;
    console.log(app.globalData.openid)
    wx.request({
      url: url,
      data: {
        "userid": app.globalData.userid,
        "periodid": common.currentData.periodid,
      },
      success: (res) => {
        common.currentorder.steam_id = res.data.steamid;
        common.currentorder.orderid = res.data.orderid;
        app.getorderlist();

      }
    })


  },
  buytogether: function (url) {
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

  pro_map: function () {
    wx.navigateTo({
      url: '/pages/pro_map/pro_map',
    })
  },

  pro_evaluation: function () {
    wx.navigateTo({
      url: '/pages/evaluation/evaluation',
    })
  },
  


})