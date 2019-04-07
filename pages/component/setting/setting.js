// pages/component/setting/setting.js
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
 ready:function(){
   app.list=1;
   this.setData({list:1})
 },
  /**
   * 组件的方法列表
   */
  methods: {
    back: function () {
   this.setData({list:1});
   app.list=1;
    },
    changelist:function(){
      var status=app.list;
      this.setData({
        list:status,
      })
    }
  }
})
