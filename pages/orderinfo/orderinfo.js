// compoment/dingdan/dingdan.js
var jsonData = require('../../data/json.js');
var common=require('../../common/index.js');
Page({
  data: {
    curentorder:'',
    state: '',
    color1: '',
    color2: '',
    state1: '',
    url: '',
    name: '',
    preprice: '',
    prodesc: '',
    percent: '90',
    presentprice: '',
    zuo: '',
    you: '',
    price: '',
    price1: '',
    tiao: false,
    process: 0,//40比80作为进度条0-80
    begintime: '',
    endtime: '',
    quxiao: '关于取消：组团过程中因个人意愿取消订单，定金将不予退还',
    height: '64%',
    top: '1140rpx',
    setInter: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
    ytime: '',
    stat1: 1,
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      curentorder:common.data.orderdetail,
    })













    var postid = options.id
    this.setData({
      index: postid
    })
    var that = this//不要漏了这句，很重要
    wx.request({
      url: '',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({ lists: res.data[postid] })
      },
      fail: function () {
        console.log('fail');
        that.setData({ lists: jsonData.dataList[postid] });
      },
    });



    this.data.setInter = setInterval(
      () => {
        var end = this.data.endtime;

        end = this.getLocalTime(end);
        this.setData({
          ytime: end
        })
        var timestamp = Date.parse(new Date());

        timestamp = timestamp / 1000;


        var time = this.data.endtime - timestamp

        var stamp = this.data.endtime - this.data.begintime;
        var p = time / stamp;
        p = (1 - p) * 80

        this.setData({
          process: p
        })
        var day = parseInt(time / 86400);
        var hour = parseInt(time / 3600) - 24 * day;
        var minute = parseInt(time / 60) - 1440 * day - 60 * hour;
        var second = time - 86400 * day - 3600 * hour - 60 * minute;

        this.setData({
          day: day,
          hour: hour,
          minute: minute,
          second: second,
        })
        if (this.data.hour < 10) this.setData({ hour: '0' + hour });
        if (this.data.minute < 10) this.setData({ minute: '0' + minute });
        if (this.data.second < 10) this.setData({ second: '0' + second })
        if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
          clearInterval(this.data.setInter);
          this.setData({
            day: 0,
            hour: '00',
            minute: '00',
            second: '00',
            process: 80,

          })
        }
      }
      , 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getLocalTime: function (nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
  },

  onReady: function () {
    var { lists } = this.data;
    console.log(lists.state);
    if (lists.state == 1) this.setData({ state: '预付完成  待完成拼团', color1: '#FEB25E ', color2: '#FE8F57 ', state1: '预付费用1元', zuo: '取消订单', you: '进我的团', price: '实时价', price1: '当前实时价', tiao: true, height: '55%', top: '1025rpx' });
    if (lists.state == 2) this.setData({ state: '拼单完成  待完成支付', color1: '#FF060D ', color2: '#FF64A7 ', state1: '预付费用1元', zuo: '取消订单', you: '进我的团', price: '最终价', price1: '最终交易价' });
    if (lists.state == 3) this.setData({ state: '支付完成  待确认结束', color1: '#2EA0B6 ', color2: '#00ADCD ', state1: '预付费用1元 已退还', zuo: '联系我们', you: '我已完成', price: '已支付', price1: '最终支付价', quxiao: '' });
    if (lists.state == 4) this.setData({ state: '订单完成  待评价完成', color1: '#5EE4FE ', color2: '#57ABFE ', state1: '预付费用1元 已退还', zuo: '申请维权', you: '我要评价', price: '最终价', price1: '最终交易价', quxiao: '' });
    if (lists.state == 5) this.setData({ state: '评价完成', color1: '#FEB25E', color2: '#FE8F57 ', state1: '预付费用1元 已退还', zuo: '申请维权', you: '查看评价', price: '最终价', price1: '订单实付价', quxiao: '' });
    this.setData({
      url: lists.url,
      name: lists.name,
      preprice: lists.preprice,
      prodesc: lists.prodesc,
      presentprice: lists.presentprice,
      endtime: lists.time,
      begintime: lists.time0,
      stat1: lists.state,
      id: lists.id,
    });
  },
  back: function () {
    wx.navigateBack({
      delta: 1
    });

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },
  you: function () {
    var index = this.data.stat1
    console.log(index);
    if (index == 1 || index == 2) {
      var index1 = this.data.id;
      wx.navigateTo({
        url: '../cantuan/cantuan?id=' + index1,
      })
      console.log(index1)
    }


  },
  zuo: function () {
    var index = this.data.stat1
    console.log(index);
    var that = this//不要漏了这句，很重要
    if (index == 1 || index == 2) {
      wx.showModal({
        title: '删除此订单',
        content: '',
        success: function (res) {
          if (res.confirm) {

            wx.request({
              url: '',
              data: {},
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res) {
                console, log("success");
              },
              fail: function () {
                console.log('fail');
              },
            });

            //这里是点击了确定以后
            console.log('用户点击确定');
            wx.navigateBack({
              delta: 1
            })
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    }
    else if (index == 3) {
      wx.navigateTo({
        url: '../lianxiwomen/lianxi',
      })
    }
    else if (index == 4 || index == 5) {
      wx.navigateTo({
        url: '../lianxiwomen/lianxi',
      })
    }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})