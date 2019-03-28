// pages/component/tobuy/tobuy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    picture_production: [
      '/static/pic/1.jpg', '/static/pic/2.jpg', '/static/pic/3.jpg'
    ],
    icon62: '/static/pic/1211.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pro_map:function(){
      var app =getApp();
      app.buy_index=3;
      console.log("查看地图", app.buy_index)

      
    }
  }
})
