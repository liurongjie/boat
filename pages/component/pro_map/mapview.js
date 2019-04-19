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
    markers: [{
      // iconPath: '/resources/others.png',
      id: 0,
      latitude:"",
      longitude: "",
      width: 50,
      height: 50,
    }],
    data_list:{}
  },

  ready: function () {

    this.setData({
      data_list: common.currentData,
    })
    console.log("地图页信息：",this.data.data_list)

    this.setData({
      markers: [{
        latitude: this.data.data_list.production__merchant__latitude,
        longitude: this.data.data_list.production__merchant__longitude,
      }],
     
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    back: function () {
      var app = getApp();
      app.buy_index = 1;
      wx.navigateTo({
        url: '/pages/toboat/toboat',
      })
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
