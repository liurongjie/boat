// pages/component/tab/tab.js
var app = getApp();
var common=require('../../../common/index.js');
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
    h:'',
    h1:'',
    h2:'',
  },

  ready: function () {
    var that = this;
    var h =  (44/640)*app.globalData.h;
    var h1=(13/12)*h;
    var h2=(10/12)*h;
    that.setData({ h: h ,h1:h1,h2:h2});
    
    },
  /**
   * 组件的方法列表
   */
  
  methods: {
    changelist: function (e) {
      common.changelist(e.currentTarget.dataset.index);
      this.setData({
        index: common.data.index,
      }) 
    },
  }
})
