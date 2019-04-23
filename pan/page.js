var app = getApp()
Page({
  data: {
    h: '',//高度
    t: 1,//几等奖0是特等奖  1:运动相机 2：英雄皮肤  3：100贝壳 4：5贝壳
    //5：和开发者吃饭 6：清养生茶  7：樱花茶杯  0：IPHONEX
    award: '',//名字
    account:'',
    circleList: [],//圆点数组
    awardList: [],//奖品数组
    colorCircleFirst: '#FFDF2F',//圆点颜色1
    colorCircleSecond: '#FE4D32',//圆点颜色2
    colorAwardDefault: '#F5F0FC',//奖品默认颜色
    colorAwardSelect: '#ffe400',//奖品选中颜色
    indexSelect: 0,//被选中的奖品index
    isRunning: false,//是否正在抽奖
    imageAward: [
      '/static/8.jpg',
      '/static/1.jpg',
      '/static/2.jpg',
      '/static/3.jpg',
      '/static/4.jpg',
      '/static/5.jpg',
      '/static/6.jpg',
      '/static/7.jpg',


    ],//奖品图片数组

    aa: [//获奖名单
      {

        nickName: "刘**",

        reward: "IPHONEX"

      },

      {

        nickName: "李**",

        reward: "IPHONEX"

      },

      {

        nickName: "龙**",

        reward: "IPHONEX"

      },

      {

        nickName: "基**",

        reward: "IPHONEX"

      },

      {

        nickName: "于**",

        reward: "5贝壳"

      },



    ],

  },
  onReady: function () {
    this.setData({
      h: app.globalData.h,
      account:app.globalData.account,
    });
    console.log(this.data.h)
  },
  onLoad: function () {
    var _this = this;
    //圆点设置
    var leftCircle = 7.5;
    var topCircle = 7.5;
    var circleList = [];
    for (var i = 0; i < 24; i++) {
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      } else {
        return
      }
      circleList.push({ topCircle: topCircle, leftCircle: leftCircle });
    }
    this.setData({
      circleList: circleList
    })
    //圆点闪烁
    setInterval(function () {
      if (_this.data.colorCircleFirst == '#FFDF2F') {
        _this.setData({
          colorCircleFirst: '#FE4D32',
          colorCircleSecond: '#FFDF2F',
        })
      } else {
        _this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#FE4D32',
        })
      }
    }, 500)
    //奖品item设置
    var awardList = [];
    //间距,怎么顺眼怎么设置吧.
    var topAward = 25;
    var leftAward = 25;
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 25;
        leftAward = 25;
      } else if (j < 3) {
        topAward = topAward;
        //166.6666是宽.15是间距.下同
        leftAward = leftAward + 166.6666 + 15;
      } else if (j < 5) {
        leftAward = leftAward;
        //150是高,15是间距,下同
        topAward = topAward + 150 + 15;
      } else if (j < 7) {
        leftAward = leftAward - 166.6666 - 15;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 15;
      }
      var imageAward = this.data.imageAward[j];
      awardList.push({ topAward: topAward, leftAward: leftAward, imageAward: imageAward });
    }
    this.setData({
      awardList: awardList
    })
  },
  mx: function () {
    wx.navigateTo({
      url: '/mx/mx',
    })
  },
  //开始游戏
  startGame: function (prize) {
    if (this.data.isRunning) return
    this.setData({
      isRunning: true
    })
    prize = Number(prize);
    console.log(prize);
    var t = prize;
    //奖项确定
    var _this = this;
    var indexSelect = 0
    var i = 0;
    var timer = setInterval(fn, (i + 100));
    function fn() {
      indexSelect++;
      //这里我只是简单粗暴用y=30*x+200函数做的处理.可根据自己的需求改变转盘速度
      i += 10;
      clearInterval(timer);
      timer = setInterval(fn, (i + 100));
      if (i > 300 && (indexSelect % 8) == t) {
        //去除循环
        clearInterval(timer)
        //获奖提示
        switch (prize) {
          case 1:
            _this.setData({
              award: '运动相机'
            })
            break;

          case 2:
            _this.setData({
              award: '英雄皮肤'
            })
            break;
          case 3:
            _this.setData({
              award: '樱花茶杯'
            })
            break;
          case 4:
            _this.setData({
              award: '100贝壳'
            })
            break;
          case 5:
            _this.setData({
              award: '轻养身茶'
            })
            break;
          case 6:
            _this.setData({
              award: '和开发者共进午餐'
            })
            break;
          case 7:
            _this.setData({
              award: '5贝壳'
            })
            break;
        }
        wx.showModal({
          title: '恭喜您',
          content: '获得了' + (_this.data.award) + "",
          showCancel: false,//去掉取消按钮
          success: function (res) {
            if (res.confirm) {
              _this.setData({
                isRunning: false
              })
            }
          }
        })
      }
      indexSelect = indexSelect % 8;
      _this.setData({
        indexSelect: indexSelect
      })
    }
  },
  getprize: function () {
    var that = this;
    wx.request({
      url: app.url + "/dajia/getgift",
      data: {
        "userid": app.globalData.userid,
      },
      success: (res) => {
        if (res.data.prize) {
          that.startGame(res.data.prize);
          
          setTimeout(function(){
            that.setData({
              account: res.data.account,
            })

          },7000)
          app.globalData.account=res.data.account;

        }

        else if (res.data.error) {
          wx.showToast({
            title: '您的贝壳不足',
            icon: "loading",
          })
        }
        else {
          wx.showToast({
            title: '网络错误',
            icon: "loading",
          });
        }


      },
      fail: (res) => {
        wx.showToast({
          title: '网络错误',
          icon: "success",
        });
      }
    })

  },

})
