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
    status: app.globalData.status,
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    changelist:function(){
      var status=app.list;
      this.setData({
        list:status,
      })
    }
  }
})
