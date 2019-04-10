// pages/teamcut/teamcut.js
var app = getApp();

var common = require('../../common/index.js');

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

    periodid:'',
    nickName: '',
    avatarUrl: '',
    openid: '',
    btn_text_left:['分享好友砍价','砍这好友一刀','帮Ta召唤好友'],
    btn_text_right: ['查看拼团成员', '我要立即参团', '我要立即参团'],
    btn_index:0,
    selectPerson: true,
    firstPerson: '武汉大学',
    selectArea: false,
    process: 40, //0到90
    day: '14',
    hour: '20',
    minute: '43',
    second: '10',
    t:'share',
    list: [],
    hasMore: true, //列表是否有数据未加载
    page: 1,
    size: 8, //每页8条数据
    flag_hhh:'',

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
    if(this.data.btn_index==1)
    {
      this.setData({
        t: 'null'
      })
    }else{
      console.log("分享功能",this.data.t)
    }
  

    wx.request({
      url: 'https://xiaoyibang.top:8001/dajia/orderdetail',
      data: {
        'steamid':'o-Iml5OCySa6pg3Wc99VZp_ggljU20190409215716',
      },
      success: (res) => {
       console.log(res)

      }
    })
    // if (this.isEmptyObject(options)) {
    //   console.log('options:', options, "is empty")
    // }
    // else {
    //   console.log('options:', options, "is not empty")
    // }


    console.log("onLoad:",options)

    if (!this.isEmptyObject(options)){
      this.setData({
        periodid: options.periodid,
        nickName: options.nickName,
        avatarUrl: options.avatarUrl,
        openid: options.openid,
        btn_index:1,
  
      })
      console.log("options不为空")
    }
    else{
      this.setData({
        btn_index: 0,

        nickName: app.globalData.nickName,
        avatarUrl: app.globalData.avatarUrl ,
     
      })
      console.log("options为空")
    }
     
  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  

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

    // common.currentData
    console.log(common.currentData.periodid)
    // this.overhhh()

    switch (this.data.btn_index) {
      case 0:
          
          return {
            title: 'BOAT',
            path: 'pages/teamcut/teamcut?periodid=' +
              common.currentData.periodid +
              '&' + 'nickName=' + app.globalData.nickName +
              '&' + 'avatarUrl=' + app.globalData.avatarUrl +
              '&' + 'openid=' + app.globalData.openid,

            // imageUrl: "/images/1.jpg", 
            success: (res) => {
              console.log("转发成功", res);

            },
            fail: (res) => {
              console.log("转发失败", res);
            }
          }
          break;

   
      case 2:
          return {
            title: 'BOAT',
            path: 'pages/teamcut/teamcut?periodid=' +
              this.data.periodid +
              '&' + 'nickName=' + this.data.nickName +
              '&' + 'avatarUrl=' + this.data.avatarUrl +
              '&' + 'openid=' + this.data.openid,

            // imageUrl: "/images/1.jpg", 
            success: (res) => {
              console.log("转发成功", res);
            },
            fail: (res) => {
              console.log("转发失败", res);
            }
          }
          break;
        
      
    }

   


  },

  isEmptyObject:function (data) {
    var t;
    for (t in data)
      return !1;
    return !0
  },

  team_inview:function(){
    wx.navigateTo({
      url: '/pages/myteam/myteam',
    })
  },

  change_statue:function(){
      if(this.data.btn_index==0)
      {
        console.log(this.data.btn_index)
        
      }
      else if (this.data.btn_index==1)
      {
        console.log(this.data.btn_index)
        wx.showToast({
          title: '砍了',
        })
        this.setData({
          t:'share',
          btn_index:2,
        })
      }else{
        console.log(this.data.btn_index)
      }
      
  },

  // overhhh:function(){
    
  //   if(this.data.btn_index==1)
  //   {
  //     this.setData({
  //       t: 'Name'
  //     })
  //   }
  //   else if (this.data.btn_index != 1)
  //   {
  //     this.setData({
  //       t: 'share'
  //     })
  //   }

  //   console.log("open_data", this.data.t)
  //   //t: 'groupName'
  // }


})