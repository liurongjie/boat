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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options,e) {
    console.log("上一个界面传值-产品id：",options.producation_id)
    this.setData({
      buy_index: app.buy_index
    })
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