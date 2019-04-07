// pages/component/pro_map/mapview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    location_latitude:{
      type:String,
      value:'',
    },

    location_longitude:{
      type: String,
      value:'',
    },


    location:{
      type:String,
      value:'',
    },


    production_name: {
      type: String,
      value: '',
    },

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
