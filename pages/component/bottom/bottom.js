// pages/component/bottom/bottom.js
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
=======


  },

  /**
   * 组件的初始数据
   */
  data: {

  },


  /**
   * 组件的方法列表
   */

  methods: {

    goback:function(){
       wx.navigateBack({
       delta:1,
       })
      //console.log(this.data.taskfunc);
    },

    goboat:function() {
      // body...
      console.log("go to boat");
    }


    change1: function () {
      const app = getApp();
      app.index = 1;
      this.setData({
        index: 1,
      })
    },
    change2: function () {
      const app = getApp();
      app.index = 2;
      this.setData({
        index: 2,
      })
    },
    change3: function () {
      const app = getApp();
      app.index = 3;
      this.setData({
        index: 3,
      })
    },

  }
})
