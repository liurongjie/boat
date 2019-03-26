// pages/component/boat/boat.js
var app=getApp();

var touchDotX;
var touchDotY;
var touchDotnewX;
var touchDotnewY;
var timeStamp_;

var timestamp_now = Date.parse(new Date());
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   */
  data: {
 
    scroll_array: ['i1', 'i2', 'i3', 'i4'],
    scroll_page:'i1',
    scroll_index:0,
  },

  
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      console.log("begin")
    },
    
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

    scroll_move:function(e){
      console.log(e)
      //判断一次滑动组结束后的位置，将此时页面设为里该位置最近页
      timeStamp_=e.timeStamp;
      console.log(timeStamp_, timestamp_now/1000)
      if((timeStamp_-e.timeStamp)>100)
      {
        console.log("暂停")
      }
    }

     
 
              
      
  


    
    
  },

 
  


  
})
