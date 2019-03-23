// pages/component/home/home.js
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
    imgUrls: [
      '/static/pic/1.jpg',
      '/static/pic/2.jpg',
      '/static/pic/3.jpg',
    ],
    currentSwiper: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onslidechangeend: function (e) {
      var that = this;

      that.setData({
        currentSwiper: e.detail.current
      })

    },


  }
})
