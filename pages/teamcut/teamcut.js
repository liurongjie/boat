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
    showModel: true,
    url: "https://xiaoyibang.top:8002/uploads/",
    end: false, //判定订单是否取消或者过期
    //云端获取
    period: {},
    onecut: [], //团队成员
    twocut: [], //他人砍价
    cutprice: 0,
    number: 0, //多少位朋友砍价
    res: [], //展示内容
    title: [
      '船长',
      '大副',
      '二副',
      '水手长',
      '轮机长',
    ],

    //数据缓存
    orderid: '',
    nickname: '',
    avatarUrl: '',
    steamid: '',
    openid: '',
    periodid: '',
    //状态0自我，状态1帮我砍，状态2帮好友分享
    btn_index: 1, //状态
    btn_text_left: ['分享好友砍价', '砍这好友一刀', '帮Ta召唤好友'],
    btn_text_right: ['查看拼团成员', '我要立即参团', '我要等价参团'],
    sentence: '', //展示句子
    //
    setInter: '', //定时器
    process: 40, //0到90
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
    //按钮类型
    list: [],
    hasMore: true, //列表是否有数据未加载
    page: 1,
    size: 8, //每页8条数据
    flag_hhh: '',
    realprice:0,  //实时的价格
  },
  //下拉刷新
  lower: function () {
    // var result = this.data.res;
    // var resArr = jsonData.dataList;
    // for (let i = 0; i < 10; i++) {
    //   result.push(resArr[i]);
    // };

    // var cont = result.concat(resArr);
    // console.log(resArr.length);
    // if (cont.length >= 100) {
    //   wx.showToast({ //如果全部加载完成了也弹一个框
    //     title: '我也是有底线的',
    //     icon: 'success',
    //     duration: 300
    //   });
    //   return false;
    // } else {
    //   this.setData({
    //     res: result,
    //   })
    //   wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
    //     title: '加载中',
    //     icon: 'loading',
    //   });
    //   setTimeout(() => {
    //     this.setData({
    //       res: cont
    //     });
    //     wx.hideLoading();
    //   }, 1500)
    // }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  //打算传播steamid.periodid,pic name就行
  onLoad: function (options) {
    console.log("用户id" + app.globalData.userid)
    console.log("购买详情：", options)
    this.setData({
      orderid: options.orderid,
      nickname: options.nickname,
      avatarUrl: options.avatarUrl,
      steamid: options.steamid,
      userid: options.userid,
    })
    this.checkstatus();
    this.getperiod(options.orderid);
    console.log("订单详情", common.orderlist)
    // var price = (common.orderlist.period__startprice - common.orderlist.cutprice - common.orderlist.period__cutprice).toFixed(2)
    // var price = parseFloat(this.data.period.period__startprice) - parseFloat(this.data.cutprice) - parseFloat(this.data.period.period__cutprice)
    // console.log(this.data, '现在的数据')
    // console.log(price, 'real_price', this.data.period.period__startprice, this.data.cutprice ,this.data.period.period__cutprice)
    // this.setData({
    //   realPrice:price
    // })

    
  },
  //判断是否登陆
  checkstatus: function () {
    if (!app.globalData.userid) {
      this.setData({
        showModel: true,
      })
    } else {
      this.checkmember();
      this.setData({
        showModel: false,
      })
      this.getorderdetail(this.data.steamid);


    }

  },
  //判定团队成员
  checkmember: function () {
    //是否为组团成员
    if (app.globalData.userid == this.data.userid) {
      this.setData({
        btn_index: 0,
      })
      return '';
    } else {
      this.setData({
        btn_index: 1,
      });
    }






  },
  onGotUserInfo(e) {
    console.log("正在运行login")
    app.globalData.nickname = e.detail.userInfo.nickName
    app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
    app.globalData.gender = e.detail.userInfo.gender
    this.backlogin();


  },

  //后台登陆
  backlogin: function (url) {
    var that = this;
    wx.login({
      success: res => {

        wx.request({
          url: 'https://xiaoyibang.top:8002/dajia/login',
          data: {
            'nickname': app.globalData.nickname,
            'gender': app.globalData.gender,
            'code': res.code,
            'pic': app.globalData.avatarUrl
          },
          success: (res) => {
            console.log("用户信息", res.data)
            var information = {
              'userid': res.data.userid,
              'teamname': res.data.team_name,
              'name': res.data.name,
              'number': res.data.number,
              'status': res.data.status,
              'nickname': app.globalData.nickname,
              'avatarUrl': app.globalData.avatarUrl,
            }
            wx.setStorage({
              key: 'information',
              data: information,
            });
            this.setData({
              showModel: false,
            })
            that.checkmember();
            that.getorderdetail(that.data.steamid);
            app.globalData.userid = res.data.userid;
            app.globalData.teamname = res.data.team_name;
            app.globalData.name = res.data.name;
            app.globalData.number = res.data.number;
            app.globalData.status = res.data.status;
          },
        })
      }
    })


  },

  getorderdetail: function (steamid) {
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8002/dajia/orderdetail',
      data: {
        'steamid': steamid,
      },
      success: (res) => {
        common.onecut = res.data.onecut;
        that.setData({
          onecut: res.data.onecut,
          twocut: res.data.twocut,
        })
        that.merge();

      }
    })
  },


  getperiod: function (orderid) {
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8002/dajia/getperiod',
      data: {
        'orderid': orderid,
      },
      success: (res) => {
        res.data[0].production__logo = that.data.url + res.data[0].production__logo;
        console.log('期表id' + res.data[0])
        
        that.setData({
          period: res.data[0],
          periodid: res.data[0].period_id,
        })
          
        // that.data.period.period__startprice = that.data.period.period__startprice.toFixed(2)

        // period.period__startprice - cutprice


        console.log('期表内容' + that.data)
        if (res.data[0].status == 1) {
          that.setData({
            end: true,
          });
          that.timeapproach(res.data[0].period__endtime);
        } else if (res.data[0].status == 0) {
          that.setData({
            sentence: '该订单已取消',
            end: false,
          })
        } else {
          that.setData({
            sentence: '该订单已过期',
            end: false,
          })
        }


      }
    })
  },

  //合并onecut和twocut生成res
  merge: function () {
    var middle1 = [];
    var cutprice = 0;
    for (var i = 0; i < this.data.onecut.length; i++) {
      var middle = {};
      middle.pic = this.data.onecut[i].member__picture;
      middle.name = this.data.onecut[i].member__name;
      middle.cutprice = this.data.onecut[i].membership__cutprice;
      cutprice = cutprice + middle.cutprice;
      
      middle.title = this.data.title[i];
      middle1.push(middle);
    }
    var middle2 = [];
    for (var i = this.data.twocut.length - 1; i >= 0; i--) {
      var middle = {};
      middle.pic = this.data.twocut[i].audience__picture;
      middle.name = this.data.twocut[i].audience__nickname;
      middle.cutprice = this.data.twocut[i].cutprice;
      cutprice = cutprice + middle.cutprice;
      middle2.push(middle);
    }
    cutprice = cutprice.toFixed(2)
    this.setData({
      onecut: middle1,
      twocut: middle2,
      cutprice: cutprice,
      // realprice: (period.period__startprice - cutprice).toFixed(2),
      number: this.data.onecut.length + this.data.twocut.length,
    })

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'BOAT',
      path: 'pages/teamcut/teamcut?orderid=' +
        this.data.orderid +
        '&' + 'nickname=' + this.data.nickname +
        '&' + 'avatarUrl=' + this.data.avatarUrl +
        '&' + 'steamid=' + this.data.steamid +
        '&' + 'userid=' + this.data.userid,
      success: (res) => {
        console.log("转发成功", res);

      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }

  },
  //右边按钮点击
  rightbindtap: function () {
    if (!this.data.end) {
      wx.showToast({
        title: '订单已超时',
        icon:'loading',
        duration: 2000,
      })
      return '';
    }
    var that = this;
    console.log(this.data.btn_index)
    if (this.data.btn_index == 0) {
      wx.navigateTo({
        url: "/pages/myteam/myteam",
      })
    }
    else {

      for (var i = 0; i < common.homelist.length; i++) {
        if (this.data.periodid == common.homelist[i].periodid) {
          common.currentData = common.homelist[i];
          break;
        }
      }
      if (this.data.onecut[0].steamnumber > 5) {
        wx.showModal({
          title: '拼团人数已满，是否单独发船',
          content: '',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "/pages/toboat/toboat",
              });
            } else {//这里是点击了取消以后
              console.log('用户点击取消')
            }
          }
        });
        //common.data.steamid = this.data.steamid;


      }
      else {
        wx.navigateTo({
          url: "/pages/toboat/toboat?steamid=" + that.data.steamid,
        })


      }


    }


  },
  //帮这好友砍一刀
  cutprice: function (steamid) {
    // if (!this.data.end) {
    //   return '';
    // }
    var that = this;
    wx.request({
      url: 'https://xiaoyibang.top:8002/dajia/cutprice',
      data: {
        'steamid': that.data.steamid,
        'userid': app.globalData.userid,
        'periodid': that.data.periodid,
      },
      success: (res) => {
        console.log("状态2")
        that.setData({
          btn_index: 2,
        })
        that.getorderdetail(that.data.steamid);

      }
    })

  },
  timeapproach: function (endtime) {
    this.data.setInter = setInterval(
      () => {
        var nowtime = Math.floor(new Date().getTime() / 1000);
        var time = endtime - nowtime;
        var day = Math.floor(time / (3600 * 24));
        var hour = Math.floor((time - day * 3600 * 24) / 3600);
        var minute = Math.floor((time - day * 3600 * 24 - hour * 3600) / 60);
        var second = time - day * 3600 * 24 - hour * 3600 - minute * 60;
        if (hour < 10) {
          hour = '0' + hour;
        }
        if (minute < 10) {
          minute = '0' + minute;
        }
        if (second < 10) {
          second = '0' + second;
        }
        this.setData({
          day: day,
          hour: hour,
          minute: minute,
          second: second,
        })


      }, 1000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    var price = this.data.period.period__startprice - this.data.cutprice - this.data.period.period__cutprice
    price = price.toFixed(2)
    this.setData({
      realprice:price
    })
    console.log(this.data.realprice,"realprice---")
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
    clearInterval(this.data.setInter)
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







})