// pages/toboat/toboat.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buy_index:"",
    latitude:30.41,
    longitude:114.29,
    pro_data:{},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options,e) {
    console.log("上一个界面传值-产品信息：",options)
    

    // url: '../toboat/toboat?production_id=' + pro_data.bean.production_id +
    //   "&production_name=" + pro_data.bean.production_name +
    //   "&onboat_people_number=" + pro_data.bean.onboat_people_number +
    //   "&leiji_save_memory=" + pro_data.bean.leiji_save_memory +
    //   "&cut_times=" + pro_data.bean.cut_times +
    //   "&start_price=" + pro_data.bean.start_price +
    //   "&real_time_price=" + pro_data.bean.real_time_price +
    //   "&start_time=" + pro_data.bean.start_time +
    //   "&end_time=" + pro_data.bean.end_time +
    //   "&longitude=" + pro_data.bean.longitude +
    //   "&latitude=" + pro_data.bean.latitude +
    //   "&location=" + pro_data.bean.location

    this.setData({
      buy_index: app.buy_index,
      pro_data:options
    })

    console.log('已获得的：',this.data.pro_data)

    // wx.request({
    //   url: 'https://xiaoyibang.top:8001/dajia/firstcomment',
    //   data: {
    //     'productionid':this.pro_data.production_id
    //   },
    //   success: (res) => {
       
    //     console.log(res)
    //   }
    // })

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

  changestatus_buy:function(){
    this.setData({
      buy_index: app.buy_index
    })
    console.log("changed to ", this.data.buy_index)
  },


  change_evaluation:function(){
    this.setData({
      buy_index: app.buy_index
    })
    console.log("changed to ", this.data.buy_index)
  },


  backto_boat:function(){

    this.setData({
      buy_index: app.buy_index
    })
    console.log("changed to ", this.data.buy_index)
  }
})