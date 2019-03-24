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
   
    lastX: 0,
    lastY: 0,


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

    swiper:function(e){
      // console.log(e)
      let currentX = e.changedTouches[0].pageX
      let currentY = e.changedTouches[0].pageY

      let tx =currentX -this.data.lastX
      let ty = currentY - this.data.lastY

      let text =""

      if (Math.abs(tx) > Math.abs(ty)) {

        //左右方向滑动

        if (tx < 0)

          text = "向左滑动"

        else if (tx > 0)

          text = "向右滑动"

      }

      else {

        //上下方向滑动

        if (ty < 0)

          text = "向上滑动"

        else if (ty > 0)

          text = "向下滑动"

      }



      //将当前坐标进行保存以进行下一次计算

      this.data.lastX = currentX

      this.data.lastY = currentY

      this.setData({

        text: text,

      })

      console.log(text)
      wx.showToast({
        title: this.data.text,
      })

 
    },
    
  },

 
  


  
})
