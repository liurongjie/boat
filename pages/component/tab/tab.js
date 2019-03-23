// pages/component/tab/tab.js
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
    index: 1,
  },

  /**
   * 组件的方法列表
   */
  
  methods: {
    change1: function () {
      const app = getApp();
      app.index=1;
      this.setData({
        index:1,
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
