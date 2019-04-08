// pages/component/pro_map/mapview.js

var common = require("../../../common/index.js");
Component({
  /**
   * 组件的属性列表
   */


  /**
   * 组件的初始数据
   */
  data: {

  },

  ready: function () {

    this.setData({
      data_list: common.currentData,
    })
    console.log("地图页信息：",this.data.data_list)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function () {
      var app = getApp();
      app.buy_index = 1;
      console.log("从地图返回商品详情页", app.buy_index)
    },
  },


  lifetimes: {
    attached() {
      // // 在组件实例进入页面节点树时执行
      // this.setData({
      //   latitude: this.properties.location_latitude,
      //   longitude: this.properties.location_longitude,
      // })

    },
  }
})
