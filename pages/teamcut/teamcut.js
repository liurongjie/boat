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
 
    res: [{
        "id": 31,
        "tname": "云顶工坊",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 3,
        "tname": "Jess MLR",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 2,
        "tname": "洛洛",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },

      {
        "id": 4,
        "tname": "武大吴彦祖",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 5,
        "tname": "武大小猪",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 6,
        "tname": "武大小猪",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 7,
        "tname": "武大小猪",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 8,
        "tname": "武大小猪",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
      {
        "id": 9,
        "tname": "武大小猪",
        "pic": "/static/icon3.jpg",
        "cutprice": "124"
      },
    ],
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
    process: 40, //0到90
    day: '14',
    hour: '20',
    minute: '43',
    second: '10',

    list: [],
    hasMore: true, //列表是否有数据未加载
    page: 1,
    size: 8, //每页8条数据

  },
  lower: function() {
    var result = this.data.res;
    var resArr = jsonData.dataList;
    for (let i = 0; i < 10; i++) {
      result.push(resArr[i]);
    };
    
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 100) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      this.setData({
        res: result,
      })
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
  clickPerson: function() {
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
  mySelect: function(e) {

    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  back: function() {
    wx.navigateBack({
      delta: 1
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.request({
      url: '',
      data: {

      },
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          lists: res.data
        })
      },
      fail: function() {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          lists: jsonData.dataList
        })

      }
    });

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

  }
})