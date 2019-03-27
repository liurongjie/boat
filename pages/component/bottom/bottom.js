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

    // change1: function () {
    //   const app = getApp();
    //   app.index = 1;
    //   this.setData({
    //     index: 1,
    //   })
    // },
    // change2: function () {
    //   const app = getApp();
    //   app.index = 2;
    //   this.setData({
    //     index: 2,
    //   })
    // },
    // change3: function () {
    //   const app = getApp();
    //   app.index = 3;
    //   this.setData({
    //     index: 3,
    //   })
    // },
    goback:function(){

      wx.navigateBack({
        delta:1,
      })
      //console.log(this.data.taskfunc);
    },

    goboat:function() {
      // body...
      this.setData({
        taskfunc : 'prepay1'
      })
      app.buy_index = 2,
        console.log("go on boat,here is bottom.js", app.buy_index, this.taskfunc);
    },

    myboat: function () {
      // body...

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
