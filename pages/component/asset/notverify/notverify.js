// pages/component/asset/notverify/notverify.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  ready:function(){
    this.setData({
      
      pic: app.globalData.avatarUrl,

    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    pic: '',

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goto:function(){
      wx.navigateTo({
        url: '/pages/verify/verify'
      })
    }
  }
})
