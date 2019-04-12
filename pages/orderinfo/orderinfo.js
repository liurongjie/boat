// compoment/dingdan/dingdan.js
var jsonData = require('../../data/json.js');
var common=require('../../common/index.js');
var app = getApp();
Page({
  data: {
    orderstatus:'',
    order: '',
    //根据订单状态不同布局不同
    title: '',
    title1: '',
    color1: '',
    color2: '',
    zuo: '',
    you: '',
    price: '',
    price1: '',
    quxiao: '关于取消：组团过程中因个人意愿取消订单，定金将不予退还',
   
    
    url: "https://xiaoyibang.top:8001/uploads/",





    process: 0,//40比80作为进度条0-80
    
   
    tiao: false,
    height: '64%',
    top: '1140rpx',
    //定时器时间
    setInter: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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


      }
      , 1000)
  },
  getprocess:function(starttime,endtime){
    var nowtime = Math.floor(new Date().getTime() / 1000);
    var process = Math.floor(100*(endtime-nowtime)/(endtime-starttime));
    console.log(process)
    this.setData({
      process:process,
    })
  },
   



    


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  onReady: function () {
    var state = common.currentorder.status;
    console.log(state)
    if (state == 1) this.setData({title: '预付完成  待完成拼团', color1: '#FEB25E ', color2: '#FE8F57 ', title1: '预付费用1元', zuo: '取消订单', you: '进我的团', price: '实时价', price1: '当前实时价', tiao: true, height: '55%', top: '1025rpx' });
    if (state == 2) this.setData({ title: '拼单完成  待完成支付', color1: '#FF060D ', color2: '#FF64A7 ', title1: '预付费用1元', zuo: '取消订单', you: '进我的团', price: '最终价', price1: '最终交易价' });
    if (state == 3) this.setData({ title: '支付完成  待确认结束', color1: '#2EA0B6 ', color2: '#00ADCD ', title1: '预付费用1元 已退还', zuo: '联系我们', you: '我已完成', price: '已支付', price1: '最终支付价', quxiao: '' });
    if (state == 4) this.setData({ title: '订单完成  待评价完成', color1: '#5EE4FE ', color2: '#57ABFE ', title1: '预付费用1元 已退还', zuo: '申请维权', you: '我要评价', price: '最终价', price1: '最终交易价', quxiao: '' });
    if (state == 5) this.setData({ title: '评价完成', color1: '#FEB25E', color2: '#FE8F57 ', title1: '预付费用1元 已退还', zuo: '申请维权', you: '查看评价', price: '最终价', price1: '订单实付价', quxiao: '' });
    
    var order = common.currentorder;
    console.log(common.currentorder)
    this.timeapproach(common.currentorder.period__endtime);
    this.getprocess(common.currentorder.period__starttime, common.currentorder.period__endtime);
    order.production__merchant__logo = this.data.url + order.production__merchant__logo;
    switch(state){
      case 1 :
        order.time1=this.timetransform(order.time1);
        break;
      case 2:
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        break;
      case 3:
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        order.time3 = this.timetransform(order.time3);
        
        break;
      case 4:
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        order.time3 = this.timetransform(order.time3);
        order.time4 = this.timetransform(order.time4);
        break;
      case 5:
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        order.time3 = this.timetransform(order.time3);
        order.time4 = this.timetransform(order.time4);
        order.time5 = this.timetransform(order.time5);
        break;
    }
    this.setData({
      order: order,
      orderstatus:state,
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
  timetransform:function(time){
    var unixTimestamp = new Date(time * 1000);
    var commonTime = unixTimestamp.toLocaleString();
    return commonTime;
  },
  zuo:function(){
    this.deleteorder();
  },
  you:function(){
    var state = this.data.orderstatus;
    var that = this;
    switch (state) {
      case 1:
        this.gotomyteam();
        break;
      case 2:
        this.gotomyteam();
        break;
      case 3:
        this.completeorder();
        break;
      case 4:

        break;
      case 5:

        break;
    }
  },
  deleteorder:function(){
    var that=this;
    wx.showModal({
      title: '删除此订单',
      content: '',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://xiaoyibang.top:8001/dajia/cancel',
            data: {
              'orderid': that.data.order.orderid,
            },
            success: (res) => {
              app.getorderlist();
            }
          })

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
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  gotomyteam:function(){
    console.log(this.data.order)
    wx.navigateTo({
      url: "/pages/teamcut/teamcut?steamid=" + this.data.order.steam_id + '&orderid=' + this.data.order.orderid
        + '&avatarUrl=' + app.globalData.avatarUrl + '&nickName=' + app.globalData.nickName + '&openid=' + app.globalData.openid
    })
  },
    
  completeorder:function(){
    var that = this;
    wx.showModal({
      title: '请确认完成订单',
      content: '',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://xiaoyibang.top:8001/dajia/completeorder',
            data: {
              'orderid': that.data.order.orderid,
            },
            success: (res) => {
            }
          })

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
  },
  comment:function(){

  },
  checkcomment:function(){

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