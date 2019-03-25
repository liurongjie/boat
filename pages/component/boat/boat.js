// pages/component/boat/boat.js
var app=getApp();

var touchDotX;
var touchDotY;
var touchDotnewX;
var touchDotnewY;

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



    touchStart: function (e) {

     console.log(e)
      touchDotX = e.touches[0].pageX; // 获取触摸时的原点
      touchDotY = e.touches[0].pageY;
      console.log(touchDotX, touchDotY,'start')
    },  // 触摸移动事件 
      
     
 
              
      
    touchEnd: function (e) {
      console.log(e)
      touchDotnewX = e.changedTouches[0].pageX;
      touchDotnewY = e.changedTouches[0].pageY;
      console.log(touchDotnewX, touchDotnewY, 'end')

      if (((touchDotnewX - touchDotX) < 20) && this.data.scroll_index<3)
      {
        this.setData({
          scroll_index: this.data.scroll_index + 1,
         
        })

        this.setData({
          scroll_page: this.data.scroll_array[this.data.scroll_index]
        })

        console.log("向右滑动，now is ", this.data.scroll_page,this.data.scroll_index)

      }

      else if (((touchDotnewX - touchDotX) > 20) && this.data.scroll_index>0)
      {
        this.setData({
          scroll_index: this.data.scroll_index-1,
         
        })

        this.setData({
          scroll_page: this.data.scroll_array[this.data.scroll_index] 
        })

        console.log("向左滑动，now is ", this.data.scroll_page, this.data.scroll_index)

      }
      else{
        console.log("未触发滑动监听")
      }
    },
     


    
    
  },

 
  


  
})
