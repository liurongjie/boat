// pages/component/boat/boat.js
var app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoboat: function () {
      app.index = 4;//4代表参团页
      wx.navigateTo({
        url: '../toboat/toboat',
      })
      console.log("gotoboat");
    },
  }
})
