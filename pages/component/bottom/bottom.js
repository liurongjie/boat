// pages/component/bottom/bottom.js

var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     //根据页面决定按钮执行的任务
      taskfunc:{
        type: String,
        value: ""
    },//任务调用的函数名
  },

  /**
   * 组件的初始数据
   */
  data: {
    pay:true,
   },

  /**
   * 组件的方法列表
   */

  methods: {

    goback:function(){

      if ((app.buy_index == 4) || (app.buy_index == 3) || (app.buy_index == 2))
      {
        app.buy_index =1
      }
      else{
        wx.navigateBack({
          delta: 1,
        })
      }
      

    

      //console.log(this.data.taskfunc);
    },

    goboat:function() {
      
      this.setData({
        taskfunc : 'prepay1'
      })
      app.buy_index = 2,
      console.log("go on boat,here is bottom.js", app.buy_index);
    },

    myboat: function () {
      // body...
      wx.navigateTo({
        url: '../teamcut/teamcut',
      })
      console.log("see my boat");
    },

    prepay1: function () {
      // body...

      console.log("pre-pay 1 yuan");
      // 支付成功
      if( this.data.pay)
      {
        wx.showToast({
          title: '支付成功',
        })
        this.setData({
          taskfunc: 'myboat'
        })

      }
      else{
        console.log("未支付成功")
      }
       
    },

    prepay2: function () {
      // body...
      console.log("pre-pay half price");
    },

   
  }
})
