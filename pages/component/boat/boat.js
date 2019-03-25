// pages/component/boat/boat.js
var app=getApp();

var offsetLeft_;
var deltaX;
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   */
  data: {
   
    lastX: 0,
    lastY: 0,
    touchDotX : 0,//X按下时坐标
    touchDotY :0,//y按下时坐标
    interval:0,//计时器
    time : 0,//从按下到松开共多少时间*100
    list: [ "list1", "list2", "list3", "list4"],
 
    // scroll_index:1,
    // scroll_array: ['i1', 'i2', 'i3', 'i4'],
    scroll_page:"",
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

  

    jumpTo: function (e) {

      // 获取标签元素上自定义的 data-opt 属性的值
      let target = e.currentTarget.dataset.opt;

      this.setData({
        toView: target
      })
    },

    scroll_move:function(e){
      console.log(e)
      offsetLeft_=e.detail.scrollLeft
      deltaX=e.detail.deltaX
      console.log(offsetLeft_, '移动', deltaX)
      
      if (deltaX<0)
      {
        if (offsetLeft_ > 0 && offsetLeft_ < 430) {
          this.setData({
            scroll_page: 'i2'
          })
          console.log("turn to i2")
        }
        else if (offsetLeft_ > 430 && offsetLeft_ < 827) {
          this.setData({
            scroll_page: 'i3'
          })
        }
        else if (offsetLeft_ > 827 && offsetLeft_ < 1224) {
          this.setData({
            scroll_page: 'i4'
          })
        }
      }
      else if (deltaX > 0)
      {
        if (offsetLeft_ > 0 && offsetLeft_ < 430) {
          this.setData({
            scroll_page: 'i1'
          })
        }
        else if (offsetLeft_ > 430 && offsetLeft_ < 827) {
          this.setData({
            scroll_page: 'i2'
          })
        }
        else if (offsetLeft_ > 827 && offsetLeft_ < 1224) {
          this.setData({
            scroll_page: 'i3'
          })
        }
      }

      
    }
  
    
  },

 
  


  
})
