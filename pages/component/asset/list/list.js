// pages/component/asset/list/list.js
var app=getApp();
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
    list:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changelist2:function(){
      app.list=2;

    },
    changelist3: function () {
      app.list = 3;
      
    },
    changelist4: function () {
      app.list = 4;
     
    },
    changelist5: function () {
      app.list = 5;
      
    },
    changelist6: function () {
      app.list = 6;
      
    }
  }
})
