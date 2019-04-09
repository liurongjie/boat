// compoment/dingdan/dingdan.js
var jsonData = require('../../data/json.js');
var common=require('../../common/index.js');
Page({
  data: {
    orderstatus:'',
    state: '',
    color1: '',
    ytime: '',
    color2: '',
    state1: '',

    order:'',
    
    url: "https://xiaoyibang.top:8001/uploads/",
    name: '',//名字
    preprice: '',//之前的价格
    prodesc: '',//产品描述
    presentprice: '',//当前价格
    begintime: '',//开始时间
    endtime: '',//结束时间
    stat1: 1,//订单state
    ytime1:'',//支付时间
    ytime2:'',//完成时间
    ytime3:'', //评价时间


    process: 0,//40比80作为进度条0-80
    percent: '90',
    zuo: '',
    you: '',
    price: '',
    price1: '',
    tiao: false,
    quxiao: '关于取消：组团过程中因个人意愿取消订单，定金将不予退还',
    height: '64%',
    top: '1140rpx',
    setInter: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
   



    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  onReady: function () {
    var state=common.data.orderstatus;
    if (state == 1) this.setData({ state: '预付完成  待完成拼团', color1: '#FEB25E ', color2: '#FE8F57 ', state1: '预付费用1元', zuo: '取消订单', you: '进我的团', price: '实时价', price1: '当前实时价', tiao: true, height: '55%', top: '1025rpx' });
    if (state == 2) this.setData({ state: '拼单完成  待完成支付', color1: '#FF060D ', color2: '#FF64A7 ', state1: '预付费用1元', zuo: '取消订单', you: '进我的团', price: '最终价', price1: '最终交易价' });
    if (state == 3) this.setData({ state: '支付完成  待确认结束', color1: '#2EA0B6 ', color2: '#00ADCD ', state1: '预付费用1元 已退还', zuo: '联系我们', you: '我已完成', price: '已支付', price1: '最终支付价', quxiao: '' });
    if (state == 4) this.setData({ state: '订单完成  待评价完成', color1: '#5EE4FE ', color2: '#57ABFE ', state1: '预付费用1元 已退还', zuo: '申请维权', you: '我要评价', price: '最终价', price1: '最终交易价', quxiao: '' });
    if (state == 5) this.setData({ state: '评价完成', color1: '#FEB25E', color2: '#FE8F57 ', state1: '预付费用1元 已退还', zuo: '申请维权', you: '查看评价', price: '最终价', price1: '订单实付价', quxiao: '' });
    
    var order = common.currentorder;
    order.production__merchant__logo = this.data.url + order.production__merchant__logo;
    switch(state){
      case '1' :
        order.time1=this.timetransform(order.time1);
        break;
      case '2':
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        break;
      case '3':
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        order.time3 = this.timetransform(order.time3);
        
        break;
      case '4':
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        order.time3 = this.timetransform(order.time3);
        order.time4 = this.timetransform(order.time4);
        break;
      case '5':
        order.time1 = this.timetransform(order.time1);
        order.time2 = this.timetransform(order.time2);
        order.time3 = this.timetransform(order.time3);
        order.time4 = this.timetransform(order.time4);
        order.time5 = this.timetransform(order.time5);
        break;
    }
    this.setData({
      order: order,
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
    console.log("函数正在运行")
    var unixTimestamp = new Date(time * 1000);
    var commonTime = unixTimestamp.toLocaleString();
    return commonTime;
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