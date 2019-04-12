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
    status: 0,
  },
 ready:function(){
   this.setData(
     {
       status: app.globalData.status,
     }
   )
   
 },
  /**
   * 组件的方法列表
   */
  methods: {
  }
})
