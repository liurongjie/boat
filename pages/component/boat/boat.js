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
    index: 1,
  },
  ready:function(){
    this.setData({
      index: app.index,
    })
  }
,
 
  /**
   * 组件的方法列表
   */
  methods: {
    gotoboat: function () {
      app.index = 4;//4代表参团页
      wx.navigateTo({
        url: '../toboat/toboat',
      })
      app.buy_index=1,
      console.log("gotoboat", app.buy_index);
    },

   

   

     
 
              
      
  


    
    
  },

 
  


  
})
